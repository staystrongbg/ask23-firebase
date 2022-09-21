import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useSearchOnSubmit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    e.target[0].value = '';
    router.replace('/');
  };

  const kbEvents = () => {
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setSearchTerm('');
    });
  };
  useEffect(() => {
    kbEvents();

    return () => window.removeEventListener('keydown', kbEvents);
  }, []);

  return { searchTerm, setSearchTerm, handleSearch, kbEvents };
};

export default useSearchOnSubmit;
