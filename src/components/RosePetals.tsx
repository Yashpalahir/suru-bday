import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Petal {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    rotation: number;
}

const RosePetals: React.FC = () => {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (petals.length > 20) return; // Limit petals

            const newPetal: Petal = {
                id: Date.now(),
                x: Math.random() * 100,
                y: -10,
                size: Math.random() * 15 + 15,
                duration: Math.random() * 8 + 7,
                rotation: Math.random() * 360,
            };
            setPetals((prev) => [...prev, newPetal]);

            setTimeout(() => {
                setPetals((prev) => prev.filter((p) => p.id !== newPetal.id));
            }, newPetal.duration * 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, [petals.length]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            <AnimatePresence>
                {petals.map((petal) => (
                    <motion.div
                        key={petal.id}
                        initial={{ opacity: 0, y: '-10vh', x: `${petal.x}vw`, rotate: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            y: '110vh',
                            x: `${petal.x + (Math.sin(petal.id) * 10)}vw`,
                            rotate: petal.rotation + 360
                        }}
                        transition={{ duration: petal.duration, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            color: '#ff4d6d',
                            fontSize: `${petal.size}px`,
                            filter: 'drop-shadow(0 0 5px rgba(255, 77, 109, 0.3))'
                        }}
                    >
                        🌸
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default RosePetals;
