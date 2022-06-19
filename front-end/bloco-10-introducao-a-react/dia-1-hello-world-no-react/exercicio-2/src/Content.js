import React from "react";
import './App.css';
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return conteudos.map((element) => {
            return <div className='cards'key={1}><p>O conteúdo é: {element.conteudo}</p>
            <p>Status: {element.status}</p>
            <p>Bloco: {element.bloco}</p></div>
        })
    }
}

export default Content