import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#0052cc'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#0052cc',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="particle-container" id="particles-js"></div>
      <div className="hero-content">
        <h1 className="glitch">The Future of Tech Is Here</h1>
        <p className="hero-description">
          Discover cutting-edge technology products that will transform your digital experience.
        </p>
        <div className="cta-container">
          <button className="cta-button">
            <span className="button-content">Shop Now</span>
          </button>
          <button className="secondary-button">
            Learn More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
