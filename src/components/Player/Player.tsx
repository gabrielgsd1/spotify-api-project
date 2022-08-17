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
  
  function isAudioNull() {
    if(preview_url) return 
    return {
      div: <div className='absolute top-[-120%] peer-hover:opacity-[1] duration-300 opacity-[0] bg-gray-800 text-gray-400 px-2 rounded-lg'>A música não possui um preview disponível</div>,
      className: "brightness-[0.4] pointer-events-none"
    } 
  }

  const audioNull = isAudioNull()

  return ( 
    <div className="player my-2 relative flex items-center justify-center w-full">
      <audio ref={audio} src={preview_url as string} onLoadedData={(e) => setDuration(Math.ceil(e.currentTarget.duration))} onTimeUpdate={handleTimeChange} onEnded={endAudio}/>
      {isPlaying ? <AiFillPauseCircle  onClick={handlePlayPause} size={40}/>
        : <AiFillPlayCircle onClick={handlePlayPause} className={audioNull?.className} size={40}/>
      }
      <div ref={timestampElement} className="timestamp relative bg-white w-32 h-2 rounded ml-1">
        <div ref={currentTimeElement} className="currentTime rounded left-0 absolute h-full bg-green-600"></div>
      </div>
      <div className="duration ml-2">{currentTime}/{duration}</div>
  </div>
  ) 
} 
 
export default Player 
 
