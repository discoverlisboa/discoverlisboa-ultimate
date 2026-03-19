```javascript
import { motion } from 'framer-motion';
import { Shield, CreditCard, MapPin, Users, ExternalLink } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const Club = ({ t }: { t: any }) => {
    const board = [
        { role: t.org, name: "Disc'Over Lisboa Board" },
    ];

    return (
        <section id="club" style={{ backgroundColor: '#0f172a' }}>
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Shield className="text-accent" size={32} color="var(--accent)" />
                            <h3 style={{ fontSize: '1.8rem' }}>{t.structure}</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            {t.structure_desc}
                        </p>

                        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <CreditCard color="var(--accent)" size={20} />
                                <h4 style={{ fontWeight: 'bold' }}>{t.fees}</h4>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                {t.fees_desc}
                            </p>
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <MapPin color="var(--accent)" size={20} />
                                <h4 style={{ fontWeight: 'bold' }}>{t.hq}</h4>
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                {typeof t.hq_desc === 'string' && t.hq_desc.includes('\n') ? (
                                    <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {t.hq_desc.split('\n').map((item: string, i: number) => (
                                            <li key={i}>{item.trim()}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{t.hq_desc}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Users className="text-accent" size={32} color="var(--accent)" />
                            <h3 style={{ fontSize: '1.8rem' }}>{t.org}</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="http://ultiorganizer.portugal-ultimate.org/?view=clubcard&club=26" target="_blank" rel="noopener noreferrer"
                                className="glass-card" style={{ padding: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                                <span style={{ fontWeight: '600', color: 'var(--accent)' }}>Ultiorganizer</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t.results_cta}</span>
                            </a>
                        </div>
                        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <p>{t.statutes}</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Club;
