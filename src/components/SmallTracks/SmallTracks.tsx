import React, { useEffect, useState } from 'react' 
import { Track } from '../../types/apiTypes';
 
interface SmallTrackWithPlayerContainerProps {
  children: JSX.Element[]
}


function SmallTrack ({children}:SmallTrackWithPlayerContainerProps) { 
  
  const [recommendations, setRecommendations] = useState<Track[]>([])

  useEffect(() => {
    (async function() {
      setRecommendations(recommendations)
    })()
  })
  
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] md:w-[90%] m-auto'>
      {children}
    </div> 
  ) 
} 
 
export default SmallTrack 
 
