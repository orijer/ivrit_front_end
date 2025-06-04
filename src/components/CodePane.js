import "./CodePane.css"

import { useState, useRef } from "react"

function CodePane({ sendCode }) {
    const [code, setCode] = useState("");
    const [lineCount, setLineCount] = useState(1);

    const codeBoxRef = useRef(null);
    const lineNumbersRef = useRef(null);
    const fileInputRef = useRef();

    function handleInput(e) {
        const value = e.target.value;
        setCode(value);
        setLineCount(value.split("\n").length);

        handleScroll();
    }

    function handleScroll() {
        if (lineNumbersRef.current && codeBoxRef.current) {
            lineNumbersRef.current.scrollTop = codeBoxRef.current.scrollTop;
        }
    }

    function handleRunCode() {
        sendCode(code);
    }

    function handleDownloadCode() {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'code.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    function handleFileSelected(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target.result;
            setCode(text);
            setLineCount(text.split("\n").length);

            fileInputRef.current.value = null;
        };
        reader.readAsText(file);
    }

    return (
        <div id="code-pane" dir="rtl">
            <div className="editor-buttons">
                <button className="editor-btn" onClick={handleRunCode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="lightgreen" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                    הרץ
                </button>
                <button className="editor-btn" onClick={() => { fileInputRef.current.click(); }}> ייבא </button>
                <button className="editor-btn" onClick={handleDownloadCode}> הורד </button> 

                <input type="file" accept=".txt" ref={fileInputRef} onChange={handleFileSelected} style={{ display: 'none' }} />
            </div>

            <div id="code-container">
                <pre id="line-numbers" ref={lineNumbersRef}>
                    {Array.from({ length: lineCount }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </pre>
                <textarea id="code-box" ref={codeBoxRef} onScroll={handleScroll} placeholder="קוד" value={code} onChange={handleInput} />
            </div>
        </div>
    )
}

export default CodePane