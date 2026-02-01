import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitalHug: React.FC = () => {
    const [isHolding, setIsHolding] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: any;
        if (isHolding) {
            interval = setInterval(() => {
                setProgress(prev => Math.min(prev + 1, 100));
            }, 30);
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [isHolding]);

    return (
        <section style={{
            padding: '8rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,193,204,0.02)',
            zIndex: 10,
            position: 'relative',
            minHeight: '60vh'
        }}>
            <h2 className="font-handwriting" style={{ fontSize: '3rem', color: 'var(--color-pink)', marginBottom: '1rem' }}>
                Need a hug?
            </h2>
            <p style={{ opacity: 0.8, marginBottom: '3rem', maxWidth: '500px', textAlign: 'center' }}>
                Whenever you feel alone or miss me, come here. Press and hold the button below to receive a virtual hug from my heart to yours.
            </p>

            <motion.div
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onTouchStart={() => setIsHolding(true)}
                onTouchEnd={() => setIsHolding(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(255,193,204,0.1)',
                    border: '2px solid var(--color-pink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isHolding ? '0 0 50px var(--color-pink)' : '0 0 20px rgba(0,0,0,0.3)',
                    transition: 'box-shadow 0.3s ease'
                }}
            >
                {/* Progress fill */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: `${progress}%`,
                        background: 'var(--color-pink)',
                        opacity: 0.4,
                        zIndex: 0
                    }}
                />

                <span style={{ fontSize: '4rem', zIndex: 1, filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))' }}>
                    {progress === 100 ? '💖' : '🫂'}
                </span>
            </motion.div>

            <AnimatePresence>
                {progress === 100 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            marginTop: '3rem',
                            textAlign: 'center',
                            color: 'var(--color-gold)',
                            textShadow: '0 0 10px rgba(255,215,0,0.5)'
                        }}
                    >
                        <h3 className="font-handwriting" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            I'm holding you tight...
                        </h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', maxWidth: '400px' }}>
                            Can you feel it? I'm right here with you, in every heartbeat, in every breath. I love you, Suru.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isHolding && progress < 100 && (
                <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.6, animation: 'pulse 2s infinite' }}>
                    (Press and hold to hug)
                </p>
            )}

            <style>{`
                @keyframes pulse {
                    0% { opacity: 0.4; }
                    50% { opacity: 1; }
                    100% { opacity: 0.4; }
                }
            `}</style>
        </section>
    );
};

export default DigitalHug;
