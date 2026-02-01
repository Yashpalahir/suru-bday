import React from 'react';
import { motion } from 'framer-motion';

const promises = [
    { icon: "🌅", title: "Forever Mornings", text: "I promise to wake up and choose you every single day." },
    { icon: "🤝", title: "Unwavering Support", text: "I'll be your biggest fan and your strongest shoulder." },
    { icon: "🔥", title: "Eternal Spark", text: "I promise to never stop dating you, even when we're 80." },
    { icon: "🌈", title: "Storm Chaser", text: "I'll hold your hand through every storm life sends our way." },
    { icon: "💖", title: "Infinite Love", text: "My love for you will only grow deeper with every heartbeat." }
];

const SweetPromises: React.FC = () => {
    return (
        <section style={{
            padding: '5rem 1rem',
            background: 'rgba(255,193,204,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            position: 'relative'
        }}>
            <h2 className="font-handwriting" style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '3rem' }}>
                My Sweet Promises
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                width: '100%'
            }}>
                {promises.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'rgba(26,26,46,0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--color-pink)',
                            padding: '2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{promise.icon}</div>
                        <h3 className="font-handwriting" style={{ fontSize: '1.8rem', color: 'var(--color-pink)', marginBottom: '1rem' }}>
                            {promise.title}
                        </h3>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6' }}>
                            {promise.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SweetPromises;
