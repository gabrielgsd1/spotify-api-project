import React from 'react' 
import { Artist, SpotifyComponentProps } from '../../types/apiTypes'
import ImageNotFound from '../ImageNotFound/ImageNotFound'

interface ArtistProps extends SpotifyComponentProps{
  artist: Artist
}

function checkImage(artist: Artist) {
  if(artist.images.length > 0) return <img loading='lazy' className='w-[150px] h-[150px] m-auto rounded-[50%]' src={artist.images[1].url}/>
  else return <ImageNotFound /> 
}
 
function ArtistComponent ({artist}: ArtistProps) { 
   return ( 
    <div className="artist">
      <div className="image center">
        {checkImage(artist)}
      </div>
      <div className="name my-4 text-center font-semibold text-lg">
        {artist.name}
      </div>
    </div>
   ) 
} 
 
export default ArtistComponent
 
