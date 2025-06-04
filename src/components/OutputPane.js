import "./OutputPane.css"

import { useRef } from "react"

function OutputPane({ output, sendInput, expectingInput: isWaitingForInput }) {
    const inputBoxRef = useRef();

    function handleClickSend() {
        sendInput(inputBoxRef.current.value);
        inputBoxRef.current.value = "";
    }

    return (
        <div id="output-pane" dir="rtl">
            <div id="input-box">
                <textarea id="input-text" ref={inputBoxRef} />
                <button id="send-input-btn" className={isWaitingForInput ? "blinking" : ""} onClick={handleClickSend} disabled={!isWaitingForInput} >שלח קלט</button>
            </div>
            <textarea id="output-box" placeholder="פלט" readOnly value={output} />
        </div>
    )
}

export default OutputPane