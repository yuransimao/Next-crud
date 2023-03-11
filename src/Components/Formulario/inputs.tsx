interface Inputprops{
    type?: 'text' | 'number'
    text: string
    value: any
    somenteLeitura?:boolean
}

export default function Inputs(props : Inputprops){
    return(
        <div className={`flex flex-col`}>
            <label>{props.text}</label>
            <input type={props.type ?? 'text'} value={props.value} readOnly={props.somenteLeitura}
            className={'border border-purple-500 rounded-lg focus:outline-none'}
            />
        </div>
    )
}