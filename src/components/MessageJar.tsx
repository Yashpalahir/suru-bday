import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "You are my favorite person in the whole universe! 🌌",
    "I'm so lucky to have you in my life. 🍀",
    "Your smile is my daily dose of happiness. 😊",
    "I love you more than words can say. ❤️",
    "You make every day feel like a dream. ✨",
    "I'm counting down the seconds until I see you again. ⏳",
    "You're the best thing that ever happened to me. 💍",
    "My heart belongs to you, today and forever. 💖",
    "You are the melody to my life's song. 🎶",
    "I promise to always hold your hand and never let go. 🤝"
];

const MessageJar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    const pickMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(messages[randomIndex]);
        setIsOpen(true);
    };

    return (
        <section style={{
            padding: '4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            position: 'relative'
        }}>
            <h2 className="font-handwriting" style={{ fontSize: '2.5rem', color: 'var(--color-pink)', marginBottom: '1rem' }}>
                The Jar of Love
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Click the jar to pick a sweet note!</p>

            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={pickMessage}>
                <motion.div
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 2, 0] }}
                    style={{ fontSize: '120px', filter: 'drop-shadow(0 0 15px rgba(255,193,204,0.3))' }}
                >
                    🏺
                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0, y: 0 }}
                            animate={{ scale: 1, opacity: 1, y: -150 }}
                            exit={{ scale: 0, opacity: 0, y: 0 }}
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '50%',
                                translateX: '-50%',
                                background: 'var(--color-beige)',
                                color: 'var(--color-dark)',
                                padding: '1.5rem',
                                borderRadius: '15px',
                                width: '250px',
                                textAlign: 'center',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                border: '2px solid var(--color-pink)',
                                zIndex: 20
                            }}
                        >
                            <p className="font-handwriting" style={{ fontSize: '1.2rem', margin: 0 }}>
                                {currentMessage}
                            </p>
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                style={{
                                    marginTop: '1rem',
                                    background: 'var(--color-pink)',
                                    border: 'none',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Close
                            </button>
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '50%',
                                transform: 'translateX(-50%) rotate(45deg)',
                                width: '20px',
                                height: '20px',
                                background: 'var(--color-beige)',
                                borderRight: '2px solid var(--color-pink)',
                                borderBottom: '2px solid var(--color-pink)'
                            }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MessageJar;
