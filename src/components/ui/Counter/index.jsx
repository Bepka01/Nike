import style from './style.module.scss';

const Counter = ({ count, setCount }) => {
  const handlePlusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className={style.counterContainer}>
      <button disabled={count === 0} onClick={handleMinusCount}>
        -
      </button>
      {count}
      <button disabled={count === 15} onClick={handlePlusCount}>
        +
      </button>
    </div>
  );
};
export default Counter;
