import React from 'react';

import SpotifyPlayer from '@/components/SpotifyPlayer';
import AboutMe from '@/components/AboutMe';


export default function Home() {
  return (
    <main className="flex min-h-fit max-h-fit flex-col items-center justify-between px-12 py-8 mb-16 lg:px-96 text-left">
      <div className="min-w-full flex flex-col gap-8">
        <AboutMe/>
        <SpotifyPlayer/>
      </div>
    </main>
  );
}
