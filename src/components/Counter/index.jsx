import style from './style.module.scss';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={style.counterContainer}>
      <button
        onClick={() => {
          if (count === 0) {
            return;
          }
          setCount((Prevcount) => Prevcount - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          setCount((Prevcount) => Prevcount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
