
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Shopping Cart/Componants/Navbar';
import Home from './Shopping Cart/Componants/Home';
import Cart from './Shopping Cart/Componants/Cart'
import { Provider} from 'react-redux'
import store from './Shopping Cart/Store/store';

function App() {
  return (
    <div className='App'>
      <Provider store ={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/' element={<Home />}>
          </Route>
          <Route
            path='cart' element={<Cart />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
