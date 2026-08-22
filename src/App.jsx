import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import ViewedProducts from './components/ViewedProducts';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <ProductGallery />
      <ProductInfo />
      <ViewedProducts />
      <Footer />
    </div>
  );
}

export default App;
