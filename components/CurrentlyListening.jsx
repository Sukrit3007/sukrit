'use client'
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useTheme } from "next-themes";

const CurrentlyListening = () => {
  const { setTheme, theme } = useTheme();
  const [spotifySrc, setSpotifySrc] = useState("");

  useEffect(() => {
    if (theme === 'light') {
      setSpotifySrc("https://open.spotify.com/embed/album/4Q7cRXio6mF2ImVUCcezPO?utm_source=generator");
    } else {
      setSpotifySrc("https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?view=coverart");
    }
  }, [theme]);

  return (
    <Card className="w-full bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <CardDescription>currently listening:</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[352px]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl"
            src={spotifySrc}
            style={{ border: "0" }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CurrentlyListening;
