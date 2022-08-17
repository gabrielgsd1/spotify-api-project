import { trackForMutations } from '@reduxjs/toolkit/dist/immutableStateInvariantMiddleware'
import React, { useEffect, useState } from 'react' 
import { Params, useParams } from 'react-router-dom'
import { getSingleTrack } from '../../features/resultsSlice'
import { useAppDispatch } from '../../store'
import { Artist, SpotifyItems, Track } from '../../types/apiTypes'
import ArtistComponent from '../Artist/ArtistComponent'
import Player from '../Player/Player'
import SpotifyLink from '../SpotifyLink/SpotifyLink'
import TrackDuration from '../TrackDuration/TrackDuration'

interface SingleTrackPageParams {
  id: string
}
 
function SingleTrackPage () { 
  const [track, setTrack] = useState<Track>()

  const params = useParams()

  useEffect(() => {
    (async function(){
      const track = await getSingleTrack(params.id as string)
      setTrack(track)
    })()
  }, [])

  return ( 
    <div className="singleTrack text-[#ddd]">
      <div className="track-container flex gap-4 justify-center">
        <img src={track?.album.images[1].url}/>
        <div className="data">
          <p className='text-3xl font-bold tracking-wide'>{track?.name}</p>
          <p className='text-xl font-thin'>{track?.album.name}</p>
          <TrackDuration className='text-lg' duration={track?.duration_ms as number}/>
          <div className="player w-fit">
            <Player preview_url={track?.preview_url as string | null}/>
          </div>
          <div className="link self-center">
            <SpotifyLink link={track?.external_urls.spotify as string}/>
          </div>
        </div>
      </div>
    </div>
  ) 
} 
 
export default SingleTrackPage 
 
