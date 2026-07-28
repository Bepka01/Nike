import Header from './components/Header';
import Trash from './pages/Trash/Trash';
import Main from './pages/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/trash" element={<Trash />} />
        <Route path="/" element={<Main />} />
        <Route path="/:category/:subcategory" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
