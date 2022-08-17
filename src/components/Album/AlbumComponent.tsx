import React from 'react' 
import { Album } from '../../types/apiTypes'

interface AlbumProps{
  album: Album,
}
 
function AlbumComponent ({album}: AlbumProps) { 
   return ( 
    <div className="artist">
      <img src={album.images[1].url} loading="lazy" className="m-auto w-[150px] h-[150px]"/>
      <div className="name font-semibold text-lg">
        {album.name}
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
 
