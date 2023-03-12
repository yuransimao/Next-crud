import { useState } from "react"
export default function Visible(){
    const [visivel, setVisivel] = useState<'table' | 'form' >('table')
    const exibirTabela = () => setVisivel('table')
    const exibirForm = () => setVisivel('form')
    return{
        formularioVisivel : visivel === 'form',
        tableVisivel : visivel === 'table',
        exibirTabela, exibirForm
    }
}