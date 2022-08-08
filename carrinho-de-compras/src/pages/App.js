import { useState } from 'react';
import Menu from '../pages/Home/menu';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Produto from '../pages/Home/produto'

import Carrinho from '../pages/Home/carrinho';



function App({produto}) {
  const [itensCarrinho, setitensCarrinho] = useState([]);

      const adicionarProduto = (prod) => {
        const produtoExiste = itensCarrinho.find((item) => item.id === prod.id);
            if(produtoExiste){
            setitensCarrinho(itensCarrinho.map((item) => item.id === prod.id ? {...produtoExiste, qty: produtoExiste.qty + 1}: item))
            } else {
            setitensCarrinho([...itensCarrinho, {...prod, qty: 1}])
            }
      }

      const removerProduto = (prod) => {
        const produtoExiste = itensCarrinho.find((item) => item.id === prod.id);
        if(produtoExiste.qty === 1){
          setitensCarrinho(itensCarrinho.filter((item) => item.id !== prod.id))
        } else {
          setitensCarrinho(itensCarrinho.map((item) => item.id === produto.id ? {...produtoExiste, qty: produtoExiste.qty - 1} : item))
        }
      }

      const limparProduto = () => {
        setitensCarrinho([]);
      }

  return (
    <Router>
      <>
        <div className="app">
        <Menu itensCarrinho={itensCarrinho}/>
            <div className='container'>
            {/* routes  */}           
              <Routes>
                <Route path ='/' exact element={<Produto produto={produto} adicionarProduto={adicionarProduto}/>} />
                <Route path ='/carrinho' exact element={<Carrinho itensCarrinho={itensCarrinho} adicionarProduto={adicionarProduto} removerProduto={removerProduto} limparProduto={limparProduto}/>} />
              </Routes> 
            </div>

          </div> 
      </>
    </Router>
  );
}

export default App;
