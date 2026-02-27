import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        background:
          'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.92)), url("https://images.unsplash.com/photo-1593010263914-ba36b80145db?auto=format&fit=crop&q=80") center/cover no-repeat',
      }}
    >
      {/* Subtle animated gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(246,173,85,0.08), transparent 70%)',
        pointerEvents: 'none'
      }} />

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
              background: 'rgba(246,173,85,0.12)',
              border: '1px solid rgba(246,173,85,0.3)',
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

          {/* Correctly handle title with highlighted accent */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            {t.title.split(`{${t.title_accent}}`)[0]}
            <span style={{
              background: 'linear-gradient(to right, var(--accent), #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{t.title_accent}</span>
            {t.title.split(`{${t.title_accent}}`)[1]}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.8' }}>
            {t.desc}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#training" className="btn-primary" style={{ textDecoration: 'none' }}>
              {t.cta_primary} <ArrowRight size={20} />
            </a>
            <a href="#join" className="btn-primary" style={{
              textDecoration: 'none',
              background: 'transparent',
              border: '2px solid var(--accent)',
              color: 'var(--accent)'
            }}>
              {language === 'pt' ? 'Quero Pertencer' : 'I Want to Join'}
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'transparent',
                color: 'white',
                border: '1px solid var(--glass-border)',
                padding: '0.8rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
            >
              {t.cta_secondary}
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}
          >
            {[
              { n: '30+', label: t.stats.players },
              { n: '2015', label: t.stats.founded },
              { n: '3x', label: t.stats.sessions },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)' }}>{stat.n}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
