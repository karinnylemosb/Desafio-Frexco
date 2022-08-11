import {AppBar,Toolbar, IconButton, Typography, Stack, Button, Container  } from "@mui/material"
import React from "react"


function Header(){ 
  return (
    <React.Fragment>
       <AppBar position="static">
        <Container>
        
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Desafio Frexco
          </Typography>
          <Stack direction="row" spacing={2}>
              <Button color="inherit">Home</Button> 
              <Button color="inherit">Carrinho</Button> 
          </Stack>  
        </Toolbar>
        </Container>
       </AppBar> 

    </React.Fragment>
  )
}

export default Header;