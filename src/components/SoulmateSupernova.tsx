import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const SoulmateSupernova: React.FC = () => {
    const [isUnited, setIsUnited] = useState(false);
    const [isExploded, setIsExploded] = useState(false);
    const [dragProgress, setDragProgress] = useState(0);

    const handleDrag = (_e: any, info: any) => {
        // info.offset.x is the amount dragged from start
        // She is on the right, dragging left, so offset.x will be negative
        const currentDrag = Math.abs(info.offset.x);
        const totalDistance = 250;
        const progress = Math.min(currentDrag / totalDistance, 1);
        setDragProgress(progress);
    };

    const handleDragEnd = (_e: any, info: any) => {
        // Trigger if dragged halfway or more
        if (info.offset.x < -120) {
            triggerSupernova();
        } else {
            setDragProgress(0);
        }
    };

    const triggerSupernova = () => {
        setIsUnited(true);

        // Stage 2: The Supernova Explosion after some time of heartbeat
        setTimeout(() => {
            setIsExploded(true);
            const duration = 6 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 1000 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return clearInterval(interval);

                const particleCount = 150 * (timeLeft / duration);
                (confetti as any)({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.4, 0.6), y: randomInRange(0.4, 0.6) },
                    colors: ['#FFD700', '#FFC1CC', '#FFFFFF', '#FF69B4', '#E6E6FA'],
                });
            }, 200);
        }, 5000); // 5 seconds of the "SURYASH" heart beating
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 100,
            overflow: 'hidden',
            background: isExploded ? 'radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, rgba(26,26,46,1) 70%)' : 'transparent',
            padding: '1rem'
        }}>
            <AnimatePresence mode="wait">
                {!isUnited ? (
                    <motion.div
                        key="interaction"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                        style={{ textAlign: 'center', width: '100%' }}
                    >
                        <motion.h2 className="font-handwriting"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', color: 'var(--color-gold)', marginBottom: '3rem' }}
                        >
                            The Final Union...
                        </motion.h2>

                        <div style={{
                            position: 'relative',
                            height: '250px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'clamp(2rem, 8vw, 8rem)'
                        }}>
                            {/* Yashpal's Heart (Target) */}
                            <motion.div
                                style={{
                                    position: 'relative',
                                    zIndex: 5,
                                    filter: `drop-shadow(0 0 ${15 + (dragProgress * 40)}px var(--color-pink))`
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)' }}
                                >
                                    ❤️
                                </motion.div>
                                <span style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', color: 'var(--color-pink)', whiteSpace: 'nowrap', fontSize: '1.1rem' }}>
                                    Yashpal
                                </span>
                            </motion.div>

                            {/* The Connection Line */}
                            <div style={{ width: 'clamp(60px, 15vw, 150px)', height: '2px', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
                                <motion.div style={{
                                    position: 'absolute',
                                    right: 0,
                                    height: '100%',
                                    background: 'var(--color-gold)',
                                    width: `${dragProgress * 100}%`,
                                    boxShadow: '0 0 10px var(--color-gold)'
                                }} />
                            </div>

                            {/* Surksha's Heart (Draggable) */}
                            <motion.div style={{ position: 'relative', zIndex: 10 }}>
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ left: -300, right: 0 }}
                                    dragElastic={0.1}
                                    onDrag={handleDrag}
                                    onDragEnd={handleDragEnd}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9, cursor: 'grabbing' }}
                                    style={{
                                        fontSize: 'clamp(3.5rem, 12vw, 6.5rem)',
                                        cursor: 'grab',
                                        filter: `drop-shadow(0 0 ${15 + (dragProgress * 50)}px var(--color-gold))`,
                                        WebkitTapHighlightColor: 'transparent'
                                    }}
                                >
                                    💖
                                </motion.div>
                                <motion.span
                                    animate={{ opacity: 1 - dragProgress }}
                                    style={{ position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', color: 'var(--color-gold)', whiteSpace: 'nowrap', fontSize: '1.1rem' }}
                                >
                                    Surksha
                                </motion.span>
                                {dragProgress < 0.2 && (
                                    <motion.p
                                        animate={{ x: [-10, 0, -10], opacity: [0.6, 1, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        style={{ position: 'absolute', top: '-60px', left: '-50px', width: '200px', fontSize: '0.9rem', color: 'var(--color-gold)' }}
                                    >
                                        ← Drag to him
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>
                        <p style={{ marginTop: '4rem', opacity: 0.5, fontStyle: 'italic' }}>
                            "Drag her heart to his to unite forever"
                        </p>
                    </motion.div>
                ) : !isExploded ? (
                    <motion.div
                        key="merged-heart"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: 1
                        }}
                        transition={{
                            scale: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 0.8 }
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            width: 'clamp(280px, 90vw, 550px)',
                            height: 'clamp(280px, 90vw, 550px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* SVG Heart for pixel-perfect centering */}
                            <svg viewBox="0 0 512 512" style={{
                                width: '100%',
                                height: '100%',
                                filter: 'drop-shadow(0 0 60px rgba(255, 56, 96, 0.6))'
                            }}>
                                <path
                                    fill="#ff3860"
                                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                                />
                            </svg>

                            <div style={{
                                position: 'absolute',
                                top: '44%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                                    fontWeight: '900',
                                    fontFamily: 'Outfit, sans-serif',
                                    margin: 0,
                                    textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                    letterSpacing: '2px'
                                }}>
                                    SURYASH
                                </h1>
                            </div>
                        </div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="font-handwriting"
                            style={{
                                fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                                color: 'var(--color-gold)',
                                marginTop: '1.5rem'
                            }}
                        >
                            One Heartbeat, One Life
                        </motion.h3>
                    </motion.div>
                ) : (
                    <motion.div
                        key="vow"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        style={{
                            textAlign: 'center',
                            zIndex: 10,
                            padding: '1.5rem',
                            maxWidth: '100%',
                            width: '800px'
                        }}
                    >
                        <h2 className="font-handwriting" style={{
                            fontSize: 'clamp(2.5rem, 9vw, 5rem)',
                            color: 'var(--color-gold)',
                            marginBottom: '1.5rem',
                            textShadow: '0 0 30px var(--color-gold)'
                        }}>
                            Tied by Destiny
                        </h2>

                        <p style={{
                            fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            color: 'var(--color-beige)',
                            padding: '0 1rem',
                            opacity: 0.9
                        }}>
                            "In this lifetime and every other, I will always find you. You are the light I've been searching for across billions of stars."
                        </p>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            padding: '2rem 1rem',
                            borderRadius: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            width: '100%',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto 1fr',
                                alignItems: 'center',
                                width: '100%',
                                gap: '0.5rem'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ color: 'var(--color-pink)', fontSize: '0.65rem', letterSpacing: '1px', marginBottom: '0.2rem' }}>ETERNAL 01</p>
                                    <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', fontWeight: 'bold' }}>Yashpal</p>
                                </div>

                                <motion.div
                                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    style={{ fontSize: '2rem' }}
                                >
                                    ✨
                                </motion.div>

                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ color: 'var(--color-gold)', fontSize: '0.65rem', letterSpacing: '1px', marginBottom: '0.2rem' }}>ETERNAL 02</p>
                                    <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', fontWeight: 'bold' }}>Surksha</p>
                                </div>
                            </div>

                            <div style={{ fontSize: '2rem', color: 'var(--color-pink)' }}>♾️</div>
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            style={{
                                marginTop: '3rem',
                                padding: '15px 45px',
                                background: 'linear-gradient(45deg, var(--color-pink), var(--color-gold))',
                                border: 'none',
                                color: 'white',
                                borderRadius: '35px',
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                boxShadow: '0 10px 20px rgba(255, 105, 180, 0.3)'
                            }}
                        >
                            Our Future Awaits ↓
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SoulmateSupernova;
