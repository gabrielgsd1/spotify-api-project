import React from 'react' 
import { Album } from '../../types/apiTypes'
import ArtistList from '../ArtistList/ArtistList'
import LinkToPage from '../LinkToPage/LinkToPage'

interface AlbumProps{
  album: Album,
}
 
function AlbumComponent ({album}: AlbumProps) { 
   return ( 
    <div className="artist">
      <img src={album.images[1].url} loading="lazy" className="m-auto w-[150px] h-[150px]"/>
      <div className="name font-semibold text-lg">
        <LinkToPage id={album.id} target='_blank' type='album'>{album.name}</LinkToPage>
        <ArtistList className='font-thin text-lg' artists={album.artists}/>
      </div>
      <div className="data">
        <p>{album.release_date}</p>
        <p>{album.album_type}</p>
        {album.album_type === "album" ? <p>{album.total_tracks} faixas</p> : ""}
      </div>
    </div>
   ) 
} 
 
export default AlbumComponent 
 
