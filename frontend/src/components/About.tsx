import { useEffect, useState } from "react";
import "../styles/about.scss";

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true); // Trigger animation on enter
            } else {
              setIsVisible(false); // Reset animation when leaving the viewport
            }
          },
          {
            threshold: 0.5, // 50% of the element needs to be in view to trigger
            rootMargin: '0px 0px -50px 0px', // Small margin at the bottom to trigger earlier
          }
        );
    
        const element = document.querySelector('.about-container');
        if (element) {
          observer.observe(element);
        }
    
        return () => {
          if (element) {
            observer.unobserve(element);
          }
        };
      }, []);
      
  return (
    <div className={`about-container ${isVisible ? 'visible' : ''}`}>
      <div className="about">
        <h1 className="about-text">
          Hello, my name is <span className="it">Jakub Raška</span>, and I’m a <span className="it">freelance logo designer</span>. I
          specialize in creating visually striking and custom designs that bring
          your ideas to life. Whether it’s branding, digital illustrations, or
          print materials, I aim to craft designs that perfectly align with your brand's
          identity, vision and goals.
        </h1>
      </div>
    </div>
  );
};

export default About;
