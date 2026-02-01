import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    "Your smile heals me",
    "Your voice calms me",
    "Your eyes feel like home",
    "Your love saved me",
    "The way you care for everyone",
    "How you make me a better man",
    "Your laugh is my favorite melody",
    "Every moment with you is a gift"
];

const Special: React.FC = () => {
    return (
        <section style={{ padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, position: 'relative' }}>
            <h2 className="font-handwriting" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--color-beige)' }}>
                Why You Are Special
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            background: 'rgba(255, 193, 204, 0.1)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid var(--color-pink)',
                            padding: '2rem',
                            borderRadius: '15px',
                            width: '250px',
                            textAlign: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                    >
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>{reason}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '20px', textAlign: 'center', maxWidth: '80%' }}
            >
                <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
                    “I don’t need a perfect life… I only need you.”
                </p>
            </motion.div>
        </section>
    );
};

export default Special;
