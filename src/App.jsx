import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import ViewedProducts from './components/ViewedProducts';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Product />
      <ViewedProducts />
      <Footer />
    </div>
  );
}

export default App;
