import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme, currentTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch theme. Current: ${currentTheme?.label}`}
      title={`Current: ${currentTheme?.label}`}
    >
      <span className="theme-toggle__icon">{currentTheme?.icon}</span>
      <div className="theme-toggle__track">
        <div className={`theme-toggle__dot theme-toggle__dot--${theme}`} />
      </div>
      <span className="theme-toggle__label">{currentTheme?.label}</span>
    </button>
  );
}
