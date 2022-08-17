import React, { FormEvent, useEffect, useRef, useState } from 'react' 
import { useAppDispatch } from '../../store';
import { searchInAPI } from '../../features/resultsSlice';
import { BiSearchAlt2 } from "react-icons/bi"
import { IoMdArrowDropdown } from 'react-icons/io'

function Form () {
  const [text, setText] = useState<string>("");
  
  const form = useRef<null |HTMLFormElement>(null)

  const optionsRef = useRef<null | HTMLDivElement>(null)

  const dispatch = useAppDispatch()

	const [selectedOption, setSelectedOption] = useState("Todas")

  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if(!optionsRef.current?.contains(e.target as Node)) setShowOptions(false) 
    })
    dispatch(searchInAPI("https://api.spotify.com/v1/search?q=natiruts&limit=10&type=track"))
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    //@ts-ignore
    const searchResult = dispatch(searchInAPI(`https://api.spotify.com/v1/search?q=${text}&limit=10&type=track,album,artist`))
  }

  function handleOptions(){
    setShowOptions(!showOptions)
  }

  function handleSelectedOption(e: any){
    setSelectedOption(e.target.value)
  }  
  return ( 
    <form onSubmit={handleSubmit} ref={form} className="z-10 flex flex-col justify-center items-center">
      <div className="form-data gap-4">
     	  {/* <div ref={optionsRef} className="z-10 flex items-center border-gray-900 border-2 selection relative px-4 hover:shadow-xl duration-300 bg-slate-100"
         onClick={handleOptions}> 
			  	<div className="selectedOption flex justify-around items-center">{selectedOption} <IoMdArrowDropdown/></div>
			  	{showOptions ? <div className="options absolute left-0 top-full w-full overflow-hidden box-border">
			  		{Object.keys(options2).map((option) => {
			  			return (
                <div onClick={handleSelectedOption} key={option} className='cursor-pointer bg-sky-900 p-2 text-center text-white'>
                  {option}
                </div>
              )
			  		})}
			  	</div> : <></>
          } 
		 	  </div> */}
        <div className="input flex">
    	    <input type="text" value={text} autoComplete="off" spellCheck="false" onChange={(e) => setText(e.target.value)} className='w-full p-2 rounded-l-lg text-[#ddd] bg-white/20 outline-none duration-200 text-lg font-["Rubik",_sans-serif]'/>
		 	    <button type="submit" className='hover:brightness-[85%] duration-200 rounded-r px-5 py-2 bg-orange-400' onClick={handleSubmit}><BiSearchAlt2 size={22}/></button>
        </div>
      </div>
   </form>
  ) 
} 
 
export default Form 
 
