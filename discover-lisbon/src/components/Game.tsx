import { motion } from 'framer-motion';

const Game = ({ t }: { t: any }) => {
    return (
        <section id="game" className="container" style={{ paddingTop: '8rem' }}>
            <h2 className="section-title">{t.title}</h2>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 'bold' }}>{t.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {t.rules.map((rule: string, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card"
                        style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                    >
                        <div style={{
                            background: 'var(--accent)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>
                            {index + 1}
                        </div>
                        <p style={{ color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1rem' }}>
                            {rule.replace(/^\d+\.\s*/, '')}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Game;
