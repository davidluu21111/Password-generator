import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let availableChars = '';
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    if (!availableChars) return;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="password-display">
        <input type="text" value={password} readOnly />
        <button onClick={handleCopyPassword}>
          <i className="far fa-copy"></i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            Include Lowercase (a-z)
          </label>
        </div>
        <div className="setting">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Include Uppercase (A-Z)
          </label>
        </div>
        <div className="setting">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers (0-9)
          </label>
        </div>
        <div className="setting">
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Include Symbols (!@#$%^&*)
          </label>
        </div>
        <div className="setting">
          <label>
            Password Length: 
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="4"
              max="64"
            />
          </label>
        </div>
      </div>
      <button className="generate-button" onClick={handleGeneratePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
