import React from 'react';
import ListaDeProdutos from './lista-de-produtos';


function Produto({produto, adicionarProduto}) { 
      return (
        <div>
            <ListaDeProdutos produto={produto} adicionarProduto = {adicionarProduto}/>
        </div>
      )
      }
        
export default Produto;

