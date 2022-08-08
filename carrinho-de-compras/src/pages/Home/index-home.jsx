import { React } from 'react'
import { useState, useEffect } from 'react'// useState: Controla o estado da aplicação
// useEffect: Controla o efeito colateral da aplicação. Consumir dados é um efeito. 
import App from '../App';
import api from '../../services/apiServices'


function Home() {

    const [Produto, setProduto] = useState([]);
  
    useEffect(() => {
      (async () => { await api.getAll().then(response => setProduto(response.data))})();        
      },[]);

    return (
        <h1>
            <App produto={Produto}/>
        </h1>
    )
}



export default Home;
