import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getSingleTrack, getTrackRecommendations } from '../../features/resultsSlice'
import { Artist, Track } from '../../types/apiTypes'
import ArtistList from '../ArtistList/ArtistList'
import ItemSection from '../ItemSection/ItemSection'
import LinkToPage from '../LinkToPage/LinkToPage'
import Player from '../Player/Player'
import SmallTrack from '../SmallTrack/SmallTrack'
import SmallTracks from '../SmallTracks/SmallTracks'
import SpotifyLink from '../SpotifyLink/SpotifyLink'
import Title from '../Title/Title'
import TrackDuration from '../TrackDuration/TrackDuration'
 
function SingleTrackPage () { 
  const [track, setTrack] = useState<Track>()
  const [recommendations, setRecommendations] = useState<Track[]>([])

  const params = useParams()

  useEffect(() => {
    (async function(){
      const track = await getSingleTrack(params.id as string)
      setTrack(track)
      const recommendations = await getTrackRecommendations(track.id, track.artists[0].id)
      //@ts-ignore
      setRecommendations(recommendations.tracks)
    })()
  }, [])

  return ( 
    <div className="singleTrack text-[#ddd]">
      <div className="track-container flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="image flex-1">
          <img className='ml-auto' src={track?.album.images[1].url}/>
        </div>
        <div className="data flex-1">
          <p className='text-3xl font-bold tracking-wide'>{track?.name}</p>
          <ArtistList artists={track?.artists || [] as Artist[]} className="block text-2xl font-light"/>
          <LinkToPage className='text-xl font-thin' type='album' id={track?.album.id as string}>{track?.album.name as string}</LinkToPage>
          <TrackDuration className='text-lg' duration={track?.duration_ms as number}/>
          <div className="player w-fit">
            <Player preview_url={track?.preview_url as string | null}/>
          </div>
          <div className="link self-center">
            <SpotifyLink link={track?.external_urls.spotify as string}/>
          </div>
        </div>
      </div>
      <div className="recommendations my-10">
        <Title className='w-[80%] md:w-[90%] m-auto'>Músicas recomendadas baseada nesta:</Title>
        <SmallTracks>
          {recommendations.map(track => {
            return <SmallTrack track={track}/>
          })}
        </SmallTracks>
      </div>
    </div>
  ) 
} 
 
export default SingleTrackPage 
 
