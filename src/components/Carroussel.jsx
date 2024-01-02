import React from 'react';
import  {useState} from 'react';
import styles, { layout } from "/styles";
import {ChevronLeft,ChevronRight} from "react-feather"






const Carroussel = ({ children: slides }) => {

  const [curr, setCurr] = useState(0)


  const prev = () => setCurr((curr) => (curr === 1 ? slides.length - 1 : curr - 1  ))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1 ))


  return(
  <div className= { `bg-white relative ${layout.section} `} >
   

    <div className="flex transition-transform ease-out duration-500" style={{ transform:`translateX(-${curr*100}%) ` }}>
     {slides} 
    </div>

    <div class="absolute inset-0 flex items-center justify-between p-4">
<button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
  <ChevronLeft />
</button>

<button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
<ChevronRight />
</button>


    </div>


    <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-gray-800 rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>


  </div>
  )
};

export default Carroussel;








