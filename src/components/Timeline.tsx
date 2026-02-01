import React from 'react';
import { motion } from 'framer-motion';

const events = [
    { year: '2003', text: 'A star was born 🌟' },
    { year: '2015', text: 'Two hearts found each other ❤️' },
    { year: '2018', text: 'We grew stronger 💪' },
    { year: '2020', text: 'We survived storms ⛈️' },
    { year: '2023', text: 'We chose forever 💍' },
    { year: '2026', text: 'My world is you 🌎' },
];

const Timeline: React.FC = () => {
    return (
        <section id="timeline" style={{ padding: '4rem 1rem', position: 'relative', zIndex: 10 }}>
            <h2 className="font-handwriting" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--color-beige)' }}>
                Our Journey
            </h2>
            <div style={{ maxWidth: '600px', margin: '0 auto', borderLeft: '2px solid var(--color-pink)', paddingLeft: '2rem' }}>
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        style={{ marginBottom: '3rem', position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0',
                            width: '20px',
                            height: '20px',
                            background: 'var(--color-gold)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--color-gold)'
                        }} />
                        <h3 style={{ fontSize: '2rem', color: 'var(--color-pink)' }}>{event.year}</h3>
                        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>{event.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
