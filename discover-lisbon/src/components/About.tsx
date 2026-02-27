import { motion } from 'framer-motion';
import { Users, Trophy, Heart, ShieldCheck } from 'lucide-react';

const About = ({ t }: { t: any }) => {
    const features = [
        { icon: <Users size={32} />, title: t.values.inclusion, desc: t.values.inclusion_desc },
        { icon: <Heart size={32} />, title: t.values.spirit, desc: t.values.spirit_desc },
        { icon: <ShieldCheck size={32} />, title: t.values.spirit, desc: t.values.spirit_desc }, // Using spirit for fairplay if not in KI
        { icon: <Trophy size={32} />, title: t.values.ambition, desc: t.values.ambition_desc }
    ];

    return (
        <section id="about" className="container">
            <h2 className="section-title">{t.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '1rem' }}>{t.story_title}</h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: '1.7' }}>
                        {t.story_p1}
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                        {t.story_p2}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {features.map((f, i) => (
                            <div key={i} className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                                <div style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{f.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{f.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ height: '400px', overflow: 'hidden', position: 'relative' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1544919396-104908075677?auto=format&fit=crop&q=80"
                        alt="Ultimate Frisbee Action"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    />
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            "Mais que um grupo de amigos, somos uma família."
                        </h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
