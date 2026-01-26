import { useState } from 'react';

export default function ProjectDetails({ project, lang, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className="image-slider">
        <button className="nav-btn" onClick={handlePrev}>
          ‹
        </button>
        <img
          src={`/images/${project.images[currentIndex]}`}
          alt={`${project.title} ${currentIndex + 1}`}
        />
        <button className="nav-btn" onClick={handleNext}>
          ›
        </button>
      </div>

      <button className="back-btn" onClick={onBack}>
        {lang === 'en' ? 'Back to Portfolio' : 'عودة إلى الأعمال'}
      </button>
    </div>
  );
}
