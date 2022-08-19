import React, { useLayoutEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getAlbumTracks, getSingleAlbum } from '../../features/resultsSlice'
import { Album, SpotifyItems, Track } from '../../types/apiTypes'
import ArtistList from '../ArtistList/ArtistList'
import CheckImage from '../CheckImage/CheckImage'
import SmallTrack from '../SmallTrack/SmallTrack'
import SmallTracks from '../SmallTracks/SmallTracks'
import SpotifyLink from '../SpotifyLink/SpotifyLink'
 
function SingleAlbumPage () {
  
  const [album, setAlbum] = useState<Album>()
  const [albumTracks, setAlbumTracks] = useState<SpotifyItems<Track>>()
  const params = useParams()

  useLayoutEffect(() => {
    (async function() {
      const res = await getSingleAlbum(params.id as string)
      setAlbum(res)
      const tracks = await getAlbumTracks(params.id as string)
      console.log(tracks)
      setAlbumTracks(tracks)
    })()
  }, [])
  
  return ( 
    <div className='album w-[90%] m-auto text-[#ddd]'>
      {album && (
        <div className="data flex flex-col gap-6 md:flex-row">
          <div className="image flex-1 m-auto">
            <CheckImage className='ml-auto' source={album}/>
          </div>
          <div className="info flex-1 self-center">
            <p className='text-2xl font-semibold tracking-wider'>{album.name}</p>
            <ArtistList className='text-2xl font-thin' artists={album.artists}/>
            <p className='text-md font-thin'>{album.release_date}</p>
            <SpotifyLink link={album.external_urls.spotify}/>
          </div>
        </div>
      )}
      {albumTracks && (
        <div className='tracks'>
          <SmallTracks>
            {albumTracks.items.map(track => {
              return <SmallTrack track={track} imgPath={album?.images[0].url}/>
            })}
          </SmallTracks>
        </div>
      )}
    </div>
  ) 
} 
 
export default SingleAlbumPage 
 
