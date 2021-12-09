import {useState, useEffect} from 'react';
/**
 * 
 * @param {number} value.count 
 * @returns 
 */
const  useClicker= (value)=>{
  const [count, setCount] = useState(value);
  useEffect(() => {
    const clickHandler=()=>{
      setCount(count=>count+1);
    } 
    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler)
    };
  }, []);
  return count;
};

export default useClicker;