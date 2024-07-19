import React from 'react';
import { useTheme } from './ThemeProvider';

const Darkmode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>

        <button className='' >
            
        </button>

      <a
        onClick={toggleTheme}
        className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </a>
        </div>
        
    );
};

export default Darkmode;
