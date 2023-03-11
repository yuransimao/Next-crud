import Clients from "../../Core/Clients/Client"
import { Edit, trash } from "../Icons/icons"

interface propsTable {
    clients: Clients[]
    clientSelecionado?: (client: Clients) => void
    clientExcluido?: (client: Clients) => void
}
export default function Table(props: propsTable) {
    
    const exibirAccoes = props.clientSelecionado || props.clientExcluido
    //Renderizar thead

    function RenderizarCabecario() {
        return (
            <tr >
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Name</th>
                <th className='text-left p-4'>Age</th>
                {exibirAccoes ? <th className='p-4'>Acções</th> : false}
            </tr>
        )
    }

    //Renderizar tbody

    function RenderizarBody() {
        console.log(props.clients)
        return props.clients?.map((clients, index) => {
            return (
                <tr key={clients.id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{clients.id}</td>
                    <td className='text-left p-4'>{clients.name}</td>
                    <td className='text-left p-4'>{clients.age}</td>
                    { exibirAccoes ? renderizarAccoes(clients) : false}
                </tr>
            )
        })

    }

    //Renderizar Acçoes

    function renderizarAccoes(clients: Clients) {
        return (
            <td className={'flex justify-center'}>
                {props.clientSelecionado ? (
                    <button className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`} onClick ={() => props.clientSelecionado?.(clients)}>
                        {Edit}
                    </button>
                ) : false}
                {
                    props.clientExcluido ? (
                        <button className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`} onClick ={() => props. clientExcluido?.(clients)}>
                            {trash}
                            </button>
                    ) : false
                }
            </td>
        )
    }



    return (
        <table className={'w-full rounded-xl overflow-hidden'}>
            <thead className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>{RenderizarCabecario()}</thead>
            <tbody>{RenderizarBody()}</tbody>
        </table>
    )

}