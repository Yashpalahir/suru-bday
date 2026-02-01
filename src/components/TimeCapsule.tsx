import React from 'react';
import { motion } from 'framer-motion';

const capsuleData = [
    { year: "2003", title: "The Universe Smiled", text: "On February 23rd, the most beautiful soul graced this earth. Little did the world know she would become someone's entire universe." },
    { year: "2010s", title: "A Flower Blooming", text: "You grew up with grace, kindness, and that smile that would one day melt my heart." },
    { year: "The Meeting", title: "Destiny's Plan", text: "Out of billions of people, we found each other. It wasn't luck; it was written in the stars." },
    { year: "Today", title: "My Forever", text: "23 years of you being amazing. I promise to make the next 100 even better." }
];

const TimeCapsule: React.FC = () => {
    return (
        <section style={{
            padding: '6rem 1rem',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 10,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h2 className="font-handwriting" style={{ textAlign: 'center', fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '4rem' }}>
                The Time Capsule of Us
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {capsuleData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            marginBottom: '6rem',
                            gap: '2rem'
                        }}
                    >
                        <div style={{
                            flex: 1,
                            textAlign: index % 2 === 0 ? 'right' : 'left'
                        }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-pink)', margin: 0 }}>{item.year}</h3>
                            <h4 className="font-handwriting" style={{ fontSize: '1.8rem', color: 'var(--color-beige)', marginBottom: '1rem' }}>{item.title}</h4>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>{item.text}</p>
                        </div>
                        <div style={{
                            width: '4px',
                            height: '150px',
                            background: 'var(--color-gold)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '20px',
                                height: '20px',
                                background: 'var(--color-dark)',
                                border: '3px solid var(--color-gold)',
                                borderRadius: '50%'
                            }} />
                        </div>
                        <div style={{ flex: 1 }} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TimeCapsule;
