import Layout from "../Components/Layout/Layout"
import Table from "../Components/Table/table"
import Button from "../Components/Button/button"
import Formulario from "../Components/Formulario/formulario"
import Clients from "../Core/Clients/Client"
import ClientRepositorio from "../Core/ClientR/clientRe"
import  ColecaoClient from "../Backend/Db/ColecaoClient"
 
import { useState, useEffect } from "react"

export default function Home() {

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

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout title={'Cadastro Simples'}>
      {visivel === 'table' ? (
        <>
         <div className={'flex justify-end'}>
         <Button Onclick={NovoClient}cor='blue' ClassName='mb-4'>Novo cliente</Button>
       </div>
       <Table clients={clientes} clientSelecionado={clientSelecionado} clientExcluido={clientExcluido} />
       </>
      ): <Formulario  ClientMudo={SalvarClient} Cancelado={() => setVisivel('table')} clients={cliente} />}
       
        
      </Layout>
    </div>
  )
}
