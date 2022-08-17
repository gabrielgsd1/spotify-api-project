import React, { FC, ReactNode } from 'react' 
import { Album, Artist, SpotifyAPIResponse, SpotifyItems, Track } from '../../types/apiTypes'
import AlbumComponent from '../Album/AlbumComponent'
import ArtistComponent from '../Artist/ArtistComponent'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
import Item from '../Item/Item'
import TrackComponent from '../Track/TrackComponent'
 
interface ItemSectionProps {
  children: JSX.Element[] | undefined
}

function ItemSection ({children}: ItemSectionProps) {

  return (
    <div className='box-border mb-12'>
      <div className="infos-container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {children}
      </div>
    </div> 
  ) 
} 
 
export default ItemSection 
 
