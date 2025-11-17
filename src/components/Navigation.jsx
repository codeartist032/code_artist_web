import { useLang } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [lang]);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#header" className="brand">
          <span className="code"></span>Code Artist<span className="code"></span>
        </a>

        {/* Hamburger icon (visible on mobile) */}
        <i
          className="fas fa-bars menu-icon"
          onClick={() => setMenuOpen(true)}
        ></i>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {lang === 'en'
                  ? section.charAt(0).toUpperCase() + section.slice(1).replace('header', 'Home')
                  : {
                      Home: 'الرئيسية',
                      about: 'من نحن',
                      services: 'خدماتنا',
                      portfolio: 'أعمالنا',
                      contact: 'تواصل معنا'
                    }[section]
                }
              </a>
            </li>
          ))}
          <i
            className="fas fa-xmark close-icon"
            onClick={() => setMenuOpen(false)}
          ></i>
        </ul>

        <div className="actions">
          <div
            className={`lang-switch ${lang === 'ar' ? 'ar' : 'en'}`}
            onClick={toggleLang}
            // role="button"
            tabIndex={0}
            aria-label="Toggle language"
          >
            {lang === 'ar' ? (
              <>
                <span className="label">En</span>
                <div className="knob"></div>
              </>
            ) : (
              <>
                <span className="label">ِAr</span>
                <div className="knob"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
