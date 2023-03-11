import Clients from "../../Core/Clients/Client"
interface propsTable {
    clients : Clients[]
}
export default function Table ( props : propsTable){

    function RenderizarCabecario(){
        return(
            <tr>
            <th>Código</th>
            <th>Name</th>
            <th>age</th>
        </tr>
        )
    }
    function RenderizarBody(){
        console.log(props.clients)
        return props.clients?.map((clients, index) =>{
            return(
                <tr key={clients.id}>
                    <td>{clients.id}</td>
                    <td>{clients.name}</td>
                    <td>{clients.age}</td>
                </tr>
            )
        })
        
    }
    return(
        <table>
           <thead>{RenderizarCabecario()}</thead>
           <tbody>{RenderizarBody()}</tbody>
        </table>
    )

}