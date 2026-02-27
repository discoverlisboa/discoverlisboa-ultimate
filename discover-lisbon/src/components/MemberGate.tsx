import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Eye, EyeOff, Send } from 'lucide-react';

const MemberGate = ({ t, children }: { t: any, children: React.ReactNode }) => {
    const [code, setCode] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);
    const [showCode, setShowCode] = useState(false);

    // Secret code for the team - can be changed here
    const SECRET_CODE = "spirit";

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.toLowerCase().trim() === SECRET_CODE) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    if (isUnlocked) {
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{children}</motion.div>;
    }

    return (
        <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', maxWidth: '500px', margin: '2rem auto' }}>
            <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(246, 173, 85, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--accent)'
            }}>
                <Lock size={30} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                {t.gate_desc}
            </p>

            <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <input
                        type={showCode ? "text" : "password"}
                        placeholder={t.gate_placeholder}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        style={{
                            width: '100%',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${error ? '#ef4444' : 'var(--glass-border)'}`,
                            borderRadius: '0.5rem',
                            padding: '0.8rem 3rem 0.8rem 1rem',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'border-color 0.2s'
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowCode(!showCode)}
                        style={{ position: 'absolute', right: '1rem', top: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                        {showCode ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600' }}
                        >
                            {t.gate_error}
                        </motion.p>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                >
                    {t.gate_submit} <Unlock size={18} />
                </motion.button>
            </form>
        </div>
    );
};

export default MemberGate;
