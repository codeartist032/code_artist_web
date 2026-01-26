import { useLang } from '../context/LanguageContext';
import Navigation from './Navigation';

export default function Header() {
  const { lang } = useLang();

  return (
    <div id="header">
      <div className="container">
        <Navigation />
        <div className="header-text">
          <h2>
            {lang === 'en' ? (
              <>
                We craft <strong>immersive digital experiences</strong> that captivate users, elevate brands,  
                and drive meaningful engagement across platforms
              </>
            ) : (
              <>
                نصمم <strong>تجارب رقمية </strong> تأسر المستخدمين، وتعزز العلامات التجارية،  
                وتحقق تفاعلًا فعّالًا عبر مختلف المنصات
              </>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}