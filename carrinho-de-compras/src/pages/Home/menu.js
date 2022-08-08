import React from 'react';
import { Link } from 'react-router-dom';



function Menu({itensCarrinho}) {
    return (
        <nav className='Menu'>
            <h1> Frexco </h1>
            <div className='Menu-links'>
                        <Link to='/'> Produtos </Link>
                        <Link to='./carrinho.js'>
                            <i className='carrinho-icone'></i>
                        </Link>
                <span className='carrinho-length'> 
                    {itensCarrinho.length === 0 ? "" : itensCarrinho.length}
                </span>
            </div>
        </nav>
    )
}

export default Menu;
