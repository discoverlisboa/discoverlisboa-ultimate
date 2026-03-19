import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Birthdays from './components/Birthdays';
import MemberForm from './components/MemberForm';
import Shop from './components/Shop';
import Club from './components/Club';
import Community from './components/Community';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Join from './components/Join';
import Game from './components/Game';
import { Instagram, Facebook, Mail, Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { translations } from './translations';
import faviconLogo from '/favicon.avif?url';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const t = translations[language];

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  const NAV_LINKS = [
    { href: '#about', label: t.nav.about },
    { href: '#game', label: t.nav.game },
    { href: '#training', label: t.nav.training },
    { href: '#club', label: t.nav.club },
    { href: '#community', label: t.nav.community },
    { href: '#members', label: t.nav.members },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#shop', label: t.nav.shop },
    { href: '#join', label: t.nav.contact },
  ];

  return (
    <>
      <main>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '900', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            <img src={faviconLogo} alt="Discover Lisboa Logo" style={{ height: '45px', width: 'auto', borderRadius: '0.5rem', background: 'transparent' }} />
            <span>DISC'OVER <span style={{ color: 'var(--text-main)' }}>LISBOA</span></span>
          </a>

          {/* Nav & Language Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Desktop links */}
            <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', fontWeight: '600', fontSize: '0.85rem' }}>
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} style={{ color: 'var(--text-muted)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseOver={e => (e.currentTarget.style.color = 'var(--text-main)')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >{l.label}</a>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(l => l === 'pt' ? 'en' : 'pt')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '2rem',
                padding: '0.4rem 0.8rem',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
            >
              <Globe size={14} color="var(--accent)" />
              {language}
            </button>
            <button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: 'var(--text-main)',
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.98)',
            borderTop: '1px solid var(--glass-border)',
            padding: '1rem 0',
          }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '0.9rem 2rem', color: 'var(--text-muted)', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}
              >{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      <Hero t={t.hero} language={language} />
      <About t={t.about} />
      <Game t={t.game} />
      <Schedule t={t.training} />
      <Birthdays t={t} />
      <Club t={t.club} />
      <Community t={t.community} />
      <Members t={t.members} language={language} />
      <Gallery t={t} />
      <Shop t={t.shop} />
      <Join t={t} />

      {/* Footer */}
      <footer style={{ padding: '4rem 0 3rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', marginTop: '6rem' }}>
        <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.5rem', marginBottom: '1rem' }}>
          DISC'OVER <span style={{ color: 'white' }}>LISBOA</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fdiscoverlisboa%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGny3ZpWpLZIAWcSxHTs8BeZjT0IXQm-iUXRZMPOrXL2Gf-DIlerCsl2B4zltY_aem_8Xi9t7o913LUom-G9p5ShQ&e=AT5K6HBNH5S-BLC5mNMwlXrtZgtnOHasOdoyRmRrJQMyCoirwPwS5bh8jHkRAC9Urdh5FNdcpVNagoVchKuoWRjh8UHXMDK5_ptygwGDiw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/ultimatediscoverlisboa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
            <Facebook size={24} />
          </a>
          <a href="mailto:discover.lisboa@gmail.com" style={{ color: 'var(--text-muted)' }}>
            <Mail size={24} />
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Alameda da Universidade, 1649-013 Lisboa &nbsp;·&nbsp;
          <a href="mailto:discover.lisboa@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>discover.lisboa@gmail.com</a>
        </p>

        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>Part of APUDD</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://www.apudd.pt/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
              APUDD.pt
            </a>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <a href="https://www.instagram.com/apuddisco/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
              @apuddisco
            </a>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem', opacity: 0.6 }}>
          © 2025-2026 Disc'Over Lisboa — {t.about.story_p2.split(',')[0]} — {t.footer.rights}
        </p>
      </footer>
    </main>
      <MemberForm />
    </>
  );
}

export default App;
