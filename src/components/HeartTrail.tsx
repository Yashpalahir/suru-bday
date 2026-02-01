import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailHeart {
    id: number;
    x: number;
    y: number;
}

const HeartTrail: React.FC = () => {
    const [hearts, setHearts] = useState<TrailHeart[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newHeart: TrailHeart = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setHearts((prev) => [...prev.slice(-20), newHeart]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => prev.filter((h) => Date.now() - h.id < 1000));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0, y: heart.y - 50 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            left: heart.x,
                            top: heart.y,
                            color: 'var(--color-pink)',
                            fontSize: '20px',
                            textShadow: '0 0 10px rgba(255, 193, 204, 0.8)',
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default HeartTrail;
