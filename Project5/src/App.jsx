import React, { useState } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';
import './styles.css';

const App = () => {
  const [language, setLanguage] = useState('html');
  const [code, setCode] = useState('<h1>Hello World</h1>');
  const [output, setOutput] = useState('');

  const runCode = () => {
    if (language === 'html') {
      setOutput(code);
    } else if (language === 'javascript') {
      try {
        const result = eval(code);
        setOutput(String(result));
      } catch (err) {
        setOutput(err.message);
      }
    }
  };

  return (
    <div className="app">
      <h2>🧑‍💻 Online Code Editor</h2>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="html">HTML</option>
        <option value="javascript">JavaScript</option>
      </select>
      <Editor code={code} setCode={setCode} language={language} />
      <button onClick={runCode}>Run Code</button>
      <Output language={language} output={output} />
    </div>
  );
};

export default App;
