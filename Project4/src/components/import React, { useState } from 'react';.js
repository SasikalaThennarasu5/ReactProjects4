import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'zh', name: 'Chinese' },
];

const Translator = () => {
  const [input, setInput] = useState('');
  const [translated, setTranslated] = useState('');
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('es');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: input,
          source: from,
          target: to,
          format: 'text'
        })
      });
      const data = await res.json();
      setTranslated(data.translatedText);
    } catch (error) {
      console.error('Translation failed:', error);
      setTranslated('Error translating text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Multi-Language Translator</h2>
      <textarea
        rows="4"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="lang-select">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
        <span>➡️</span>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleTranslate} disabled={loading || !input}>
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {translated && (
        <div className="translated">
          <h4>Translated:</h4>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
