import { Camera } from "../Icons/icons"
import {  useRef} from "react";


interface Inputprops{
    valorMudou?: (value:any) => void
}
export default function InputFile(props: Inputprops){

    const input = useRef<HTMLInputElement>()

    const loadingFile = ()=>{
        input.current.click()
    }

    return(
       
        <div className={`flex justify-end `}>
            <div className={`flex flex-col`}>
                <div className={`w-14 h-14 rounded-full bg-slate-600 ` }> 
                <img className={`w-14 h-14 rounded-full` }src={`${Camera}`} alt="camera" />
                </div>
                <input ref={input} className="hidden" type="file" accept="image/*" onChange={e => props.valorMudou(e.target) }/>
                <button className={`absolute mt-8 ml-9 text-sky-700`} onClick={loadingFile}>{Camera}</button>
            </div>
            </div>
    )
}