import { useState, useEffect } from 'react';

const Color = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <div>
        <p className='dark:text-red-400 text-cyan-300'>You clicked {darkMode ? 'On' : 'Off'} times</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          Click me
        </button>
      </div>
      <h1>hi</h1>
    </div>
  )
}

export default Color;
