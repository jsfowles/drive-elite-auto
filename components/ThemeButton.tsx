import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

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

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" bg-elite -mb-2.5 rounded-full w-12 h-12 md:hover:scale-110 md:scale-75 transition-all flex justify-center items-center"
    >
      {darkMode ? (
        <SunIcon className=" h-8 w-8 text-white" />
      ) : (
        <MoonIcon className=" mb-0.5 h-6 w-6 text-white" />
      )}
    </button>
  );
};
