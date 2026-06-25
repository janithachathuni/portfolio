import React from 'react';
import texture from './assets/texture.jpg';

const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* Blobby gradient layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
  radial-gradient(ellipse 70% 60% at 75% 25%, #ff165488, transparent),
  radial-gradient(ellipse 60% 70% at 80% 15%, #f4f3ee, transparent),
  radial-gradient(ellipse 50% 50% at 65% 75%, #a8d5b5, transparent),
  radial-gradient(ellipse 70% 40% at 10% 80%, #fffef8, transparent),
  radial-gradient(ellipse 40% 50% at 90% 55%, #ffe4d5, transparent),
  #adbad1
`,
        filter: 'blur(48px)',
        transform: 'scale(1.1)',
      }} />

      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/texture.jpg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        opacity: 0.4,
        mixBlendMode: 'overlay',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        color: '#f4f3ee',
        padding: '0 2rem',
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          fontWeight:  `normal`,
          margin: 0,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: '#0d244d',
        }}>
            {/* <i>Janitha Chathuni</i> */}
        Janitha Chathuni
          
        </h1>
        <p style={{
        //   marginTop: '1.5rem',
          paddingBlock: '0.4rem',
          fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
          fontFamily: '"Pliant", sans-serif',
          backgroundColor: '#0d244d',
          color: '#f4f3ee',
          letterSpacing: '0.04em',
          fontWeight: 400,
        }}>
          Software Engineer · Full-Stack Developer · UI Enthusiast
        </p>
      </div>

    </section>
  );
};

export default HeroSection;