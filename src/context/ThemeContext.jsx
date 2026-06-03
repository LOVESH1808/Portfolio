import { createContext, useContext, useEffect, useState } from 'react';

/* ─────────────────────────────────────────────
   THEMES REGISTRY
   To add a new theme:
   1. Add it here with a label and value
   2. Add matching [data-theme="value"] block in themes.css
   ───────────────────────────────────────────── */
export const THEMES = [
  { value: 'light', label: 'Light', icon: '☀️' }, 
  { value: 'dark',  label: 'Dark',  icon: '🌙' },
  // { value: 'forest', label: 'Forest', icon: '🌿' },  ← add future themes here
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && THEMES.find(t => t.value === saved)) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const idx = THEMES.findIndex(t => t.value === theme);
    setTheme(THEMES[(idx + 1) % THEMES.length].value);
  };

  const setThemeByValue = (value) => {
    if (THEMES.find(t => t.value === value)) setTheme(value);
  };

  const currentTheme = THEMES.find(t => t.value === theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByValue, currentTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}