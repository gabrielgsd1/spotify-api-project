import React, { useEffect, useRef, useState } from 'react' 
import { SpotifyComponentProps, Track } from '../../types/apiTypes'
import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'
import { MdExplicit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import TrackDuration from '../TrackDuration/TrackDuration'
import Player from '../Player/Player'

interface TrackProps extends SpotifyComponentProps {
  track: Track
}

 
function TrackComponent ({track}: TrackProps) { 

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

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

    return () => {
      setIsPlaying(false)
    }
  }, [])

  function isAudioNull() {
    if(track.preview_url) return 
    return {
      div: <div className='absolute top-[-120%] peer-hover:opacity-[1] duration-300 opacity-[0] bg-gray-800 text-gray-400 px-2 rounded-lg'>A música não possui um preview disponível</div>,
      className: "brightness-[0.4] peer"
    } 
  }

  function goToArtist(id: string){
    return `/artist/${id}`
  }
  function goToTrack(id: string){
    return `/track/${id}`
  }

  const audioNull = isAudioNull()

  return ( 
    <div className='track'>
      <img loading='lazy' src={track.album.images[1].url} className="w-[150px] m-auto h-[150px]"/>
      <Player preview_url={track.preview_url}/>
      <div className="trackName">
        <a href={goToTrack(track.id)} target="_blank" data-id={track.id} className="hover:underline name text-center font-semibold tracking-wide">
          {track.name} {track.explicit ? <MdExplicit className='inline relative'/> : <></>}
        </a>
      </div>
      <div className="artist font-thin">
        {track.artists.map((artist, i, arr) => {
            return (
              <a 
                href={goToArtist(artist.id)} 
                target="_blank" 
                className='hover:underline' 
                data-id={artist.id}
              >
                  {artist.name}{i !== arr.length - 1 ? ", " : ""}
              </a>
            )
        })}
      </div>
      <TrackDuration duration={track.duration_ms}/>  
    </div> 
  ) 
} 
 
export default TrackComponent
 
