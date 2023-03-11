interface Inputprops{
    type: 'text' | 'number'
    text: string
    value: number
}

export default function Inputs(props : Inputprops){
    return(
        <div>
            <label>{props.text}</label>
            <input type={`${props.type ?? 'text'}`}/>
        </div>
    )
}