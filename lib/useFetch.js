import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase-config';

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const fetchData = async () => {
    const proizvodiCollections = collection(db, 'products');
    const response = await getDocs(proizvodiCollections);
    const data = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(data);
    setIsLoading(false);
    setIsError('');
  };
  fetchData();

  return { products, setProducts, loading, isError };
};
export default useFetch;
