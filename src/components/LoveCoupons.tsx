import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const coupons = [
    { title: "Long Warm Hug", description: "Good for one hug that lasts until you feel better.", color: "#FFC1CC" },
    { title: "Special Candlelight Dinner", description: "Cooked with love (and maybe some help from YouTube).", color: "#FFD700" },
    { title: "Infinite Cuddles", description: "Valid for one whole day of being a lazy potato together.", color: "#E6E6FA" },
    { title: "Stress-Free Day", description: "I'll handle everything. You just relax and stay pretty.", color: "#F5F5DC" },
    { title: "Midnight Walk", description: "A quiet walk under the stars, just us and the moon.", color: "#FFC1CC" },
    { title: "Apology Pass", description: "Instantly win any small argument (use wisely!).", color: "#FFD700" }
];

const LoveCoupons: React.FC = () => {
    const [redeemed, setRedeemed] = useState<number[]>([]);

    const toggleRedeem = (index: number) => {
        if (redeemed.includes(index)) {
            setRedeemed(redeemed.filter(i => i !== index));
        } else {
            setRedeemed([...redeemed, index]);
        }
    };

    return (
        <section style={{
            padding: '6rem 1rem',
            background: 'transparent',
            zIndex: 10,
            position: 'relative'
        }}>
            <h2 className="font-handwriting" style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--color-pink)', marginBottom: '3rem' }}>
                Your Love Coupons
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {coupons.map((coupon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                        onClick={() => toggleRedeem(index)}
                        style={{
                            background: 'white',
                            color: 'black',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: `4px dashed ${coupon.color}`,
                            cursor: 'pointer',
                            position: 'relative',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '5px',
                            right: '10px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            opacity: 0.5
                        }}>
                            #0023-02-21
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1A1A2E' }}>{coupon.title}</h3>
                        <p style={{ fontSize: '1rem', opacity: 0.8, color: '#333' }}>{coupon.description}</p>

                        <div style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>VALUED BY: YASHPAL</span>
                            <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: '2px solid #1A1A2E',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                ❤️
                            </div>
                        </div>

                        <AnimatePresence>
                            {redeemed.includes(index) && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 2, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1.2, rotate: -25 }}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        padding: '5px 15px',
                                        border: '4px solid #ff4d6d',
                                        color: '#ff4d6d',
                                        borderRadius: '5px',
                                        fontWeight: '900',
                                        fontSize: '2rem',
                                        zIndex: 5,
                                        background: 'rgba(255,255,255,0.9)',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    CLAIMED
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.6 }}>
                * Screenshot these and send them to me whenever you want to use one!
            </p>
        </section>
    );
};

export default LoveCoupons;
