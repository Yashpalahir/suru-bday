import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Finale: React.FC = () => {
    const [accepted, setAccepted] = useState(false);

    const handleYes = () => {
        setAccepted(true);
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
            position: 'relative',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="font-handwriting" style={{ fontSize: '3.5rem', color: 'var(--color-pink)', marginBottom: '1rem', textShadow: '0 0 10px rgba(255,193,204,0.5)' }}>
                    Happy Birthday Surksha
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--color-text)' }}>
                    From Yashpal — your forever.
                </p>
            </motion.div>

            {!accepted ? (
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={handleYes}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '16px 32px',
                        fontSize: '1.5rem',
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-dark)',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        boxShadow: '0 0 20px var(--color-gold)',
                        cursor: 'pointer'
                    }}
                >
                    Will you stay with me?
                </motion.button>
            ) : (
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <h2 className="font-handwriting" style={{ fontSize: '4rem', color: 'var(--color-pink)', textShadow: '0 0 20px var(--color-pink)' }}>
                        YES, FOREVER 💍
                    </h2>
                </motion.div>
            )}

            <footer style={{ marginTop: 'auto', padding: '2rem', opacity: 0.6, fontSize: '0.9rem' }}>
                Made with ❤️ for You
            </footer>
        </section>
    );
};

export default Finale;
