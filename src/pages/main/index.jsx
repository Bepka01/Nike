import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h1>Главная страница</h1>
      <Link to="/product">
        <button>К товару</button>
      </Link>
    </>
  );
};

export default Main;
