import React, {useEffect, useState} from 'react';
import ApiServices from '../../core/services/apiServices';
import TabelaHortFruti from "../../components/tables/table"


function Product(){

  const [Produto, setProduto] = useState([]);
  
  useEffect(() => {
      (async () => { await ApiServices.getAll().then(response => setProduto(response.data))})();        
  },[]);


return (
    <TabelaHortFruti row={Produto} />
)      

}

export default Product; 


