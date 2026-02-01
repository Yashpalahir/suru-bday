import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter: React.FC = () => {
    return (
        <section id="letter" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center',
            zIndex: 10,
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
            >
                <h2 className="font-handwriting" style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--color-pink)' }}>My Vow to You</h2>

                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                    “If I had to choose between breathing and loving you…<br />
                    I would use my last breath to say — I love you.”
                </p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{ fontSize: '1.2rem', color: 'var(--color-gold)', fontWeight: 'bold' }}
                >
                    “In your 23rd year, I promise to choose you again and again.”
                </motion.p>
            </motion.div>
        </section>
    );
};

export default LoveLetter;
