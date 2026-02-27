import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Join = ({ t }: { t: any }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        alert("Obrigado pelo interesse! Entraremos em contacto em breve. / Thank you for your interest! We will contact you soon.");
    };

    return (
        <section id="join" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #131c2e 100%)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {t.contact.desc}
                    </p>
                </div>

                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--accent)' }} />
                            <input
                                type="text"
                                placeholder={t.contact.form_name}
                                required
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--accent)' }} />
                            <input
                                type="email"
                                placeholder={t.contact.form_email}
                                required
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <MessageSquare size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--accent)' }} />
                            <textarea
                                placeholder={t.contact.form_msg}
                                required
                                rows={4}
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.5rem',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'vertical',
                                }}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem' }}
                        >
                            {t.contact.form_submit} <Send size={18} />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;
