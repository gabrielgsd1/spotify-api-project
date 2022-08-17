import React from 'react' 
import { BsSpotify } from 'react-icons/bs'

interface SpotifyLinkProps {
  link: string
}

function SpotifyLink({ link }: SpotifyLinkProps) { 
  return ( 
    <a 
      href={link} 
      className="bg-[#111] text-[#ddd] font-extralight font-['Rubik',_sans-serif] hover:bg-[#000a11] duration-300 border-[2px] border-[#ccc] w-fit p-3 rounded-3xl flex items-center gap-2" 
      target="_blank"
    >
      Ouvir no Spotify <BsSpotify size={23} color="#00aa00"/>
    </a> 
  ) 
} 
 
export default SpotifyLink 
 
