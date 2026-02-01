import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const FloatingLanterns: React.FC = () => {
    const [lanterns, setLanterns] = useState<{ id: number; wish: string }[]>([]);
    const [wish, setWish] = useState("");

    const releaseLantern = () => {
        if (!wish.trim()) return;
        const newLantern = {
            id: Date.now(),
            wish: wish
        };
        setLanterns(prev => [...prev, newLantern]);
        setWish("");
    };

    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(to top, #06060c, #1a1a2e, #16213e)',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ zIndex: 10, textAlign: 'center', maxWidth: '600px' }}
            >
                <h2 className="font-handwriting" style={{
                    color: 'var(--color-gold)',
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    marginBottom: '1rem',
                    textShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
                }}>
                    Make a Wish, Suru...
                </h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
                    Write your deepest wish and release it into the stars. I'll spend the rest of my life trying to make it come true.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <input
                        type="text"
                        value={wish}
                        onChange={(e) => setWish(e.target.value)}
                        placeholder="Write your wish here..."
                        style={{
                            padding: '12px 20px',
                            width: '100%',
                            maxWidth: '350px',
                            borderRadius: '30px',
                            border: '1px solid var(--color-pink)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'white',
                            textAlign: 'center',
                            outline: 'none',
                            fontSize: '1.1rem'
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--color-gold)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={releaseLantern}
                        style={{
                            padding: '12px 30px',
                            background: 'var(--color-gold)',
                            color: 'var(--color-dark)',
                            border: 'none',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1.1rem'
                        }}
                    >
                        🔥 Release Lantern
                    </motion.button>
                </div>
            </motion.div>

            <AnimatePresence>
                {lanterns.map((l) => (
                    <motion.div
                        key={l.id}
                        initial={{ bottom: '20%', opacity: 0, x: (Math.random() * 60) - 30 + '%' }}
                        animate={{
                            bottom: '120%',
                            opacity: [0, 1, 1, 0],
                            x: (Math.random() * 80) - 40 + '%',
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 15, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '80px', // Increased size
                            height: '110px', // Increased size
                            background: 'rgba(255, 183, 197, 0.9)',
                            borderRadius: '15px 15px 8px 8px',
                            boxShadow: '0 0 40px #ffb7c5, inset 0 0 20px #fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            padding: '10px'
                        }}
                    >
                        <div style={{
                            fontSize: '0.8rem', // Bigger text
                            color: '#1a1a2e',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            overflowWrap: 'break-word',
                            width: '100%',
                            fontFamily: 'Outfit, sans-serif'
                        }}>
                            {l.wish}
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '5px',
                            width: '12px',
                            height: '12px',
                            background: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px white, 0 0 20px orange'
                        }} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Ambient background lanterns */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                    style={{
                        position: 'absolute',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        width: '15px',
                        height: '20px',
                        background: 'rgba(255, 215, 0, 0.3)',
                        borderRadius: '5px',
                        filter: 'blur(2px)',
                        zIndex: 1
                    }}
                />
            ))}
        </section>
    );
};

export default FloatingLanterns;
