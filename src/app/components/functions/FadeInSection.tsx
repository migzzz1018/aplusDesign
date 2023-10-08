"use client"


import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, fadeFrom }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            className={`fade-in-element ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${index * 0.205}s` }}
            key={index}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          className={`fade-in-element ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: `0s` }}
        >
          {children}
        </div>
      )}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
        }

        .fade-in-element {
          opacity: 0;
          transform: translate${fadeFrom}(-40px);
          transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .fade-in-element.is-visible {
          opacity: 1;
          transform: translate${fadeFrom}(0);
        }
      `}</style>
    </div>
  );
};

export default FadeInSection;
