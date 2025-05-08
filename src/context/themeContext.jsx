import { useContext, createContext, useEffect, useState } from 'react';

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
  },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.foreground;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevValue) => {
      const newTheme = prevValue === themes.dark ? themes.light : themes.dark;
      return newTheme;
    });
  };
  return (
     <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
       {props.children}
     </ThemeContext.Provider>
  )
};