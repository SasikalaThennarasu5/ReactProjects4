import React from 'react';

const LanguageSelector = ({ languages, selected, onChange, label }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
