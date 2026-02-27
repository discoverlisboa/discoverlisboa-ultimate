import { motion } from 'framer-motion';

interface MemberProps {
    name: string;
    role: string;
    since?: string;
    number?: number;
}

const Members = ({ t, language }: { t: any, language: string }) => {
    const members: MemberProps[] = [
        { name: "Camila Ruiz", role: t.roles.player, number: 3 },
        { name: "Erik Hamre", role: t.roles.player, number: 7 },
        { name: "Luís Gil", role: t.roles.player, number: 13 },
        { name: "Paul Kennedy", role: t.roles.player, number: 17 },
        { name: "Sara Séneca", role: t.roles.player, number: 19 },
        { name: "Jonathan Zuleta", role: t.roles.player, number: 20 },
        { name: "Alex", role: t.roles.player, number: 25 },
        { name: "Julia Akrámova", role: t.roles.player, number: 27 },
        { name: "Gonçalo Tavares", role: t.roles.player, number: 28 },
        { name: "Miguel Costa", role: t.roles.player, number: 70 },
        { name: "Nelson Belém", role: t.roles.player, number: 75 },
        { name: "Pedro Pascoal", role: t.roles.player, number: 77 },
        { name: "Dimitri Rey", role: t.roles.player, number: 83 },
        { name: "Konstantin Basos", role: t.roles.player, number: 97 },
        { name: "Pedro Chen", role: t.roles.player, number: 99 },
        { name: "Matt Rowlinson", role: t.roles.player, number: 2 },
        { name: "Veronika Almási", role: t.roles.player, number: 8 },
        { name: "Tomás Barejo", role: t.roles.player, number: 90 },
        { name: "Gil junior", role: t.roles.player, number: 5 },
        { name: "Frede Glória", role: t.roles.player, number: 2 },
        { name: "Ricardo Ferreira", role: t.roles.player, number: 29 },
        { name: "Pedro Geada", role: t.roles.player, number: 52 },
        { name: "Tommaso Sarotti", role: t.roles.player, number: 9 },
        { name: "Janne Uteg", role: t.roles.player, number: 40 },
        { name: "Austin Cipriano", role: t.roles.player, number: 21 },
        { name: "Kallu (Kamal)", role: t.roles.player, number: 4 },
        { name: "Giuseppe", role: t.roles.player, number: 11 },
        { name: "Sabina", role: t.roles.player, number: 17 },
        { name: "Warren Wee", role: t.roles.player, number: 219 },
        { name: "Ana Alfaiate", role: t.roles.player, number: 73 },
    ];

    return (
        <section id="members">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">{t.title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {t.desc}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 5) * 0.1 }}
                            className="glass-card"
                            style={{ padding: '1.5rem', textAlign: 'center' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--primary-light)',
                                borderRadius: '50%',
                                margin: '0 auto 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: 'var(--accent)'
                            }}>
                                {member.number ? `#${member.number}` : member.name.charAt(0)}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{member.name}</h3>
                            <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' }}>{member.role}</p>
                            {member.since && (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                    {language === 'pt' ? 'Membro desde' : 'Member since'} {member.since}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <a href="#join" className="btn-primary" style={{ textDecoration: 'none' }}>
                        {language === 'pt' ? 'Quero Pertencer' : 'I Want to Join'}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Members;
