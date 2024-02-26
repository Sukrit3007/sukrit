'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const SpotifyPlayer = () => {
    const clientId = process.env.SPOTIFY_KEY; // Replace with your client ID
    const code = undefined;

    async function spotify() {
        if (!code) {
            redirectToAuthCodeFlow(clientId);
        } else {
            const accessToken = await getAccessToken(clientId, code);
            const profile = await fetchProfile(accessToken);
            populateUI(profile);
        }
    }
    async function redirectToAuthCodeFlow(clientId) {
        // TODO: Redirect to Spotify authorization page
    }
    
    async function getAccessToken(clientId, code) {
      // TODO: Get access token for code
    }
    
    async function fetchProfile(token) {
        // TODO: Call Web API
    }
    
    function populateUI(profile) {
        // TODO: Update UI with profile data
    }

    useEffect(() => {
      spotify();
    
      return () => {
        
      }
    }, [])
    

    return (
        <div>

        </div>
    );
};

export default SpotifyPlayer;
