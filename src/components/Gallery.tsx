import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const moments = [
    { year: 2019, title: "The Beginning", text: "I didn't know it then, but the moment our paths crossed, my destiny changed forever. You weren't just a stranger; you were my future waiting to happen." },
    { year: 2020, title: "The Realization", text: "It hit me suddenly. It wasn't just a crush anymore. It was deep, terrifying, beautiful love. I realized I didn't just want you; I needed you." },
    { year: 2021, title: "The Connection", text: "We didn't need words. Just looking at you gave me peace. In a noisy world, you became my quiet place, my sanctuary." },
    { year: 2022, title: "The Growth", text: "We fought, we cried, we struggled. But we never let go. Every tear just watered the roots of our love, making us unbreakable." },
    { year: 2023, title: "The Comfort", text: "Your voice became my favorite sound. Your name became my favorite word. Being with you felt more like home than any house ever could." },
    { year: 2024, title: "The Strength", text: "When the world felt heavy, you held it up for me. You taught me that together, we can survive any storm." },
    { year: 2025, title: "The Promise", text: "I looked at you one ordinary day and made a silent vow: 'I will love this girl until my very last breath.' I meant it then, I mean it now." },
    { year: 2026, title: "The Forever", text: "8 years. And yet, every time I see you, my heart still skips a beat. You are not just my love, Suru. You are my life." }
];

const Gallery: React.FC = () => {
    const [selectedMoment, setSelectedMoment] = useState<typeof moments[0] | null>(null);

    return (
        <section id="gallery" style={{ padding: '6rem 1rem', zIndex: 10, position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '4rem' }}
            >
                <h2 className="font-handwriting" style={{ fontSize: '3rem', color: 'var(--color-pink)', marginBottom: '1rem' }}>
                    Moments Etched in Stars
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-lavender)', fontStyle: 'italic' }}>
                    "I don't need photographs to remember. <br />Every beautiful moment with you is burned into my soul forever."
                </p>
            </motion.div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                maxWidth: '1000px',
                position: 'relative'
            }}>
                {moments.map((moment, index) => (
                    <motion.div
                        key={moment.year}
                        layoutId={`star-${moment.year}`}
                        onClick={() => setSelectedMoment(moment)}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 30% 30%, var(--color-gold), #b8860b)',
                            boxShadow: '0 0 20px var(--color-gold), 0 0 40px rgba(255, 215, 0, 0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-dark)',
                            fontWeight: 'bold',
                            position: 'relative',
                            border: '2px solid rgba(255,255,255,0.4)'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>{moment.year}</span>
                        <div style={{ fontSize: '1.5rem', marginTop: '-5px' }}>✨</div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedMoment && (
                    <motion.div
                        layoutId={`star-${selectedMoment.year}`}
                        className="modal-overlay"
                        onClick={() => setSelectedMoment(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(26, 26, 46, 0.95)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 100,
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,193,204,0.1), rgba(26,26,46,0.8))',
                                border: '1px solid var(--color-pink)',
                                padding: '3rem',
                                borderRadius: '20px',
                                maxWidth: '500px',
                                textAlign: 'center',
                                boxShadow: '0 0 50px rgba(255,193,204,0.2)'
                            }}
                        >
                            <h3 className="font-handwriting" style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                                {selectedMoment.year}
                            </h3>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                {selectedMoment.title}
                            </h4>
                            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', fontFamily: 'Playfair Display' }}>
                                "{selectedMoment.text}"
                            </p>
                            <button
                                onClick={() => setSelectedMoment(null)}
                                style={{
                                    marginTop: '2rem',
                                    background: 'transparent',
                                    border: '1px solid var(--color-lavender)',
                                    color: 'var(--color-lavender)',
                                    padding: '10px 30px',
                                    borderRadius: '30px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                Close Memory
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                <a href="#letter" style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '12px 24px',
                            fontSize: '1.2rem',
                            backgroundColor: 'transparent',
                            color: 'var(--color-pink)',
                            border: '1px solid var(--color-pink)',
                            borderRadius: '30px',
                            letterSpacing: '1px'
                        }}
                    >
                        Scroll Down for My Vow ↓
                    </motion.button>
                </a>
            </div>
        </section>
    );
};

export default Gallery;
