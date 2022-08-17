import React from 'react' 
import { useAppSelector } from '../../store'
import Item from '../Item/Item'
import ItemSection from '../ItemSection/ItemSection'
import Title from '../Title/Title'
import TrackComponent from '../Track/TrackComponent'
import { MdExplicit } from 'react-icons/md'


function TracksContainer () { 
  const tracks = useAppSelector(state => state.results.tracks)

  const Tracks = (
    <div className='tracks'>
      <Title>Músicas</Title>
      <ItemSection>
        {tracks?.items.map((track, i) => {
          return (
            <Item key={track.id} index={i}>  
              <TrackComponent track={track} />
            </Item>
          )
        })}
      </ItemSection>
    </div>
  )

  if(tracks && tracks?.items.length > 0) return Tracks
  else return <></>
} 
 
export default TracksContainer 
 
