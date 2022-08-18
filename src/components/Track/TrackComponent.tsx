import React, { useEffect, useLayoutEffect, useRef, useState } from 'react' 
import { SpotifyComponentProps, Track } from '../../types/apiTypes'
import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'
import { MdExplicit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import TrackDuration from '../TrackDuration/TrackDuration'
import Player from '../Player/Player'
import LinkToPage from '../LinkToPage/LinkToPage'

interface TrackProps extends SpotifyComponentProps {
  track: Track
}

 
function TrackComponent ({track}: TrackProps) { 

  return ( 
    <div className='track'>
      <img loading='lazy' src={track.album.images[1].url} className="w-[150px] m-auto h-[150px]"/>
      <Player preview_url={track.preview_url}/>
      <div className="trackName">
        <LinkToPage type='track' id={track.id} target="_blank" className="hover:underline name text-center font-semibold tracking-wide">
          <>
            {track.name} {track.explicit ? <MdExplicit className='inline relative'/> : <></>}
          </>
        </LinkToPage>
      </div>
      <div className="artist font-thin">
        {track.artists.map((artist, i, arr) => {
            return (
              <>
                <LinkToPage 
                  type='artist'
                  id={artist.id}                 
                  target="_blank" 
                  className='hover:underline' 
                >
                  <>
                    {artist.name}{i !== arr.length - 1 ? ", " : ""}
                  </>
                </LinkToPage>
              </>
            )
        })}
      </div>
      <TrackDuration duration={track.duration_ms}/>  
    </div> 
  ) 
} 
 
export default TrackComponent
 
