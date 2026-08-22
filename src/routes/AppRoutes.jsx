import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import Main from '../pages/main/index';
import Trash from '../pages/trash/index';
import Catalog from '../pages/catalog/index';

import Product from '../components/Product';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.TRASH} element={<Trash />} />
      <Route path="/:category/:subcategory" element={<Catalog />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
    </Routes>
  );
};

export default AppRoutes;
