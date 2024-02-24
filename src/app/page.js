"use client"
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Navbar from './components/Navbar';


export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://tencentscdn2.tamashaweb.com/v1/018ad584681c09831f17035dc819/018ad58586961eb401a60363c44c/main.m3u8');
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://tencentscdn2.tamashaweb.com/v1/018ad584681c09831f17035dc819/018ad58586961eb401a60363c44c/main.m3u8';
    }

    video.addEventListener('play', () => {
      console.log('Video is now playing');
    });

    video.addEventListener('pause', () => {
      console.log('Video is now paused');
    });

    video.addEventListener('ended', () => {
      console.log('Video has ended');
    });

    return () => {
      // Clean up resources if needed
    };
  }, []);
  
  return (
    <div>
      <Navbar/>
      <p class="text-center" style={{fontSize: "32px", fontWeight: "bold"}}> PSL: Pakistan Super League Season 9 Live </p>
<h3 class="text-center mb-3 mt-3 " >
    <span style={{backgroundColor: "rgb(93, 233, 93)", color: "white", paddingLeft: "13px", paddingRight: "13px", paddingTop: "3px", paddingBottom: "3px", borderRadius: "10px"}}>Live Streaming</span>
</h3>
<p class="text-center" style={{color: "green", fontSize: 25, fontWeight: "bold;"}}> Pakistan Super League 2024 will be played from 17 February to 18 March</p>
      <div style={{display:"flex",justifyContent:"center"}}>
      <video ref={videoRef} controls style={{width:"50%"}} />
      </div>
    
  </div>
  );
}
