import {AppBar,Toolbar, Typography, Stack, Button, Container  } from "@mui/material"
import { NavLink } from "react-router-dom"
import ShopContext from "../../core/context/ShoppingContext"
import React, {useContext} from "react"


function Header(){   
  const {cart} = useContext(ShopContext);
  return (
    <React.Fragment>
       <AppBar position="static">
        <Container>
        
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Desafio Frexco
          </Typography>
          <Stack direction="row" spacing={2}>            
              <NavLink to="/" style={{ textDecoration: 'none' }} ><Button style={{color: "white"}} >Home</Button></NavLink> 
              <NavLink to="/cart" style={{ textDecoration: 'none' }} ><Button style={{color: "white"}} >{`Carrinho (${cart.reduce((count, curItem) => {return count + curItem.quantity;}, 0)})`}</Button></NavLink> 
          </Stack>            
        </Toolbar>
        </Container>
       </AppBar> 

    </React.Fragment>
  )
}

export default Header;