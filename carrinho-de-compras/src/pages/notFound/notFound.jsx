import React, {Fragment}  from 'react'
// useEffect: Controla o efeito colateral da aplicação. Consumir dados é um efeito. 
import Header from "../../components/header/header"
import {Container} from "@mui/material"




function NotFound() {  

  return (
    <Fragment>
      <Header />
      <main style={{ marginTop: "2em" }}>
        <Container>
           <h1 style={{textAlign: "center"}}>Página não encontrada!!!</h1>
        </Container>
      </main>

    </Fragment>
  )
}



export default NotFound;