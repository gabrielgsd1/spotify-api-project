import React, { useEffect, useState } from 'react' 
import { useAppSelector } from '../../store'
import { SpotifyAPIResponse, SpotifyResponseEventListener } from '../../types/apiTypes'
import AlbumsContainer from '../AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../ArtistsContainer/ArtistsContainer'
import ItemSection from '../ItemSection/ItemSection'
import TracksContainer from '../TracksContainer/TracksContainer'

function Items () {

  return ( 
    <div className='box-border m-6'>
      <TracksContainer/>
      <ArtistsContainer/>
      <AlbumsContainer/>
    </div> 
  ) 
} 
 
export default Items 
 
