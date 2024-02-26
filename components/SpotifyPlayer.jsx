
import React from 'react';

const SpotifyPlayer = () => {
    return (
        <div className="relative w-full h-[352px]">
                   <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src="https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?view=coverart"
                    style={{ border: '0' }}
                    allowFullScreen
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;">
                </iframe>
            </div>
    );
};

export default SpotifyPlayer;
