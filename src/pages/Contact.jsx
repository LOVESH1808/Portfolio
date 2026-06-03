import { useState } from 'react';
import './Contact.css';

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com',    icon: 'GH', handle: '@yourhandle' },
  { label: 'LinkedIn',  href: 'https://linkedin.com',   icon: 'in', handle: 'Your Name'   },
  { label: 'X / Twitter', href: 'https://x.com',       icon: '𝕏',  handle: '@yourhandle' },
  { label: 'Email',     href: 'mailto:you@example.com', icon: '✉',  handle: 'you@example.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with your form backend (Formspree, EmailJS, etc.)
    console.log('Form submitted:', form);
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__header">
        <p className="section-label">Contact</p>
        <h1 className="contact-page__title">Let's talk</h1>
        <p className="contact-page__sub">
          Open to internship opportunities, collaborations, and interesting conversations.
          I usually reply within 24 hours.
        </p>
      </div>

      <div className="contact-page__layout">
        {/* Form */}
        <div className="contact-page__form-wrap glass">
          {sent ? (
            <div className="contact-page__success">
              <span className="contact-page__success-icon">✓</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon.</p>
              <button className="btn-ghost" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__field">
                <label className="contact-page__label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact-page__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page__field">
                <label className="contact-page__label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact-page__input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page__field">
                <label className="contact-page__label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-page__input contact-page__textarea"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-page__submit">
                Send message ↗
              </button>
            </form>
          )}
        </div>

        {/* Socials */}
        <div className="contact-page__socials">
          <p className="contact-page__socials-title">Find me elsewhere</p>
          {SOCIALS.map(({ label, href, icon, handle }) => (
            <a
              key={label}
              href={href}
              className="contact-page__social glass glass-hover"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-page__social-icon">{icon}</span>
              <div>
                <div className="contact-page__social-label">{label}</div>
                <div className="contact-page__social-handle">{handle}</div>
              </div>
              <span className="contact-page__social-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
