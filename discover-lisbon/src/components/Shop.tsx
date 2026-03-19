import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Package, MessageCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import OrderModal from './OrderModal';

const Shop = ({ t }: { t: any }) => {
    const { products } = siteConfig.shop;
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <section id="shop" className="container" style={{ paddingTop: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">{t.title}</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                    {t.desc}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ height: '250px', position: 'relative', borderRadius: '1rem 1rem 0 0', overflow: 'hidden' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <span style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'var(--accent)',
                                color: 'var(--bg-dark)',
                                padding: '0.4rem 1rem',
                                borderRadius: '2rem',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            }}>
                                {product.price}
                            </span>
                        </div>

                        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Package size={14} color="var(--accent)" />
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{product.category}</span>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{product.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {product.description}
                            </p>

                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <MessageCircle size={18} />
                                {t.order_cta}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card" style={{ 
                marginTop: '4rem', 
                padding: '2rem', 
                textAlign: 'center', 
                borderStyle: 'dashed',
                background: 'rgba(9,132,227,0.03)'
            }}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                    <Star color="var(--accent)" fill="var(--accent)" />
                    {t.discs_note}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    {t.operational_note || "Your order will be received by our team and we will contact you shortly."}
                </p>
            </div>

            {selectedProduct && (
                <OrderModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                    t={t}
                />
            )}
        </section>
    );
};

export default Shop;


