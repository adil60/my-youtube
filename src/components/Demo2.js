import React, { useRef, useState } from 'react'

//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
const Demo2 = () => {
    const [ stateVar , setStateVar ] = useState(0);
    let x = 0;
    const refVar = useRef(0);
    //console.log(refVar.current);

    return (
        <div className='w-96 h-96 m-4 p-4 shadow-lg rounded bg-slate-200 flex flex-col ' >
            <div>
            <button className='bg-green-300 cursor-pointer m-2 p-2'
                onClick={() => {
                    x = x + 1;
                    console.log("x:", x);
                }} >
                Increase</button>
            <span className='m-2 p-2'>x = {x} </span>
            </div>
            <div>
            <button className='bg-green-300 cursor-pointer m-2 p-2'
                onClick={() => {
                    setStateVar(stateVar+1)
                    console.log('stateVar:', stateVar);
                }} >
                Increase</button>
            <span className='m-2 p-2'>State = {stateVar} </span>
            </div>
            <div>
            <button className='bg-green-300 cursor-pointer m-2 p-2'
                onClick={() => {
                    refVar.current = refVar.current+1;
                    console.log('RefVal:', refVar.current);
                }} >
                Increase</button>
            <span className='m-2 p-2'>Ref = {refVar.current} </span>
            </div>
        </div>
    )
}
export default Demo2
