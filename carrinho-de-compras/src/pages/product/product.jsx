import React, {useEffect, useState, useContext} from 'react';
import ApiServices from '../../core/services/apiServices';
import TabelaHortFruti from "../../components/tables/table"
import ShopContext from "../../core/context/ShoppingContext"
import { IconButton } from '@mui/material';
import {AddShoppingCart} from "@mui/icons-material"



function Product(){
  const {addProductToCart} = useContext(ShopContext);
  const [Produto, setProduto] = useState([]);
  const [tableRow, setTableRow] = useState([]);
  
  
  useEffect(() => {
      (async () => { await ApiServices.getAll().then(response => setProduto(response.data))})();        
  },[]);

  useEffect(() => {    
    const items = [];
    Produto.map((item, index) => 
      items.push([
        {
          item: item.name,
          component:"th",
          scope:"row"
        },
        {
          item: item.nutritions.calories,
          align: "right"
        },
        {
          item: item.nutritions.fat,
          align: "right"
        } , 
        {
          item: item.nutritions.carbohydrates,
          align: "right"
        },
       {
          item:  item.nutritions.protein,
          align: "right"
       },
       {
          item:  <IconButton key={`itemClick${index}`} onClick={addProductToCart.bind(this, item)} color="success" aria-label="add to shopping cart"><AddShoppingCart /></IconButton>,
          align: "center"
       }
       ])
    )
    setTableRow(items)
  }, [Produto, addProductToCart]);  

  const tableHeaders = [
    {
      name: "Dessert (100g serving)",      
    },
    {
      name: "Calories",
      align: "right"
    },
    {
      name: "Fat",
      align: "right"
    },
    {
      name: "Carbs",
      align: "right"
    },
    {
      name: "Protein",
      align: "right"
    },
    {
      name: "Actions",
      align: "center"
    },
  ]


return ( 
    
    <TabelaHortFruti headers={tableHeaders} rows={tableRow} count />  
)      

}

export default Product; 


