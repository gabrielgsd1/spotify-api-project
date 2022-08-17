import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

interface PlayerProps {
  preview_url: string | null
}
 
function Player ({preview_url}: PlayerProps) { 

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const [duration, setDuration] = useState<number>(0)
  
  const [currentTime, setCurrentTime] = useState(0)

  const currentTimeElement = useRef<HTMLDivElement | null>(null)

  const timestampElement = useRef<HTMLDivElement | null>(null)

  const audio = useRef<HTMLAudioElement|null>(null)

  function handlePlayPause() {
    setIsPlaying(!isPlaying)
    if(audio.current?.paused){
      audio.current?.play()
    } else {
      audio.current?.pause()
    }
  }

  function endAudio(){
    setIsPlaying(false)
  }

  useEffect(() => {
    audio.current?.load()
    if(audio.current) setDuration(Math.floor(audio.current?.duration))
    return () => {
      setIsPlaying(false)
    }
  }, [])

  function handleTimeChange() {
    if(audio.current) setCurrentTime(Math.ceil(audio.current?.currentTime))
    if(currentTimeElement.current && timestampElement.current)
      currentTimeElement.current.style.width = `${timestampElement.current?.clientWidth * currentTime / duration}px`
  }

  function audioNullClasses(){
    return audio.current?.src ? "" : "brightness-[0.4] pointer-events-none"
  }

  return ( 
    <div className="player my-2 relative flex items-center justify-center w-full">
      <audio ref={audio} src={preview_url as string} onLoadedData={(e) => setDuration(Math.ceil(e.currentTarget.duration))} onTimeUpdate={handleTimeChange} onEnded={endAudio}/>
      {isPlaying ? <AiFillPauseCircle onClick={handlePlayPause} size={40}/>
        : <AiFillPlayCircle className={audioNullClasses()} onClick={handlePlayPause} size={40}/>
      }
      {audio.current?.src ? 
        (
          <div className="audio-data flex items-center">
            <div ref={timestampElement} className="timestamp relative bg-white w-32 h-2 rounded ml-1">
              <div ref={currentTimeElement} className="currentTime rounded left-0 absolute h-full bg-green-600"></div>
            </div>
            <div className="duration ml-2">0:{currentTime < 10 ? "0" + currentTime : currentTime}/0:{duration}</div>
          </div>
        ) : 
        (
          <div className='text-sm font-thin ml-1'>Preview não disponível.</div>
        ) 
      }
  </div>
  ) 
} 
 
export default Player 
 
