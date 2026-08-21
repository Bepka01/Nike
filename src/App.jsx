import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import ViewedProducts from './components/ViewedProducts';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <ViewedProducts />
      <Footer />
    </div>
  );
}

export default App;
