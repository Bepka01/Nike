import cn from 'classnames';
import style from './style.module.scss';

const Counter = ({
  count,
  increase,
  decrease,
  className,
  minCount,
  maxCount,
}) => {
  return (
    <div className={cn(style.counterContainer, className)}>
      <button disabled={count === minCount} onClick={decrease}>
        -
      </button>

      {count}

      <button disabled={count === maxCount} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
