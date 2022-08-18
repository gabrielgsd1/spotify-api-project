import React, { useEffect, useState } from 'react' 
import { Track } from '../../types/apiTypes';
 
interface SmallTrackWithPlayerContainerProps {
  children: JSX.Element[] | JSX.Element
}


function SmallTracks ({children}:SmallTrackWithPlayerContainerProps) { 
  
  const [recommendations, setRecommendations] = useState<Track[]>([])

  useEffect(() => {
    (async function() {
      setRecommendations(recommendations)
    })()
  })
  
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-auto'>
      {children}
    </div> 
  ) 
} 
 
export default SmallTracks
 
