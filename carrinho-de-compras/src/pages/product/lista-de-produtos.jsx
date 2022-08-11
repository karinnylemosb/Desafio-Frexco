import React from 'react'


function ListaDeProdutos({produto, acaoProduto}) { 
    

    return (
        <div className='lista-produto'>
            <h3 className='titulo-produto' color='white'> Produtos </h3>
            <div className='resultado-dados'>
                {produto.map((value) => {
                    return (
                        <div className='item-resultado-dados' key={(value.id)}>
                           <h3>{value.name}</h3>
                           <button className="adicionar-botao-produto" onClick={() => acaoProduto(value)}> Adicionar ao carrinho </button>
                         </div>
                    )
                })}
            </div>
        </div>
    )

    
}


export default ListaDeProdutos;