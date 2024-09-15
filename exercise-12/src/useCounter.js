import {useState} from 'react';

export const useCounter = (initialVal = 0) => {
    const [count, setCount] = useState(initialVal);

    const increaseCount = () => {
      setCount(count + 1);
    }
  
    const decreaseCount = () => {
      setCount(count - 1);
    }
  
    const resetCount = () => {
      setCount(initialVal);
    }

    return {count, increaseCount, decreaseCount, resetCount}
}