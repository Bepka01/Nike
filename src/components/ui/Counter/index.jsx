import cn from 'classnames';
import style from './style.module.scss';

const Counter = ({ count, setCount, className }) => {
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={cn(style.counterContainer, className)}>
      <button disabled={count === 0} onClick={decrease}>
        -
      </button>

      {count}

      <button disabled={count === 15} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
