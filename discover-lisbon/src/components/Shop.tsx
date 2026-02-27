import { motion } from 'framer-motion';
import { ShoppingBag, Star, Package } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Disco Oficial Disc'Over",
        price: "15€",
        category: "Equipamento",
        image: "/disc.jpeg",
        description: "175g Ultrastar - O padrão mundial para Ultimate Frisbee."
    },
    {
        id: 2,
        name: "Jersey Jogo (Home)",
        price: "35€",
        category: "Vestuário",
        image: "/disc2.jpeg",
        description: "Material respirável de alta performance com design exclusivo 2024."
    },
    {
        id: 3,
        name: "Hoodie Disc'Over",
        price: "40€",
        category: "Vestuário",
        image: "/disc3.jpeg",
        description: "Quente e confortável, perfeito para as noites de treino na Alameda."
    },
    {
        id: 4,
        name: "Pack Iniciante",
        price: "45€",
        category: "Bundle",
        image: "/disc4.jpeg",
        description: "Inclui 1 Disco + 1 Jersey. Tudo o que precisas para começar."
    }
];

const Shop = ({ t }: { t: any }) => {
    const products = [
        {
            id: 1,
            name: "Disco Oficial Disc'Over",
            price: "13€",
            category: "Equipamento", // Category names should probably be in translation too if we want full i18n
            image: "/disc.jpeg",
            description: "175g Ultrastar - O padrão mundial para Ultimate Frisbee."
        },
        {
            id: 2,
            name: "Jersey Jogo (Home)",
            price: "35€",
            category: "Vestuário",
            image: "/disc2.jpeg",
            description: "Material respirável de alta performance com design exclusivo 2024."
        },
        {
            id: 3,
            name: "Hoodie Disc'Over",
            price: "40€",
            category: "Vestuário",
            image: "/disc3.jpeg",
            description: "Quente e confortável, perfeito para as noites de treino na Alameda."
        },
        {
            id: 4,
            name: "Pack Iniciante",
            price: "45€",
            category: "Bundle",
            image: "/discs-jamor.jpeg",
            description: "Inclui 1 Disco + 1 Jersey. Tudo o que precisas para começar."
        }
    ];

    return (
        <section id="shop" className="container">
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
                                onClick={() => window.location.href = "mailto:discover.lisboa@gmail.com?subject=Pedido de Merch: " + product.name}
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                {t.order_cta}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card" style={{ marginTop: '4rem', padding: '2rem', textAlign: 'center', borderStyle: 'dashed' }}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                    <Star color="var(--accent)" fill="var(--accent)" />
                    {t.discs_note}
                </p>
            </div>
        </section>
    );
};

export default Shop;
