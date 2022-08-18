import React from 'react' 
 
interface LinkToPageProps {
  type: "artist" | "album" | "track"
  id: string
  children: JSX.Element | string
  className?: string
  target?: string
}

function LinkToPage ({type, id, children, className, target}: LinkToPageProps) { 
  return ( 
    <a href={"/" + type + "/" + id} target={target} className={'hover:underline ' + className }>{children}</a> 
  ) 
} 
 
export default LinkToPage 
 
