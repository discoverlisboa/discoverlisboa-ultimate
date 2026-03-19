import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const Gallery = ({ t }: { t: any }) => {
    const photos = siteConfig.gallery;

    return (
        <section id="gallery" style={{ backgroundColor: '#131c2e' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">{t.gallery.title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
                        {t.gallery.desc}
                    </p>
                    <a
                        href="https://www.instagram.com/discoverlisboateam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ textDecoration: 'none' }}
                    >
                        <Instagram size={20} /> @discoverlisboateam
                    </a>
                </div>

                {/* Photo grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                }}>
                    {photos.map((photo, i) => (
                        <motion.a
                            key={i}
                            href="https://www.instagram.com/discoverlisboateam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            style={{
                                display: 'block',
                                position: 'relative',
                                borderRadius: '0.75rem',
                                overflow: 'hidden',
                                aspectRatio: '1 / 1',
                                textDecoration: 'none',
                            }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.caption}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                onMouseOver={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)')}
                                onMouseOut={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                            />
                            {/* Overlay on hover */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '1rem',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            }}
                                onMouseOver={e => (e.currentTarget.style.opacity = '1')}
                                onMouseOut={e => (e.currentTarget.style.opacity = '0')}
                            >
                                <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '600' }}>{photo.caption}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA banners (Members Only Gate) */}
                <div style={{ marginTop: '5rem' }}>
                    <MemberGate t={t.members_area}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            <a
                                href="https://drive.google.com/drive/folders/1g6dikTevZA6iOjBSjcLcPRqVcwk1Qh1F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.5rem 2rem',
                                    textDecoration: 'none',
                                    color: 'white',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <ExternalLink size={30} color="#4285F4" />
                                    <div>
                                        <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{t.gallery.drive_cta}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.gallery.drive_desc}</div>
                                    </div>
                                </div>
                                <ExternalLink size={18} color="var(--accent)" />
                            </a>

                            <a
                                href="https://youtube.com/playlist?list=PLcTzOZSOf-cLlYk-Bm_xKBJbgUub7UIeU"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.5rem 2rem',
                                    textDecoration: 'none',
                                    color: 'white',
                                    background: 'rgba(255, 0, 0, 0.05)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <ExternalLink size={30} color="#FF0000" />
                                    <div>
                                        <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{t.gallery.yt_cta}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.gallery.yt_desc}</div>
                                    </div>
                                </div>
                                <ExternalLink size={18} color="var(--accent)" />
                            </a>
                        </div>
                    </MemberGate>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
