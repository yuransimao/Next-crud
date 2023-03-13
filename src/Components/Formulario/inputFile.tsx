import { Camera } from "../Icons/icons"
import {  useRef} from "react";

export default function InputFile(){
    const input = useRef<HTMLInputElement>()
    function haldleFile(){
        console.log('test')
    }
    return(
       
        <div className={`flex justify-end `}>
            <div className={`flex flex-col`}>
                <div className={`w-14 h-14 rounded-full bg-slate-600 ` }> 
                <img className={`w-14 h-14 rounded-full` }src={`${Camera}`} alt="camera" />
                </div>
                <input ref={input} className="hidden" type="file" accept="image/*"/>
                <button className={`absolute mt-8 ml-9 text-sky-700`} onAuxClick={haldleFile}>{Camera}</button>
            </div>
            </div>
    )
}