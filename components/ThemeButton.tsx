import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export const ThemeButton = () => {
  // set to undefined for initial render then use local storage
  const [darkMode, setDarkMode] = React.useState<boolean | undefined>(false);
  React.useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);
  React.useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('mxDarkMode', 'true');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('mxDarkMode', 'false');
    }
  }, [darkMode]);
  console.log(darkMode);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <SunIcon className="h-8 w-8 text-white" />
      ) : (
        <MoonIcon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};
