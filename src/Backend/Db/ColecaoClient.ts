import firebase from "../firebase/config"
import Clients from "../../Core/Clients/Client"
import ClientRepositorio from "../../Core/ClientR/clientRe"


export default class ColecaoClient implements ClientRepositorio{

    #conversor ={
        toFirestore(clientes : Clients){
            return{
                name : clientes.name,
                age: clientes.age 
            }
        },
        fromFirestore(snapshot : firebase.firestore.QueryDocumentSnapshot, options : firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Clients(dados.name,  dados.age , snapshot.id)

        }
    }
    async salvar(clientes : Clients): Promise<Clients>{

        if(clientes?.id){
            await this.#colecao().doc(clientes.id).set(clientes)
            return clientes 
        }
        else{
            const dRef = await this.#colecao().add(clientes)
            const doc = await dRef.get()
            return doc.data()
        }
        
    }

    async excluir(client : Clients): Promise<void>{
        
        return this.#colecao().doc(client.id).delete()
        
    }
    async obterTodos(): Promise<Clients[]> {
        const query = await this.#colecao().get()
        return query.docs.map( doc => doc.data()) ?? []
    }

   #colecao(){
        return firebase.firestore().collection('Clients').withConverter(this.#conversor)
   }
}