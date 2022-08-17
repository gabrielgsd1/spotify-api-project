import React from 'react' 
import { useAppSelector } from '../../store'
import { Artist } from '../../types/apiTypes'
import ArtistComponent from '../Artist/ArtistComponent'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
import Item from '../Item/Item'
import ItemSection from '../ItemSection/ItemSection'
import Title from '../Title/Title'
 
function ArtistsContainer () { 
  
  const artists = useAppSelector(state => state.results.artists)

  function checkImage(artist: Artist) {
    if(artist.images.length > 0) return <img className='w-[150px] h-[150px] m-auto rounded-[50%]' src={artist.images[1].url}/>
    else return <ImageNotFound /> 
  }
  
  return artists && artists.items.length > 0 ? ( 
    <div className="artists">
      <Title>Artistas</Title>
      <ItemSection>
        {artists.items.map((artist, i) => {
          return (
            <Item index={i}>
              <ArtistComponent artist={artist}/>
            </Item>
          )
        })}  
      </ItemSection>
    </div>
  ) : <></>
} 
 
export default ArtistsContainer 
 
