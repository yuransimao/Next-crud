interface Buttonprops{
    cor?:'blue' | 'green' | 'gray'
    children:any
    ClassName?: string
}
export default function Button(props : Buttonprops){

    const cor = props.cor ?? 'gray'
    return(
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md ${props.ClassName}
        `}>{props.children}</button>
    )
}