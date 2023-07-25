import './App.css';
import './bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screen/ProductScreen';
import CategoryWithProduct from './screen/CategoryWithProduct';
import LoginScreen from './screen/LoginScreen';
import ProductListScreen from './screen/ProductListScreen';
import ContactScreen from './screen/ContactScreen';
import RegisterScreen from './screen/RegisterScreen';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/category/:id" element={<CategoryWithProduct />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/product" element={<ProductListScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/register" element={<RegisterScreen />} />


          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;