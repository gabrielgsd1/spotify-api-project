import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ItemProps {
  children: JSX.Element[] | JSX.Element,
  index?: number
}

function Item ({children, index}: ItemProps) { 

  const divRef = useRef<HTMLDivElement| null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const pixels = Math.abs((1 - entry.intersectionRatio) * 35);
        //verifica se o elemento está acima ou abaixo do viewport, e, baseado nisso, a animação é pra cima ou para baixo
        (entry.target as HTMLStyleElement).style.transform = `translateY(${pixels * Math.sign(entry.boundingClientRect.y)}px)`;
        (entry.target as HTMLStyleElement).style.opacity = `${entry.intersectionRatio}`;
        (entry.target as HTMLStyleElement).style.transitionDelay = `${(index || 1)*8}ms`;
      })
    }, {
      threshold: [0.1, 0.3, 0.5, 0.7, 0.85, 1]
    })

    if(divRef.current) observer.observe(divRef.current)

    return () => {
      if(divRef.current) observer.unobserve(divRef.current)
    }
  }, [])

  return ( 
    <motion.div
      ref={divRef}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.08 * (index || 0)}} 
      className='api-item text-center container relative info box-border px-6 text-white flex flex-col items-center text-ellipsis bg-[#111] py-4 rounded-xl hover:bg-[#000] hover:cursor-pointer hover:shadow-lg hover:shadow-black duration-300'
    >
      {children}
    </motion.div> 
  ) 
} 
 
export default Item 
 
