import React from 'react' 
import { Album, Artist, Images, Track } from '../../types/apiTypes'
import ImageNotFound from '../ImageNotFound/ImageNotFound'
 
interface CheckImageProps {
  source: Artist | Album,
  className?: string
}


function CheckImage ({source, className}:CheckImageProps) { 
  console.log(source)
  function checkIfImageExists() {
    if(source.images.length > 0) return <img loading='lazy' className={className} src={source.images[1].url}/>
    else return <ImageNotFound/> 
  }

  return ( 
    <>
      {checkIfImageExists()}
    </> 
  ) 
} 
 
export default CheckImage 
 
