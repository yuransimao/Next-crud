import Clients from "../Clients/Client"

export default interface ClientRepositorio{
   salvar(clientes : Clients) : Promise<Clients>
   excluir(clientes : Clients): Promise<void>
   obeterTodos() : Promise<Clients[]>
}