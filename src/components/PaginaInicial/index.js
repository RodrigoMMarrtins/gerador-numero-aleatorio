import React, {useState} from 'react'
import "./style.css"

function PaginaInicial() {
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(1)
    const gerarNumero = () => {
        setNumeroAleatorio(Math.floor(Math.random() * 100 + 1))
    }
  return (
    <div className="conteudo-centralizado">
        <h3>Numero aleatório:</h3>

        <h1 className="numero-aleatorio">{numeroAleatorio}</h1>

        <div className='area-botao'>
            <label>
                Clique no botão para gerar um numero aleatório
            </label>
            <button onClick={gerarNumero}>Gerar numero</button>
        </div>
        
    </div>
  )
}

export default PaginaInicial