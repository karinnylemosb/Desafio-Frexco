import { Routes , Route, BrowserRouter } from "react-router-dom";
import Home from '../../pages/home/index-home';
import Cart from '../../pages/cart/carrinho';
import NotFound from '../../pages/notFound/notFound';



function routes () {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/cart" element={<Cart />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default routes;
