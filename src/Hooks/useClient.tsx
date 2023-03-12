import Clients from "../Core/Clients/Client"
import ClientRepositorio from "../Core/ClientR/clientRe"
import  ColecaoClient from "../Backend/Db/ColecaoClient"
import { useState, useEffect } from "react"

import Visible from "./useVisivel"


export default function Clientes(){

    const repo: ClientRepositorio = new ColecaoClient()
    const [cliente, setCliente] = useState<Clients>(Clients.vazio())
    const [clientes, setClientes] = useState<Clients[]>([])
    
    const {exibirTabela, exibirForm, tableVisivel} = Visible()
    useEffect(obeterTodos,[])

  function obeterTodos(){
    repo.obeterTodos().then(clients =>{
      setClientes(clients)
      exibirTabela()
    })
  }
  function clientSelecionado(client: Clients) {
    setCliente(client)
    exibirForm()
    
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
    exibirForm()

  }

  return{
    clientSelecionado, NovoClient,
    SalvarClient,clientExcluido,
    cliente,clientes,tableVisivel,exibirTabela

  }

    
}