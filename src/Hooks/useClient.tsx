import Clients from "../Core/Clients/Client"
import ClientRepositorio from "../Core/ClientR/clientRe"
import  ColecaoClient from "../Backend/Db/ColecaoClient"
import { useState, useEffect } from "react"


export default function Clientes(){

    const repo: ClientRepositorio = new ColecaoClient()
    const [cliente, setCliente] = useState<Clients>(Clients.vazio())
    const [clientes, setClientes] = useState<Clients[]>([])
    const [visivel, setVisivel] = useState<'table' | 'form' >('table')
    useEffect(obeterTodos,[])

  function obeterTodos(){
    repo.obeterTodos().then(clients =>{
      setClientes(clients)
      setVisivel('table')
    })
  }
  function clientSelecionado(client: Clients) {
    setCliente(client)
    setVisivel('form')
    
  }
  async function clientExcluido(client: Clients) {
    await repo.excluir(client)
    obeterTodos()
  }
  
  async function  SalvarClient(client: Clients) {
    repo.salvar(client)
    await obeterTodos()
  }
  function  NovoClient() {
    
    setCliente(Clients.vazio())
    setVisivel('form')

  }

  return{
    clientSelecionado, NovoClient,
    SalvarClient,clientExcluido,
    cliente,clientes,visivel,setVisivel
  }

    
}