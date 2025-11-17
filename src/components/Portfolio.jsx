import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import ProjectDetails from './ProjectDetails';

export default function Portfolio() {
  const { lang } = useLang();
  const [currentView, setCurrentView] = useState('portfolio');
  const [selectedProject, setSelectedProject] = useState(null);

  const works = [
  {
    id: 'jobly',
    title: lang === 'en' ? 'Job Hunting App' : 'تطبيق البحث عن عمل',
    description: lang === 'en'
      ? 'An intuitive job search platform featuring smart filters, resume uploads, and personalized profiles. Designed for speed, clarity, and mobile-first access to career opportunities.'
      : 'منصة بحث عن وظائف بواجهة سهلة، تشمل فلاتر ذكية، تحميل السيرة الذاتية، وإنشاء ملف شخصي مخصص. مصممة لتوفير تجربة سريعة وواضحة للوصول إلى الفرص المهنية عبر الجوال.',
    images: [
      'Jobly/1.png','Jobly/2.png','Jobly/3.png','Jobly/4.png','Jobly/5.png','Jobly/6.png',
      'Jobly/7.png','Jobly/8.png','Jobly/9.png','Jobly/11.png','Jobly/12.png','Jobly/13.png',
      'Jobly/14.png','Jobly/15.png','Jobly/16.png','Jobly/17.png','Jobly/18.png','Jobly/19.png',
    ],
  },
  {
    id: 'library',
    title: lang === 'en' ? 'Library App' : 'تطبيق مكتبة',
    description: lang === 'en'
      ? 'A digital library system with book browsing, borrowing requests, and user reviews. Built for simplicity and fast access to academic and leisure reading.'
      : 'نظام مكتبة رقمية يتيح تصفح الكتب، طلب الاستعارة، وكتابة التقييمات. مصمم لتوفير وصول سريع وسهل للقراءة الأكاديمية والترفيهية.',
    images: ['Library/1.jpg'],
  },
  {
    id: 'HashTag',
    title: lang === 'en' ? 'Social Media Website' : 'موقع سوشل ميديا',
    description: lang === 'en'
      ? 'A modern social platform with post sharing, hashtag discovery, and responsive design. Built to foster engagement and real-time interaction across devices.'
      : 'منصة تواصل اجتماعي حديثة تتيح مشاركة المنشورات، اكتشاف الوسوم، وتصميم متجاوب لجميع الأجهزة. تهدف إلى تعزيز التفاعل والتواصل الفوري.',
    images: [
      'HashTag/1.png','HashTag/2.png','HashTag/3.png','HashTag/4.png','HashTag/5.png',
      'HashTag/6.png','HashTag/7.png','HashTag/8.png','HashTag/9.png','HashTag/11.png',
    ],
  },
];

  const handleSeeMore = (project) => {
    setSelectedProject(project);
    setCurrentView('details');
  };

  const handleBack = () => {
    setSelectedProject(null);
    setCurrentView('portfolio');
  };

  return (
    <div id="portfolio">
      <div className="container">
        {currentView === 'portfolio' ? (
          <>
            <h1 className="sube-title">{lang === 'en' ? 'Our Work' : 'أعمالنا'}</h1>
            <div className="work-list">
              {works.map((work) => (
                <div className="work" key={work.id}>
                  <img src={`/images/${work.images[0]}`} alt={work.title} />
                  <div className="layer">
                    <h3>{work.title}</h3>
                    <button className="details-btn" onClick={() => handleSeeMore(work)}>
                      {lang === 'en' ? 'See More' : 'شاهد المزيد'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <ProjectDetails project={selectedProject} lang={lang} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}
