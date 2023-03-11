import Layout from "../Components/Layout/Layout"
import Table from "../Components/Table/table"
import Button from "../Components/Button/button"
import Formulario from "../Components/Formulario/formulario"
import Clients from "../Core/Clients/Client"
export default function Home() {
  
 const clientes =[
   new Clients('Yuran', 20, '1'),
   new Clients('David', 21,'2'),
   new Clients('Panzo', 21, '3'),
   new Clients('Simao', 21, '4')
 ]


 function clientSelecionado(client : Clients){
console.log(client.id)
 }
 function  clientExcluido(client : Clients){
console.log(client.id)
 }

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout title={'Cadastro Simples'}>
        <div className={'flex justify-end'}>
          <Button cor='blue' ClassName='mb-4'>Novo cliente</Button>
        </div>
        <Table clients={clientes} clientSelecionado={clientSelecionado}  clientExcluido={clientExcluido}/>
        <Formulario clients={clientes[0]} />
      </Layout>
    </div>
  )
}
