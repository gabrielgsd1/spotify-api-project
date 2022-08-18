import React, { useLayoutEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getArtistAlbums, getArtistTopSongs, getSingleArtist } from '../../features/resultsSlice'
import { Album, Artist, SpotifyItems, Track } from '../../types/apiTypes'
import AlbumComponent from '../Album/AlbumComponent'
import CheckImage from '../CheckImage/CheckImage'
import Item from '../Item/Item'
import ItemSection from '../ItemSection/ItemSection'
import SmallTrack from '../SmallTrack/SmallTrack'
import SmallTracks from '../SmallTracks/SmallTracks'
import SpotifyLink from '../SpotifyLink/SpotifyLink'
import Title from '../Title/Title'
 
function SingleArtistPage () { 

  const params = useParams<string>()
  const [artist, setArtist] = useState<Artist>()
  const [topTracks, setTopTracks] = useState<{tracks:Track[]}>()
  const [albums, setAlbums] = useState<SpotifyItems<Album>>()

  useLayoutEffect(() => {
    (async function() {
      const result =  await getSingleArtist(params.id as string)
      setArtist(result)
      const tracks = await getArtistTopSongs(params.id as string)
      setTopTracks(tracks)
      const allAlbums = await getArtistAlbums(params.id as string)
      setAlbums(allAlbums)
    })()
  }, [])

  return ( 
    <div>
      <div className="artist-data flex-col lg:flex-row flex text-[#ddd] gap-8">
        <div className="img flex-1 m-auto">{artist && <CheckImage className='ml-auto' source={artist}/>}</div>
        <div className="extra-info flex-1 self-center">
          <p className='text-2xl font-bold tracking-wider'>{artist?.name}</p>
          <p>{artist?.followers.total} seguidores</p>
          <SpotifyLink link={artist?.external_urls.spotify as string}/>
        </div>
      </div>
      <div className="extra w-[90%] m-auto">
        <div className="top-tracks my-16">
          <Title>Músicas recomendadas</Title>
          {topTracks && 
            <SmallTracks>
              {topTracks.tracks.map((track, i) => {
                return <SmallTrack i={i} track={track}/>
              })}
            </SmallTracks>
          }
        </div>
        <div className="albums my-16">
          <Title>Álbuns</Title>
          {albums && (
            <ItemSection>
              {albums.items.map((album, i) => {
                return (
                  <Item>
                    <AlbumComponent album={album}/>
                  </Item>
                )
              })}
            </ItemSection>
          )}
        </div>
      </div> 
    </div>
  ) 
} 
 
export default SingleArtistPage 
 
