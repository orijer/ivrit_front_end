import "./Editor.css"

import Split from 'react-split';
import { useState, useRef, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import CodePane from '../components/CodePane';
import OutputPane from '../components/OutputPane';

function Editor() {
    const [output, setOutput] = useState("")
    const [expectingInput, setExpectingInput] = useState(false);
    const stompClientRef = useRef(null);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            onConnect: (frame) => {
                console.log(frame)
                stompClient.subscribe(`/user/queue/output`, (message) => {
                    console.log('!!! CLIENT: MESSAGE RECEIVED !!!');
                    console.log('CLIENT: Raw message object:', message);
                    console.log('CLIENT: Message headers:', message.headers);
                    console.log('CLIENT: Message body:', message.body);
                    setOutput((prev) => prev + message.body + '\n');
                });
                stompClient.subscribe(`/user/queue/input`, (message) => {
                    console.log('!!! CLIENT: INPUT MESSAGE RECEIVED !!!');
                    console.log('CLIENT: Raw message object:', message);
                    console.log('CLIENT: Message headers:', message.headers);
                    console.log('CLIENT: Message body:', message.body);
                    setExpectingInput(true);
                });
            },
            onDisconnect: () => console.log('Disconnected from WebSocket'),
            debug: (str) => console.log(str),
        });

        stompClient.activate();
        stompClientRef.current = stompClient;

        return () => stompClient.deactivate();
    }, []);

    const sendCode = (code) => {
        if (stompClientRef.current && stompClientRef.current.connected) {
            stompClientRef.current.publish({
                destination: '/app/interpret',
                body: code,
            });
            setOutput('');
        } else {
            console.log("cant send.")
        }
    };

    const sendInput = (input) => {
        if (stompClientRef.current && stompClientRef.current.connected) {
            stompClientRef.current.publish({
                destination: '/app/input',
                body: input,
            });
            setExpectingInput(false);
        } else {
            console.log("cant send.")
        }
    }; //TODO: when the program expects input from the user, it should send a message to the client, which will then allow the client to write and send it...

    return (
        <div className="split-container" dir="ltr">
            <Split className="split-view" sizes={[35, 65]} minSize={200} direction="horizontal" gutterSize={10}>
                <OutputPane output={output} sendInput={sendInput} expectingInput={expectingInput} />
                <CodePane sendCode={sendCode} />
            </Split>
        </div>
    )
}

export default Editor