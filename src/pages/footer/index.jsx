import { useParams } from 'react-router-dom';
import { footerColumns } from '../../constants';

const FooterPage = () => {
  const { aboutTitle, page } = useParams();

  const currentColumn = footerColumns.find(
    (column) => column.path === aboutTitle
  );

  if (!currentColumn) {
    return <h1>Not found</h1>;
  }

  const currentPage = currentColumn.links.find((link) => link.path === page);

  if (!currentPage) {
    return <h1>Page not found</h1>;
  }

  return (
    <main>
      <h2>{currentColumn.title}</h2>
      <h3>{currentPage.title}</h3>
    </main>
  );
};

export default FooterPage;
