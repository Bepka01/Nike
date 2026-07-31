import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import Main from '../pages/Main/Main';
import Trash from '../pages/Trash/Trash';
import Catalog from '../pages/Catalog/Catalog';

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
