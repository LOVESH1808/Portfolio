import { Link } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/blog',    label: 'Blog'    },
  { to: '/gallery', label: 'Art'     },
  { to: '/contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com',   label: 'GitHub',   icon: 'GH' },
  { href: 'https://linkedin.com', label: 'LinkedIn',  icon: 'in' },
  { href: 'https://x.com',        label: 'X',         icon: '𝕏'  },
];

export default function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">✦ yourname.dev</span>
          <p className="footer__tagline">
            Building things, writing ideas,<br />making art.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer__socials">
          {SOCIALS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="footer__social"
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Your Name. Built with React + Vite.</span>
        <span className="footer__heart">Made with ♥ & ☕</span>
      </div>
    </footer>
  );
}
