import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const AudioPlayer = ({ play }: { play: boolean }) => {
    const playerRef = useRef<any>(null);

    useEffect(() => {
        // Only initialize YouTube if it is not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: 'COGifdOP198',
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'loop': 1,
                    'playlist': 'COGifdOP198',
                    'playsinline': 1,
                    'origin': window.location.origin
                },
                events: {
                    'onReady': (event: any) => {
                        event.target.setVolume(50); // Set to 50% for better audibility
                    }
                }
            });
        };

        // If YT is already loaded (on re-renders), manually trigger initialization
        if (window.YT && window.YT.Player) {
            window.onYouTubeIframeAPIReady();
        }
    }, []);

    useEffect(() => {
        if (play && playerRef.current && typeof playerRef.current.playVideo === 'function') {
            // Wait 17 seconds after the journey starts before playing music
            const timer = setTimeout(() => {
                try {
                    playerRef.current.playVideo();
                    // To bypass aggressive autoplay blocks, we try to play
                    console.log("Attempting to play music after 17s delay...");
                } catch (e) {
                    console.error("Audio playback error:", e);
                }
            }, 17000);
            return () => clearTimeout(timer);
        }
    }, [play]);

    return (
        <div style={{
            position: 'fixed',
            bottom: '-100px', // Hide off screen instead of display:none
            right: '-100px',
            zIndex: -1,
            opacity: 0,
            pointerEvents: 'none'
        }}>
            <div id="youtube-player"></div>
        </div>
    );
};

export default AudioPlayer;
