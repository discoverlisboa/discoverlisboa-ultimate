import { motion } from 'framer-motion';
import { Youtube, ExternalLink } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const VideoSection = ({ t }: { t: any }) => {
    return (
        <section id="videos" className="container" style={{ paddingTop: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">{t.videos?.title || "Ultimate em Ação"}</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                    {t.videos?.desc || "Vê o que torna este desporto tão especial através de momentos incríveis e jogos oficiais."}
                </p>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '2.5rem' 
            }}>
                {siteConfig.videos.map((video, i) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="glass-card"
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
                            <iframe
                                src={video.url}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                            />
                        </div>
                        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{video.title}</h3>
                            <a 
                                href={video.url.replace('embed/', 'watch?v=')} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent)', transition: 'transform 0.2s' }}
                                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.2)')}
                                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a 
                    href="https://www.youtube.com/@WFDF" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}
                >
                    {t.videos?.more || "Mais vídeos no canal da WFDF"} <ExternalLink size={16} />
                </a>
            </div>
        </section>
    );
};

export default VideoSection;
