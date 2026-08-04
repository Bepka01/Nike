import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import Main from '../pages/main';
import Trash from '../pages/trash';
import Catalog from '../pages/catalog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.TRASH} element={<Trash />} />
      <Route path="/:category/:subcategory" element={<Catalog />} />
    </Routes>
  );
};

export default AppRoutes;
