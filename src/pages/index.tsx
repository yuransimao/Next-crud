import Layout from "../Components/Layout/Layout"
import Table from "../Components/Table/table"
import Client from ".."
export default function Home() {
  
 

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout title={'Cadastro Simples'}>
        <Table ></Table>
      </Layout>
    </div>
  )
}
