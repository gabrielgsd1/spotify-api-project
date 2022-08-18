import { motion } from 'framer-motion'
import React from 'react' 

interface ShowUpAnimationProps {
  className?: string
  i?: number
  children: JSX.Element[]
}

function ShowUpAnimation ({className, i, children}:ShowUpAnimationProps) { 
  return ( 
    <motion.div
      className={className}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.1 * (i || 1)}} 
    >
      {children}
    </motion.div> 
  ) 
} 
 
export default ShowUpAnimation 
 
