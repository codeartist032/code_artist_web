import { useLang } from '../context/LanguageContext';

export default function Services() {
  const { lang } = useLang();

  const services = [
    {
    icon: "fa-solid fa-code",
    title: lang === 'en' ? "Web Development" : "تطوير المواقع",
    desc: lang === 'en'
      ? "Responsive, high-performance websites built with React, Flutter Web, and cutting-edge technologies."
      : "مواقع متجاوبة وعالية الأداء باستخدام React، Flutter Web، وأحدث التقنيات."
    },
    {
      icon: "fa-solid fa-palette",
      title: lang === 'en' ? "Graphic Design" : "التصميم الجرافيكي",
      desc: lang === 'en'
        ? "Creative logos, posters, banners, and full brand identities using Adobe Creative Suite."
        : "شعارات إبداعية، بوسترات، بنرات، وهويات بصرية متكاملة باستخدام أدوات Adobe."
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: lang === 'en' ? "Mobile Apps" : "تطبيقات الجوال",
      desc: lang === 'en'
        ? "Cross-platform mobile apps for Android and iOS using Flutter, fully integrated with backend systems."
        : "تطبيقات جوال متعددة المنصات لأندرويد وآيفون باستخدام Flutter مع تكامل كامل مع الخادم."
    },
    {
      icon: "fa-solid fa-gamepad", 
      title: lang === 'en' ? "Game Development" : "تطوير الألعاب",
      desc: lang === 'en'
        ? "Engaging 2D and 3D mobile games built with Unreal Engine, optimized for performance and fun."
        : "ألعاب جوال ثنائية وثلاثية الأبعاد باستخدام Unreal Engine، مصممة للأداء والمتعة."
    }
  ];

  return (
    <div id="services">
      <div className="container">
        <h1 className="sube-title">{lang === 'en' ? 'Our Services' : 'خدماتنا'}</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index}>
              <i className={`${service.icon} fa-3x`}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <a href="#contact">{lang === 'en' ? 'Contact Us' : 'اتصل بنا'}</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}