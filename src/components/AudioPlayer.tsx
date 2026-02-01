import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ play }: { play: boolean }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (play && audioRef.current) {
            audioRef.current.volume = 0.3; // Low volume
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Audio play failed (interaction needed first)", e));
        }
    }, [play]);

    const toggle = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            <button
                onClick={toggle}
                style={{
                    background: 'rgba(26, 26, 46, 0.6)',
                    border: '1px solid var(--color-pink)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'var(--color-pink)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                }}
            >
                {isPlaying ? '🎵' : '🔇'}
            </button>
            {/* Placeholder music file - User needs to add music.mp3 to public folder */}
            <audio ref={audioRef} loop src="/music.mp3" />
        </div>
    );
};

export default AudioPlayer;
