function Carrinho() {
  return (
    <div className='itens-carrinho'>

      {/*  Limpando o carrinho
      <div className='limpar-carrinho'>
      <h3>Carrinho de compras</h3>
        {itensCarrinho.length >=1 && (
          <button className='botao-limpar-carrinho' onClick={limparProduto}>Limpar carrinho</button>
        )}
      </div>
      
      {itensCarrinho.length === 0 && (<div className='titulo-carrinho-sem-itens'> Não foi adicionado nenhum produto</div>)}
          
        {/* Itens do carrinho  */}
        {/* <div className='dados-carrinho'> */}
          {/* {itensCarrinho.map((item, key) => { */}
                {/* Produtos do carrinho*/}
                {/* return(
                <div key={(key)} className='lista-itens-carrinho'>
                    <div>
                    <h4>{item.name}</h4>
                    <p>Gênero : {item.genus}</p>
                    <p>Família : {item.family}</p>
                    <p>Ordem : {item.order}</p>
                        <div className='funcoes-itens-carrinho'>
                        <button className='botao-produto' onClick={() => adicionarProduto(item)}>+</button>
                        <button className='botao-produto' onClick={() => removerProduto(item)}>-</button>
                        </div>
                    <p>{item.qty}</p>
                    </div> */}
                {/* Informação nutricional */}
                  {/* <div className='info-itens-carrinho'>
                  <h4>Valores nutricionais</h4>
                      <p>Carboidratos : {item.nutritions.carbohydrates}</p>
                      <p>Proteínas : {item.nutritions.protein}</p>
                      <p>Gordura : {item.nutritions.fat}</p>
                      <p>Calorias : {item.nutritions.calories}</p>
                      <p>Açúcar : {item.nutritions.sugar}</p>
                  </div>
                  
              </div> 
            ) */}
          {/* })} */}
        {/* </div>  */}
    </div>
  )
}

export default Carrinho;