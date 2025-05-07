import React, { useMemo, useState } from 'react'
import { PrimeMover } from '../utils/helper';

const Demo = () => {
//UseMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const [ num, setNum] = useState(0);
const [ isDark , setIsDark] = useState(false);
console.log("Rendering");


const nthPrime = useMemo(() =>PrimeMover(num),[num]  );  

  return (
    <div className={'w-96 h-96 m-4 p-4 shadow-lg rounded'+ (isDark ? "bg-slate-950 text-white" :" bg-slate-200 text-black")  }>
        <button className='m-2 p-2 border border-black'
        onClick={()=> {setIsDark(!isDark)} }  >Toggle</button>
        <input className='m-2 p-2'
        type='tel' value={num} onChange={(e) => setNum(e.target.value) } />
        <p>{nthPrime} </p>
    </div>
  )
}

export default Demo
