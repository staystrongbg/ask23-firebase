import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSearchOnSubmit from './lib/useSearchOnSubmit';
import useFetch from './lib/useFetch';
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const router = useRouter();
  const links = [
    { href: '/', name: 'почетна' },
    { href: '/brendovi', name: 'брендови' },
    { href: '/o-nama', name: 'о нама' },
    { href: '/kontakt', name: 'контакт' },
  ];

  const { searchTerm, setSearchTerm, handleSearch } = useSearchOnSubmit();
  //glavni stejt
  const { products } = useFetch();
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset !== 0);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [isActive, setIsActive] = useState(0);

  const [produkti, setProdukti] = useState([]);

  const [searchProducts, setSearchProducts] = useState([]); // state for searchInput only
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setSearchProducts(
      products.filter(
        (o) =>
          o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          o.tip.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const [showTitles, setShowTitles] = useState(false);
  const [showfilters, setShowFilters] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [tip, setTip] = useState(products.map((tip) => tip.tip));
  const [titles] = useState([...new Set(products.map((v) => v.title)), 'све']);
  const [vrstaZivotinje, setVrstaZivotinje] = useState([]);
  const [items, setItems] = useState([]);
  const [vrsteProizvoda, setVrsteProizvoda] = useState([]);
  //id page state

  //trenutno na akciji
  const [trenutnaAkcija] = useState({
    tekst: `ПОПУСТ НА КОЛИЧИНУ! 10% попуста за сваки џак хране.`,
  });

  // useEffect(() => {
  //   setItems(products);
  // }, [products]);

  const [proizvodiKorpa, setProizvodiKorpa] = useState([]);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath, router.pathname]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const removeItemFromCart = (id) => {
    setProizvodiKorpa(proizvodiKorpa.filter((item) => item._id.$oid !== id));
    // localStorage.removeItem('korpa');
  };

  //shake cart animation
  const [shake, setShake] = useState(false);

  const shakeThatCart = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  };

  const [pagination, setPagination] = useState({ page: 1, perPage: 16 });

  // input number of items to add to cart
  const [kolicinaInput, setKolicinaInput] = useState(1);

  const dodajProizvodUKorpu = (product) => {
    const tempProduct = { ...product, kolicina: kolicinaInput };
    add(proizvodiKorpa, tempProduct);
    setKolicinaInput(1);
    shakeThatCart();
    // localStorage.setItem('korpa', JSON.stringify(tempProduct));
    //mora da bude push u arr ovako ako samo setujes on gazi prethodni unos i cuva samo posslednji
    // setProizvodiKorpa(proizvodiKorpa.map((p) => p));
  };

  function add(arr, tempP) {
    // function (return index if match / -1 if no match
    let indexFound = arr.findIndex(
      (element) => element._id.$oid === tempP._id.$oid
    );
    if (indexFound < 0) setProizvodiKorpa([...arr, tempP]);
    if (indexFound >= 0) {
      proizvodiKorpa[indexFound].kolicina =
        +proizvodiKorpa[indexFound].kolicina + +kolicinaInput;
    }

    return arr;
  }

  //reset
  useEffect(() => {
    setShowFilters(false);
    setShowTitles(false);
    setVrsteProizvoda([]);
    setShowTip(false);
    setPagination({ page: 1, perPage: 16 });
    setIsSearching(false);
  }, [router.pathname, router.asPath]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        setProdukti,
        produkti,
        products,
        isActive,
        setIsActive,
        handleSearch,
        links,
        searchProducts,
        showTitles,
        setShowTitles,
        titles,
        setShowFilters,
        showfilters,
        items,
        showTip,
        setShowTip,
        tip,
        setTip,
        vrstaZivotinje,
        setVrstaZivotinje,
        vrsteProizvoda,
        setVrsteProizvoda,
        trenutnaAkcija,
        setItems,
        proizvodiKorpa,
        setProizvodiKorpa,
        cart,
        setCart,
        removeItemFromCart,
        isSearching,
        scrollToTop,
        setIsSearching,
        shake,
        shakeThatCart,
        offset,
        pagination,
        setPagination,
        dodajProizvodUKorpu,
        add,
        kolicinaInput,
        setKolicinaInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
