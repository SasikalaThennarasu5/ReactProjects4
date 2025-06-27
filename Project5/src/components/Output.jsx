import React from 'react';

const Output = ({ output, language }) => {
  return (
    <div className="output">
      <h4>Output:</h4>
      {language === 'html' ? (
        <iframe
          title="output"
          srcDoc={output}
          style={{ width: '100%', height: '200px', border: '1px solid #ccc' }}
        />
      ) : (
        <pre>{output}</pre>
      )}
    </div>
  );
};

export default Output;
