import React, { useLayoutEffect } from 'react' 
import { useParams } from 'react-router-dom'
import { getSingleArtist } from '../../features/resultsSlice'
import { useAppDispatch } from '../../store'
 
function SingleArtistPage () { 

  const params = useParams<string>()

  useLayoutEffect(() => {
    (async function() {
      const result = await getSingleArtist(params.id as string)
    })()
  }, [])
  return ( 
    <div>
      <div className="bg-black w-[250px] h-[250px] flex gap-6">
        <div className="text-white">aasfasdf</div>
        <div className="text-white">aasfasdf</div>
        <div className="text-white">aasfasdf</div>
      </div>
    </div> 
  ) 
} 
 
export default SingleArtistPage 
 
