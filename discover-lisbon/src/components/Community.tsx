import { motion } from 'framer-motion';
import { Heart, Coffee, Globe, Camera, Trophy } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const Community = ({ t }: { t: any }) => {
    const activities = [
        { icon: Coffee, title: t.activities.drinks, desc: t.activities.drinks_desc },
        { icon: Globe, title: t.activities.apudd, desc: t.activities.apudd_desc },
        { icon: Camera, title: t.activities.tournaments, desc: t.activities.tournaments_desc },
        { icon: Heart, title: t.activities.tb, desc: t.activities.tb_desc },
        { icon: Trophy, title: t.activities.copa, desc: t.activities.copa_desc }
    ];

    return (
        <section id="community" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("/gallery/copaiberica.jpeg") center/cover fixed' }}>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">{t.title}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        {t.desc}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {activities.map((act, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                <act.icon size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{act.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{act.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a 
                        href={siteConfig.social.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
                        {t.activities.whatsapp_cta}
                    </a>
                </div>

                <motion.div

                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '5rem', padding: '3rem' }}
                    className="glass-card"
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{t.spirit_title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                {t.spirit_desc}
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <img src="/gallery/RPC_1799.jpg" alt="Spirit Circle - Two teams together" style={{ width: '100%', borderRadius: '0.5rem', objectFit: 'cover', aspectRatio: '4/3' }} />
                            <img src="/gallery/IMG_7063.jpg" alt="Teams walking together" style={{ width: '100%', borderRadius: '0.5rem', objectFit: 'cover', aspectRatio: '4/3' }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Community;
