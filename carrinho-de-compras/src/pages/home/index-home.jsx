import React, {Fragment}  from 'react'
// useEffect: Controla o efeito colateral da aplicação. Consumir dados é um efeito. 
import Product from "../product/product"
import Header from "../../components/header/header"
import {Container} from "@mui/material"




function Home() {  

  return (
    <Fragment>
      <Header />
      <main style={{ marginTop: "2em" }}>
        <Container>
          <Product />
        </Container>
      </main>

    </Fragment>
  )
}



export default Home;