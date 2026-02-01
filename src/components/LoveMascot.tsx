import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveMascot: React.FC = () => {
    const [message, setMessage] = useState("");
    const [isThinking, setIsThinking] = useState(false);

    const lines = [
        "Suru is the prettiest! ✨",
        "Yashpal loves you so much! ❤️",
        "Have a magical day! 🎂",
        "You are a superstar! 🌟",
        "Wink wink! 😉",
        "Boop! 👃",
        "You make my heart go boom! 💓"
    ];

    const handleClick = () => {
        if (isThinking) return;
        setIsThinking(true);
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        setMessage(randomLine);

        setTimeout(() => {
            setMessage("");
            setIsThinking(false);
        }, 3000);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            cursor: 'pointer'
        }} onClick={handleClick}>
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: 1, y: -40, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            position: 'absolute',
                            bottom: '60px',
                            left: '0',
                            background: 'white',
                            color: 'black',
                            padding: '8px 15px',
                            borderRadius: '15px',
                            whiteSpace: 'nowrap',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                            border: '2px solid var(--color-pink)'
                        }}
                    >
                        {message}
                        <div style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '15px',
                            width: '15px',
                            height: '15px',
                            background: 'white',
                            rotate: '45deg',
                            borderRight: '2px solid var(--color-pink)',
                            borderBottom: '2px solid var(--color-pink)'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ fontSize: '50px', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.3))' }}
            >
                🐱
            </motion.div>
        </div>
    );
};

export default LoveMascot;
