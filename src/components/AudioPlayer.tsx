import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const AudioPlayer = ({ play }: { play: boolean }) => {
    const playerRef = useRef<any>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: 'COGifdOP198', // The requested song
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'loop': 1,
                    'playlist': 'COGifdOP198', // Required for loop to work
                    'playsinline': 1,
                    'start': 15
                },
                events: {
                    'onReady': (event: any) => {
                        event.target.setVolume(20); // Set volume to 20%
                        setIsReady(true);
                    },

                }
            });
        };
    }, []);

    useEffect(() => {
        if (play && isReady && playerRef.current && playerRef.current.playVideo) {
            // Delay music by 17 seconds as requested
            const timer = setTimeout(() => {
                playerRef.current.playVideo();
            }, 17000);
            return () => clearTimeout(timer);
        }
    }, [play, isReady]);


    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, display: 'none' }}>
            <div id="youtube-player"></div>
        </div>
    );
};

export default AudioPlayer;
