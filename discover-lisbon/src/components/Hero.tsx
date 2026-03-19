import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const Hero = ({ t, language }: { t: any, language: string }) => {
  return (
    <section
      className="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden',
        background: '#0f172a' // Dark base
      }}
    >
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.hero.fallbackImage}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4 // Darken it for readability
          }}
        >
          <source src={siteConfig.hero.videoUrl} type="video/mp4" />
        </video>
        {/* Overlay Gradients */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.95))',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ maxWidth: '750px' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(9,132,227,0.12)',
              border: '1px solid rgba(9,132,227,0.3)',
              borderRadius: '2rem',
              padding: '0.35rem 1rem',
              marginBottom: '1.5rem',
              color: 'var(--accent)',
              fontWeight: '700',
              textTransform: 'uppercase' as const,
              letterSpacing: '2px',
              fontSize: '0.8rem',
            }}
          >
            🥏 {t.location}
          </motion.div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 7vw, 5.5rem)', 
            marginBottom: '1.5rem', 
            letterSpacing: '-2px',
            lineHeight: 1.1,
            fontWeight: 900
          }}>
            {t.title.split(`{${t.title_accent}}`)[0]}
            <span style={{
              background: 'linear-gradient(to right, var(--accent), #1e90ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(9, 132, 227, 0.3)'
            }}>{t.title_accent}</span>
            {t.title.split(`{${t.title_accent}}`)[1]}
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '2.5rem', 
            maxWidth: '600px', 
            lineHeight: '1.6',
            fontWeight: 500
          }}>
            {t.desc}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#training" className="btn-primary" style={{ 
              textDecoration: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              boxShadow: '0 10px 20px rgba(9, 132, 227, 0.2)'
            }}>
              {t.cta_primary} <ArrowRight size={20} />
            </a>
            <a href="#join" className="btn-primary" style={{
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem'
            }}>
              {language === 'pt' ? 'Quero Pertencer' : 'I Want to Join'}
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ 
              display: 'flex', 
              gap: '4rem', 
              marginTop: '5rem', 
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2.5rem'
            }}
          >
            {[
              { n: '30+', label: t.stats.players },
              { n: '2015', label: t.stats.founded },
              { n: '3x', label: t.stats.sessions },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>{stat.n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' as const, letterSpacing: '2px', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

