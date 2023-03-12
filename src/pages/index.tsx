import Layout from "../Components/Layout/Layout"
import Table from "../Components/Table/table"
import Button from "../Components/Button/button"
import Formulario from "../Components/Formulario/formulario"

import Clientes from "../Hooks/useClient"
 

export default function Home() {

  const{ clientSelecionado, NovoClient,
    SalvarClient,clientExcluido,
    cliente,clientes,
    tableVisivel, exibirTabela}=Clientes()
 

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-700 to-blue-800 text-white`}>
      <Layout title={'Cadastro Simples'}>
      {tableVisivel  ? (
        <>
         <div className={'flex justify-end'}>
         <Button Onclick={NovoClient}cor='blue' ClassName='mb-4'>Novo cliente</Button>
       </div>
       <Table clients={clientes} clientSelecionado={clientSelecionado} clientExcluido={clientExcluido} />
       </>
      ): <Formulario  ClientMudo={SalvarClient} Cancelado={() => exibirTabela()} clients={cliente} />}
       
        
      </Layout>
    </div>
  )
}
