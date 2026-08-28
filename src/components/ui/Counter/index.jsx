import cn from 'classnames';
import style from './style.module.scss';

const MIN_COUNT = 0;
const MAX_COUNT = 15;
const COUNT_STEP = 1;

const Counter = ({ count, setCount, className }) => {
  const increase = () => {
    setCount((prevCount) => prevCount + COUNT_STEP);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - COUNT_STEP);
  };

  return (
    <div className={cn(style.counterContainer, className)}>
      <button disabled={count === MIN_COUNT} onClick={decrease}>
        -
      </button>

      {count}

      <button disabled={count === MAX_COUNT} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
