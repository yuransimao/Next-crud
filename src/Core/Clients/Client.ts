export default class Clients {
    #id : string
    #name : string
    #age : number 
    
    constructor(name: string, age: number, id : string = null){
        this.#id = id
        this.#name = name
        this.#age = age 
    }

    static vazio(){
        return new Clients('', 0)
    }

    get id (){
        return this.#id
    }
    
    get name (){
        return this.#name
    }
    
    get age (){
        return this.#age
    }
} 