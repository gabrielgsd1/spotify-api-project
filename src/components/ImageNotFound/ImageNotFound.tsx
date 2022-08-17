import React from 'react' 
import {AiFillQuestionCircle} from "react-icons/ai"
 
function ImageNotFound () { 
  return ( 
     <div className='w-[150px] h-[150px] m-auto bg-black relative'>
        <AiFillQuestionCircle size={50} color="white" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
     </div> 
  ) 
} 
 
export default ImageNotFound 
 
