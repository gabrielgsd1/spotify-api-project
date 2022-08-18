import React from 'react' 
import { Artist } from '../../types/apiTypes'
import LinkToPage from '../LinkToPage/LinkToPage'
 
interface ArtistListProps {
  artists: Artist[]
  className?: string
}

function ArtistList ({artists, className}: ArtistListProps) { 
  return ( 
    <div className={'artists ' + className}>
    {artists.map((artist, i, arr) => {
      return (
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
      )
    })}
    </div> 
  ) 
} 
 
export default ArtistList 
 
