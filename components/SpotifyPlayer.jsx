'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Image from 'next/image'
import { Button } from './ui/button';

const SpotifyPlayer = () => {

    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    const spotify = () => {
        axios({
          method: 'get',
          url: 'https://v1.nocodeapi.com/sukrit/spotify/EXsWrUILtQOOYqoJ/recentlyPlayed',
          params: {},
        }).then(function (response) {
          // handle success
          console.log(response.data);
          setRecentlyPlayed(response.data.items[0]); // Only take the first item
        }).catch(function (error) {
          // handle error
          console.error(error);
        })
      }
      useEffect(()=>{
        spotify();
      },[])

  return (
    <div className='flex flex-row justify-between gap-4 border-t-2 pt-10'>
      <div className='flex flex-col gap-2 item-start'>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Now Listening to 🎧:</p>
        <Button variant="outline" className="rounded-full max-w-fit">
          spotify
        </Button>
        
      </div>
      <div className='item-end'> 
      {recentlyPlayed && recentlyPlayed.track && recentlyPlayed.track.album && (
        <div className='flex flex-row gap-6'>
                <Image
                  src={recentlyPlayed.track.album.images[0].url} 
                  width={50}
                  height={50}
                  alt="Album Art"
                  className='min-w-fit'
                />
                <div className='flex flex-col gap-2'>
                <small className="text-sm font-medium leading-none">{recentlyPlayed.track.name}</small>
                  <p className="text-sm text-muted-foreground">{recentlyPlayed.track.artists.map(artist => artist.name).join(', ')}</p>
                </div>
        </div>                        
          )}  
      </div>             
    </div>
  )
}

export default SpotifyPlayer
