import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
                if (index === text.length) clearInterval(interval);
            }, 100);
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

interface OpeningProps {
    onStart: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onStart }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 6000); // Show button after text
        return () => clearTimeout(timer);
    }, []);

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{ marginBottom: '2rem' }}
            >
                <h2 className="font-handwriting" style={{ fontSize: '1.5rem', color: 'var(--color-pink)', marginBottom: '1rem' }}>
                    <TypewriterText text="On 23rd February 2003, the world became more beautiful..." />
                </h2>
                <h1 className="font-handwriting" style={{ fontSize: '2.5rem', color: 'var(--color-gold)' }}>
                    <TypewriterText text="Because Surksha was born." delay={3.5} />
                </h1>
            </motion.div>

            {showButton && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={onStart}
                    style={{
                        padding: '12px 24px',
                        fontSize: '1.2rem',
                        backgroundColor: 'var(--color-pink)',
                        color: 'var(--color-dark)',
                        border: 'none',
                        borderRadius: '30px',
                        boxShadow: '0 0 15px var(--color-pink)',
                        cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 25px var(--color-pink)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Your Journey
                </motion.button>
            )}
        </section>
    );
};

export default Opening;
