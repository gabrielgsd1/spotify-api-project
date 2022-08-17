import React from 'react' 

interface TitleProps {
  children: JSX.Element | string
}
 
function Title ({children}: TitleProps) { 
  return ( 
    <div className='text-2xl text-[#eee] font-semibold'>{children}</div> 
  ) 
} 
 
export default Title 
 
