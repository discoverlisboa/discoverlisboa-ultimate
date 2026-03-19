import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import copaibericaBg from '../../copaiberica.jpeg?url';

const Schedule = ({ t }: { t: any }) => {
    const sessions = [
        { day: t.days.tuesday, time: "19:00 - 21:00", loc: "Cidade Universitária", maps: "https://goo.gl/maps/VBCVir6GZcD2", type: t.types.open },
        { day: t.days.thursday, time: "19:00 - 21:00", loc: "Cidade Universitária", maps: "https://goo.gl/maps/VBCVir6GZcD2", type: t.types.beginners },
        { day: t.days.weekend, time: "Horário variável", loc: "Jamor (Geralmente)", type: t.types.occasional, note: t.note }
    ];

    const calendarUrl = "https://calendar.google.com/calendar/u/0?cid=NGQzOWQ4ODU2OThlNmE4N2UwYWM3NTRkMDkwMzFkMjcyZGRjM2U4ZTU4OTQwMjUzYzA4ODg4Y2UxYmU5ZDllZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

    return (
        <section id="training" style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${copaibericaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
        }}>
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {sessions.map((session, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h3 style={{ color: 'var(--accent)' }}>{session.day}</h3>
                                <span style={{ fontSize: '0.8rem', background: 'rgba(9, 132, 227, 0.1)', color: 'var(--accent)', padding: '0.2rem 0.8rem', borderRadius: '1rem' }}>
                                    {session.type}
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}>
                                    <Clock size={18} />
                                    <span>{session.time}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}>
                                    <MapPin size={18} />
                                    {session.maps ? (
                                        <a href={session.maps} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                                            {session.loc}
                                        </a>
                                    ) : (
                                        <span>{session.loc}</span>
                                    )}
                                </div>
                                {session.note && (
                                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--accent)', fontStyle: 'italic' }}>
                                        * {session.note}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                            {t.calendar_cta}
                        </a>
                    </div>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.footer_note}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
