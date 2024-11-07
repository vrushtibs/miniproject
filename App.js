import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import cameras_banner from './Components/Assets/cameras_banner.jpg';
import speakers_banner from './Components/Assets/speakers_banner.jpg'
import headphones_banner from './Components/Assets/headphones_banner.jpg'
import PlaceOrder from './Pages/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path ='/' element={<Shop/>}/>
          <Route path ='/cameras' element={<ShopCategory banner={cameras_banner} category="cameras"/>}/>
          <Route path ='/headphones' element={<ShopCategory banner={headphones_banner} category="headphones"/>}/>
          <Route path ='/speakers' element={<ShopCategory banner={speakers_banner} category="speakers"/>}/>
          <Route path='product' element={<Product/>}>
            <Route path =':productId' element={<Product/>}/>
          </Route>
          <Route path ='/cart' element={<Cart/>}/>
          <Route path ='/login' element={<LoginSignup/>}/>
          <Route path='/placeorder' element={<PlaceOrder/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
