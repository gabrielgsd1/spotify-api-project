import React from 'react' 

interface TitleProps {
  children: JSX.Element | string
  className?: string
}
 
function Title ({children, className}: TitleProps) { 
  return ( 
    <div className={'text-2xl text-[#eee] font-semibold ' + className}>{children}</div> 
  ) 
} 
 
export default Title 
 
