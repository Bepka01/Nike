import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import ViewedProducts from './components/ViewedProducts';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <ProductGallery />
      <ViewedProducts />
      <Footer />
    </div>
  );
}

export default App;
