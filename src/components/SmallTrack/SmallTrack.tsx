import React from 'react' 
import { Track } from '../../types/apiTypes'
import LinkToPage from '../LinkToPage/LinkToPage'
import Player from '../Player/Player'
import TrackDuration from '../TrackDuration/TrackDuration'

interface SmallTrackProps {
  track: Track
}
 
function SmallTrack({track}: SmallTrackProps) { 
  return ( 
    <div className='small-player rounded-md my-2 py-2 px-3 bg-black flex-1 flex justify-between items-center'>
      <div className="content flex gap-4">
        <img className="w-[50px] h-[50px] self-center" src={track.album.images[0].url}/>
        <div className="texts">
          <LinkToPage className="text-white font-semibold tracking-wider title" type='track' id={track.id}>{track.name}</LinkToPage>
          <LinkToPage className="text-white font-thin block artist" type='artist' id={track.artists[0].id}>{track.artists[0].name}</LinkToPage>
        </div>
      </div>
      <div className="duration mr-2">
        <TrackDuration className='text-white' duration={track.duration_ms}/>
      </div>
    </div> 
  )   
} 
 
export default SmallTrack
 
