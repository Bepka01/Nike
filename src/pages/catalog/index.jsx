import { useParams } from 'react-router-dom';
import { menu } from '../../constants';

const Catalog = () => {
  const { category, subcategory } = useParams();
  const curCategory = menu.find((item) => {
    return item.path === category;
  });

  if (!curCategory) {
    return <h1>not found</h1>;
  }

  const curSubcategory = curCategory.items.find(
    (item) => item.path === subcategory
  );

  if (!curSubcategory) {
    return <h1>Subcategory not found</h1>;
  }

  return (
    <main>
      <h2>{curCategory.title}</h2>
      <h3>{curSubcategory.title}</h3>
    </main>
  );
};

export default Catalog;
