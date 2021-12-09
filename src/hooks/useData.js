//8.12.21 
import {useState, useEffect} from 'react';

export default function useData(getData){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    getData()
    .then((data)=>setData(data))
    .catch((err)=>setError(err))
    .finally(()=>setIsLoad(false))
  }, []);
  return {
    data, error, isLoad
  }
}