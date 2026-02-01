import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftBox: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section style={{
            padding: '4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            position: 'relative'
        }}>
            <h2 className="font-handwriting" style={{ fontSize: '2.5rem', color: 'var(--color-gold)', marginBottom: '2rem' }}>
                A Small Gift For You
            </h2>

            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
                            transition={{ rotate: { repeat: Infinity, duration: 2 } }}
                            style={{ fontSize: '100px' }}
                        >
                            🎁
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            style={{
                                background: 'rgba(255, 215, 0, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid var(--color-gold)',
                                padding: '2rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                maxWidth: '400px',
                                boxShadow: '0 0 30px var(--color-gold)'
                            }}
                        >
                            <h3 className="font-handwriting" style={{ fontSize: '2rem', color: 'var(--color-pink)' }}>My Whole Heart</h3>
                            <p style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
                                This is the most precious thing I have, and I give it to you today, tomorrow, and forever.
                            </p>
                            <div style={{ fontSize: '3rem' }}>💖</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {!isOpen && <p style={{ marginTop: '1rem', opacity: 0.7 }}>Click to open</p>}
        </section>
    );
};

export default GiftBox;
