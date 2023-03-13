import { Camera } from "../Icons/icons"
import {  useRef} from "react";


interface Inputprops{
    valorMudou?: (value:any) => void
    img: any
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
                {props.img ? (<img className={`w-14 h-14 rounded-full` }src={URL.createObjectURL(props.img)} alt="camera" />) : <img src={''} alt='camera'/>}
                </div>
                <input ref={input} name='img' className="hidden" type="file" accept="image/*" onChange={e => props.valorMudou(e.target.files[0]) }/>
                <button className={`absolute mt-8 ml-9 text-sky-700`} onClick={loadingFile}>{Camera}</button>
            </div>
            </div>
    )
}