import React from 'react';
import { Link } from 'react-router-dom';
import TabelaHortifruti from '../tables/table.jsx'



function Menu({itensCarrinho, produtos}) {
    return (
        <nav className='Menu'>
            <h1> Frexco </h1>
                <div className='Menu-links'>
                            <Link to='/'> Produtos </Link>
                            <Link to='../pages/cart/carrinho.js'>
                                <i className='carrinho-icone'></i>
                            </Link>
                    <span className='carrinho-length'> 
                        {itensCarrinho.length === 0 ? "" : itensCarrinho.length}
                    </span>
                </div>

                <div className='Tabela-hortifruti'>
                <TabelaHortifruti row={produtos} ></TabelaHortifruti></div>        

        </nav>

    )
}


export default Menu;