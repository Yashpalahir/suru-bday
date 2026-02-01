import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// User should place images named 1.jpg, 2.jpg... in public/memories/
const photos = [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
    id: i,
    src: `/memories/${i}.jpg`,
    fallback: `https://placehold.co/400x600/pink/white?text=Memory+${i}`,
    caption: `Memory ${i}`
}));

const Gallery: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        // Check if we are already using a placeholder to avoid infinite loop
        if (!target.src.includes('placehold.co')) {
            target.src = `https://placehold.co/400x600/pink/white?text=Add+Photo+${photos.find(p => p.src === target.getAttribute('src') || p.src.includes(target.getAttribute('src')?.split('/').pop() || ''))?.id || ''}`;
        }
    };

    return (
        <section id="gallery" style={{ padding: '4rem 1rem', zIndex: 10, position: 'relative' }}>
            <h2 className="font-handwriting" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--color-beige)' }}>
                Our Memories
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {photos.map((photo) => (
                    <motion.div
                        layoutId={`card-${photo.id}`}
                        key={photo.id}
                        onClick={() => setSelectedId(photo.id)}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '2/3',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            onError={handleImageError}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.3)',
                            opacity: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.3s'
                        }}
                            className="hover-overlay"
                        >
                            ❤️
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={`card-${selectedId}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 100,
                            padding: '2rem'
                        }}
                    >
                        <motion.img
                            src={photos.find(p => p.id === selectedId)?.src}
                            onError={handleImageError}
                            style={{ maxHeight: '90vh', maxWidth: '100%', borderRadius: '10px' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <a href="#letter" style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '12px 24px',
                            fontSize: '1.2rem',
                            backgroundColor: 'var(--color-gold)',
                            color: 'var(--color-dark)',
                            border: 'none',
                            borderRadius: '30px',
                            fontWeight: 'bold'
                        }}
                    >
                        Click for a Surprise
                    </motion.button>
                </a>
            </div>
        </section>
    );
};

export default Gallery;
