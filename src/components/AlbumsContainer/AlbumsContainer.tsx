import React from 'react' 
import { useAppSelector } from '../../store'
import AlbumComponent from '../Album/AlbumComponent'
import Item from '../Item/Item'
import ItemSection from '../ItemSection/ItemSection'
import Title from '../Title/Title'
 
function AlbumsContainer () { 

  const albums = useAppSelector(state => state.results.albums)

  return albums && albums?.items.length > 0 ? ( 
    <div className="albums">
      <Title>Álbuns</Title>
      <ItemSection>
        {albums?.items.map((album, i) => {
          return (
            <Item index={i}>
              <AlbumComponent album={album}/>
            </Item>
          )
        })}
      </ItemSection> 
    </div>
  ) : <></>
} 
 
export default AlbumsContainer 
 
