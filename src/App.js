
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";

import Menu from "./components/menu";
import LayOut from "./components/layout/layout";
import FormCotizacion from "./components/pages/formCotizacion";
import CreditoAutomotriz from "./components/pages/creditoAutomotriz";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LayOut/>}>
          <Route index element ={<Menu/>} />
        </Route>
        <Route path='/formCotizacion' element={<LayOut/>}>
          <Route index element ={<FormCotizacion/>} />
        </Route>
        <Route path='/creditoAutomotriz' element={<LayOut/>}>
          <Route index element ={<CreditoAutomotriz/>} />
        </Route>
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
