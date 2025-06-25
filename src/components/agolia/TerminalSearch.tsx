import React, { useState, useEffect } from 'react';
import './TerminalSearch.css';

const TerminalSearch = ({ children }) => {
  const [placeholder, setPlaceholder] = useState('');
  const fullPlaceholder = 'Initiate search sequence...';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPlaceholder(fullPlaceholder.substring(0, i + 1));
      i++;
      if (i > fullPlaceholder.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-search-wrapper">
      <div className="terminal-search">
        <span className="prompt">&gt;</span>
        {React.cloneElement(children, { placeholder })}
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default TerminalSearch;
