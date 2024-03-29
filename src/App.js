import {Routes, Route} from 'react-router-dom';

import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


function App() {
  return(
    <Routes>
     <Route path='/' element={<Navigation></Navigation>}>
       <Route index element={<Home></Home>}></Route>
       <Route path='shop/*' element={<Shop></Shop>}></Route>
       <Route path='auth' element={<Authentication></Authentication>}></Route>
       <Route path='checkout' element={<Checkout></Checkout>}></Route>
     </Route>
    </Routes>
  ) ;
}

export default App;
