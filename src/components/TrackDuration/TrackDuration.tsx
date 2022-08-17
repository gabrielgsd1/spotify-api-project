import React from 'react' 
 
interface TrackDurationProps {
  duration: number
  className?: string
}

function formattedDuration(duration: number){
  const minutes = Math.floor(duration / 1000 / 60)
  const seconds = Math.floor(duration / 1000) % 60
  return minutes.toString() + ":" + (seconds < 10 ? "0" + seconds.toString() : seconds.toString())
}

function TrackDuration ({duration, className}:TrackDurationProps) { 
  return ( 
    <p className={className}>{formattedDuration(duration)}</p>
  ) 
} 
 
export default TrackDuration 
 
