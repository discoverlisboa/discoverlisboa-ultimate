import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface MemberProfile {
    name: string;
    role: string;
    number: number;
    study?: string;
    nationality?: string;
    work?: string;
    discoveredFrisbee?: string;
    yearsExperience?: number;
    pastTeams?: string[];
    funFact?: string;
}

const Members = ({ t, language }: { t: any, language: string }) => {
    const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);

    const members: MemberProfile[] = [
        { 
            name: "Camila Ruiz", 
            role: t.roles.player, 
            number: 3,
            study: "Engenharia Informática",
            nationality: "Espanha 🇪🇸",
            work: "Estudante",
            discoveredFrisbee: "Através de amigos na universidade",
            yearsExperience: 3,
            pastTeams: ["IST Ultimate", "Madrid Frisbee Club"],
            funFact: "Mais rápida a correr na equipa!"
        },
        { 
            name: "Erik Hamre", 
            role: t.roles.player, 
            number: 7,
            study: "Engenharia Civil",
            nationality: "Noruega 🇳🇴",
            work: "Estagiário em empresa de construção",
            discoveredFrisbee: "Clube na Noruega aos 16 anos",
            yearsExperience: 8,
            pastTeams: ["Oslo Ultimate", "Stavanger Disc"],
            funFact: "Mantém uma série de 200+ contra em jogos!"
        },
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
        <>
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
                                style={{ 
                                    padding: '1.5rem', 
                                    textAlign: 'center',
                                    cursor: member.study ? 'pointer' : 'default',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => member.study && setSelectedMember(member)}
                                onMouseOver={e => {
                                    if (member.study) {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                                    }
                                }}
                                onMouseOut={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                }}
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
                                {member.study && (
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.8rem', fontStyle: 'italic' }}>
                                        👉 Clica para conhecer melhor!
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

            {/* Profile Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                maxWidth: '600px',
                                width: '90%',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                padding: '2.5rem',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: 'var(--primary-light)',
                                    borderRadius: '50%',
                                    margin: '0 auto 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)'
                                }}>
                                    {selectedMember.number ? `#${selectedMember.number}` : selectedMember.name.charAt(0)}
                                </div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                    {selectedMember.name}
                                </h2>
                                <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '600' }}>
                                    {selectedMember.role}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                {selectedMember.study && (
                                    <div style={{ background: 'rgba(9, 132, 227, 0.1)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '3px solid var(--accent)' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>📚 Estudo</p>
                                        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600' }}>{selectedMember.study}</p>
                                    </div>
                                )}
                                {selectedMember.nationality && (
                                    <div style={{ background: 'rgba(9, 132, 227, 0.1)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '3px solid var(--accent)' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>🌍 Nacionalidade</p>
                                        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600' }}>{selectedMember.nationality}</p>
                                    </div>
                                )}
                                {selectedMember.work && (
                                    <div style={{ background: 'rgba(9, 132, 227, 0.1)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '3px solid var(--accent)' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>💼 Trabalho</p>
                                        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600' }}>{selectedMember.work}</p>
                                    </div>
                                )}
                                {selectedMember.yearsExperience && (
                                    <div style={{ background: 'rgba(9, 132, 227, 0.1)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '3px solid var(--accent)' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>📅 Anos de Prática</p>
                                        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600' }}>{selectedMember.yearsExperience} anos</p>
                                    </div>
                                )}
                            </div>

                            {selectedMember.discoveredFrisbee && (
                                <div style={{ background: 'rgba(9, 132, 227, 0.15)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--accent)' }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>🥏 Como descobriu Frisbee?</p>
                                    <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>{selectedMember.discoveredFrisbee}</p>
                                </div>
                            )}

                            {selectedMember.pastTeams && selectedMember.pastTeams.length > 0 && (
                                <div style={{ background: 'rgba(9, 132, 227, 0.15)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--accent)' }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>⚠️ Equipas Passadas</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {selectedMember.pastTeams.map((team, i) => (
                                            <span key={i} style={{
                                                background: 'rgba(9, 132, 227, 0.2)',
                                                color: 'var(--accent)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '2rem',
                                                fontSize: '0.9rem',
                                                fontWeight: '600'
                                            }}>
                                                {team}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedMember.funFact && (
                                <div style={{ background: 'rgba(9, 132, 227, 0.2)', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid var(--accent)' }}>
                                    <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '700' }}>✨ Facto Curioso</p>
                                    <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.6' }}>{selectedMember.funFact}</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Members;
