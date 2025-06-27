import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ code, setCode, language }) => {
  const getLang = () => {
    if (language === 'html') return 'html';
    if (language === 'javascript') return 'javascript';
    return 'plaintext';
  };

  return (
    <div className="editor">
      <MonacoEditor
        height="300px"
        defaultLanguage={getLang()}
        language={getLang()}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
};

export default Editor;
