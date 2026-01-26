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

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {lang === 'en'
                  ? section.charAt(0).toUpperCase() + section.slice(1).replace('Home', 'Home')
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
        </ul>

        <div className="actions">
          <div
            className={`lang-switch ${lang === 'ar' ? 'ar' : 'en'}`}
            onClick={toggleLang}
            role="button"
            tabIndex={0}
            aria-label="Toggle language"
          >
            {lang === 'ar' ? (
              <>
                <span className="label">عربي</span>
                <span className="label">EN</span>
                <div className="knob">ع</div>
              </>
            ) : (
              <>
                <span className="label">EN</span>
                <span className="label">عربي</span>
                <div className="knob">EN</div>
              </>
            )}
          </div>
          <i className="fas fa-bars menu-icon" onClick={() => setMenuOpen(true)}></i>
          {menuOpen && <i className="fas fa-xmark close-icon-mobile" onClick={() => setMenuOpen(false)}></i>}
        </div>
      </div>
    </nav>
  );
}
