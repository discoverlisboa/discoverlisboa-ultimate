import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';

interface OrderModalProps {
    product: any;
    onClose: () => void;
    t: any;
}

const OrderModal = ({ product, onClose, t }: OrderModalProps) => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: 1,
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate or implement Google Sheets submission here
        // For now, we'll also open the mailto as a backup
        const mailtoUrl = `mailto:discover.lisboa@gmail.com?subject=Novo Pedido: ${product.name}&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AQuantidade: ${formData.quantity}%0D%0AMensagem: ${formData.message}`;
        
        try {
            // If they have a script URL, we would fetch here
            // await fetch(siteConfig.shop.googleSheetsUrl, { ... })
            
            setTimeout(() => {
                setStatus('success');
                window.location.href = mailtoUrl;
            }, 1000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '2rem',
                    position: 'relative',
                    border: '1px solid var(--accent)'
                }}
            >
                <button 
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={24} />
                </button>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <CheckCircle size={64} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pedido Enviado!</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Abrimos o teu email para confirmares o envio. Entraremos em contacto em breve!
                        </p>
                        <button onClick={onClose} className="btn-primary" style={{ width: '100%' }}>Fechar</button>
                    </div>
                ) : (
                    <>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Encomendar: {product.name}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            Enviaremos o teu pedido para a nossa equipa.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nome</label>
                                <input 
                                    required
                                    type="text" 
                                    className="glass-input" 
                                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: 'white' }}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</label>
                                <input 
                                    required
                                    type="email" 
                                    className="glass-input" 
                                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: 'white' }}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quantidade</label>
                                    <input 
                                        type="number" 
                                        min="1"
                                        className="glass-input" 
                                        style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: 'white' }}
                                        value={formData.quantity}
                                        onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tamanho (se aplicável)</label>
                                    <input 
                                        type="text" 
                                        className="glass-input" 
                                        placeholder="S, M, L, XL..."
                                        style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: 'white' }}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className="btn-primary" 
                                style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                {status === 'sending' ? 'A enviar...' : (
                                    <>
                                        <Send size={18} />
                                        Confirmar Pedido
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default OrderModal;
