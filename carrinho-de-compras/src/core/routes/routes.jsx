import { Routes , Route, BrowserRouter } from "react-router-dom";
import Home from '../../pages/home/index-home';



function routes () {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default routes;
