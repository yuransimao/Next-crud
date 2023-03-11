import Layout from "../Components/Layout/Layout"
import Table from "../Components/Table/table"
import Clients from "../Core/Clients/Client"
export default function Home() {
  
 const clientes =[
   new Clients('Yuran', 20, '1'),
   new Clients('David', 21,'2'),
   new Clients('Panzo', 21, '3'),
   new Clients('Simao', 21, '4')
 ]

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout title={'Cadastro Simples'}>
        <Table clients={clientes} />
      </Layout>
    </div>
  )
}
