import Clients from "../../Core/Clients/Client"
import Inputs from "./inputs"
import Button from '../Button/button'
import {useState} from "react"
interface FormularioProps{
    clients: Clients
}

export default function Formulario(props : FormularioProps){
    const id = props.clients?.id
    const [name, setName] = useState( props.clients?.name ?? '')
    const [Age, setAge] = useState( props.clients?.age ?? 0)
    return(
        <div>
        {id ? (<Inputs ClassName='mb-5' text='Codigo' value={id} somenteLeitura/> ):false}

        <Inputs text='Name' ClassName='mb-5' value={name} valorMudou={setName} />
        <Inputs text='Age' type='number' value={Age} valorMudou={setAge} />

        <div className={'flex justify-end mt-7'}>

            <Button cor='blue' ClassName='mr-2'>
                {id ? 'Altera' : 'Salvar'}
            </Button>
            <Button cor='gray'>
                Cancelar
            </Button>
        </div>
        </div>
    )
}