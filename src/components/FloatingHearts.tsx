import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Heart {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
}

const FloatingHearts: React.FC = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart: Heart = {
                id: Date.now(),
                x: Math.random() * 100, // percentage
                y: 100,
                size: Math.random() * 20 + 10,
                duration: Math.random() * 5 + 5,
            };
            setHearts((prev) => [...prev, newHeart]);

            // Remove heart after animation
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
            }, newHeart.duration * 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 0, y: '110vh', x: `${heart.x}vw` }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            y: '-10vh',
                            x: `${heart.x + (Math.random() * 10 - 5)}vw`
                        }}
                        transition={{ duration: heart.duration, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            color: 'var(--color-pink)',
                            fontSize: `${heart.size}px`,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingHearts;
