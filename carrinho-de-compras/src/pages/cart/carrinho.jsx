import React, {useContext, Fragment, useEffect, useState} from "react";
import ShopContext from "../../core/context/ShoppingContext"
import Header from "../../components/header/header"
import {Container, IconButton} from "@mui/material"
import TabelaHortifruti from "../../components/tables/table";
import { RemoveShoppingCart } from "@mui/icons-material";


function Carrinho() {

  const {cart, removeProductFromCart} = useContext(ShopContext);
  const [tableRow, setTableRow] = useState([]);


  useEffect(() => {
    const items = [];
    cart.map((item, index) => 
      items.push([
        {
          item: item.name,      
        },
        {
          item: item.quantity,
          align: "right"
        },        
       {
          item:  <IconButton key={`itemRemoveClick${index}`} onClick={removeProductFromCart.bind(
                    this,
                    item.id
                  )} color="error" aria-label="remove to shopping cart"><RemoveShoppingCart /></IconButton>,
          align: "center"
       }
       ])
    )
    setTableRow(items)
},[cart, removeProductFromCart]);
  
  const tableHeaders = [
    {
      name: "Nome",      
    },
    {
      name: "Quantidade",
      align: "right"
    },
    {
      name: "Ações",
      align: "center"
    },    
  ]
  


  return (
    <Fragment>
      <Header />
      <main style={{ marginTop: "2em" }}>
        <Container>
          <TabelaHortifruti headers={tableHeaders} rows={tableRow} count />  
        </Container>
      </main>

    </Fragment>   
  )
}

export default Carrinho;