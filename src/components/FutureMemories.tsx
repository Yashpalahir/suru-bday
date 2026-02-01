import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const futureEvents = [
    { title: "Our First Home", text: "A place filled with laughter, love, and the smell of your favorite coffee.", icon: "🏠" },
    { title: "Global Adventures", text: "Holding hands while watching the sunset in Paris, Bali, and beyond.", icon: "✈️" },
    { title: "Lazy Sunday Mornings", text: "Waking up late, cuddling, and making breakfast together forever.", icon: "☕" },
    { title: "Growing Old Together", text: "Still being each other's best friend when we're 80 years old.", icon: "👴👵" },
    { title: "A Beautiful Family", text: "Building a life that others write poems about.", icon: "👨‍👩‍👧‍👦" },
    { title: "Infinite Anniversary", text: "Celebrating our 50th year with the same spark we have today.", icon: "🕯️" }
];

const FutureMemories: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section style={{
            padding: '6rem 1rem',
            background: 'linear-gradient(to bottom, transparent, rgba(26,26,46,0.9))',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center'
        }}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-handwriting"
                style={{
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    color: 'var(--color-gold)',
                    marginBottom: '1rem',
                    padding: '0 1rem'
                }}
            >
                The Constellation of Our Future
            </motion.h2>
            <p style={{
                opacity: 0.8,
                marginBottom: '4rem',
                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                padding: '0 1rem'
            }}>
                Click on the stars of our future to see what I have planned for us...
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'clamp(1.5rem, 5vw, 3rem)',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1rem'
            }}>
                {futureEvents.map((event, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelected(selected === index ? null : index)}
                            style={{
                                cursor: 'pointer',
                                fontSize: 'clamp(2.5rem, 7vw, 3.5rem)',
                                filter: 'drop-shadow(0 0 10px var(--color-gold))',
                                position: 'relative',
                                zIndex: 2,
                                WebkitTapHighlightColor: 'transparent'
                            }}
                        >
                            ✨
                        </motion.div>

                        <AnimatePresence>
                            {selected === index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    style={{
                                        position: 'relative',
                                        width: 'calc(100vw - 2rem)',
                                        maxWidth: '300px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(15px)',
                                        border: '1px solid var(--color-pink)',
                                        padding: '1.5rem',
                                        borderRadius: '20px',
                                        marginTop: '1rem',
                                        zIndex: 10,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                        order: 2
                                    }}
                                >
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{event.icon}</div>
                                    <h3 style={{ color: 'var(--color-pink)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{event.title}</h3>
                                    <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{event.text}</p>
                                    <div
                                        onClick={() => setSelected(null)}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            cursor: 'pointer',
                                            opacity: 0.6,
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        ✕
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FutureMemories;
