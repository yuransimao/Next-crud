interface Inputprops{
    type?: 'text' | 'number'
    text: string
    value: any
    somenteLeitura?:boolean
    ClassName?: string
    valorMudou?: (value:any) => void
}

export default function Inputs(props : Inputprops){
    return(
        <div className={`flex flex-col ${props.ClassName}`}>

            <label className='mb-2'>{props.text}</label>
            <input type={props.type ?? 'text'} value={props.value} readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou(e.target.value)}
            className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.somenteLeitura ? ' ' : 'focus:bg-white'}`}
            />
        </div>
    )
}