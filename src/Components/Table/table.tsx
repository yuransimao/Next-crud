import Clients from "../../Core/Clients/Client"
interface propsTable {
    clients : Clients[]
}
export default function Table ( props : propsTable){

    function RenderizarCabecario(){
        return(
            <tr >
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Name</th>
            <th className='text-left p-4'>Age</th>
        </tr>
        )
    }
    function RenderizarBody(){
        console.log(props.clients)
        return props.clients?.map((clients, index) =>{
            return(
                <tr key={clients.id}>
                    <td className='text-left p-4'>{clients.id}</td>
                    <td className='text-left p-4'>{clients.name}</td>
                    <td className='text-left p-4'>{clients.age}</td>
                </tr>
            )
        })
        
    }
    return(
        <table className={'w-full rounded-xl overflow-hidden'}>
           <thead className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>{RenderizarCabecario()}</thead>
           <tbody>{RenderizarBody()}</tbody>
        </table>
    )

}