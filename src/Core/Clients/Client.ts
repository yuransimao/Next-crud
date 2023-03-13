export default class Clients {
    #id : string
    #name : string
    #age : number 
    #img: string
    
    constructor(name: string, age: number, img:string, id : string = null){
        this.#id = id
        this.#name = name
        this.#age = age 
        this.#img = img
    }

    static vazio(){
        return new Clients('', 0, '')
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
    get img (){
        return this.#img
    }
} 