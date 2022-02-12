
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";

import Menu from "./components/menu";
import LayOut from "./components/layout/layout";
import FormCotizacion from "./components/formCotizacion";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Menu />} >
        </Route>

        <Route path='/formCotizacion' element={<LayOut/>}>
          <Route index element ={<FormCotizacion/>} />
        </Route>
        
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
