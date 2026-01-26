import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState('Skills');

  const t = {
    title: lang === 'en' ? 'About Us' : 'من نحن',
    desc: lang === 'en'
      ? 'We are a passionate team combining art and technology to deliver stunning digital solutions. From creative designs to powerful apps, we bring your ideas to life.'
      : 'نحن فريق شغوف يجمع بين الفن والتقنية لتقديم حلول رقمية مذهلة. من التصاميم الإبداعية إلى التطبيقات القوية، نحول أفكارك إلى واقع.',
    skills: lang === 'en' ? 'Skills' : 'المهارات',
    experience: lang === 'en' ? 'Experience' : 'الخبرات'
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/about_us.jpg" alt={t.title} />
          </div>
          <div className="about-col-2">
            <h1 className="sube-title">{t.title}</h1>
            <p>{t.desc}</p>

            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'Skills' ? 'active-linke' : ''}`} onClick={() => setActiveTab('Skills')}>
                {t.skills}
              </p>
           </div>

            <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tabe' : ''}`} id="Skills">
              <ul>
                <li><span>{lang === 'en' ? 'UI/UX Design' : 'تصميم واجهات'}</span><br />Figma, Adobe XD</li>
                <li><span>{lang === 'en' ? 'Graphic Design' : 'تصميم جرافيك'}</span><br />Photoshop, Illustrator</li>
                <li><span>{lang === 'en' ? 'Web & App' : 'تطوير تطبيقات ومواقع الويب'}</span><br />Laravel, PHP, Python, React, Flutter, JavaScript</li>
                <li><span>{lang === 'en' ? 'Game Development' : 'تطوير الألعاب'}</span><br />Unreal Engine, Blender, Maya</li>
              </ul>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}