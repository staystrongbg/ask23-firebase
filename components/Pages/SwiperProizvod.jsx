import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import { useGlobalContext } from '../../context';
import { AkcijaBadge } from '../';

const SwiperProizvod = ({ ...p }) => {
  const { setSearchTerm, setIsSearching, dodajProizvodUKorpu } =
    useGlobalContext();

  const closeOverlays = () => {
    setSearchTerm('');
    setIsSearching(false);
  };
  return (
    <div
      className={`w-72 h-[420px] lg:text-base text-xs bg-gray-100 hover:shadow-lg rounded-md  transition-all relative overflow-hidden border-2 flex flex-col justify-start `}
      onClick={closeOverlays}
    >
      {p.akcija && <AkcijaBadge />}
      <div className='w-full h-1/3 sm:h-1/2 relative bg-white py-1 '>
        <Link href='/proizvodi/[id]' as={`/proizvodi/${p._id.$oid}`}>
          <a>
            <img
              className={`product-image rounded-t-md object-contain h-full w-full`}
              src={p.image}
              alt=''
            />
          </a>
        </Link>
      </div>
      <div className='p-2 flex flex-col items-center justify-around lg:h-1/2 h-2/3 '>
        <div className='flex gap-4 mt-2 '>
          <span className='rounded-lg bg-gray-200 text-gray-500 py-1 px-2'>
            {p.tip}
          </span>
          <span className='bg-gray-200 rounded-lg text-gray-500 py-1 px-2'>
            {p.title}
          </span>
        </div>
        <h3 className='title xl:text-base text-sm text-blue-700 '>
          {p.name.toUpperCase()}
        </h3>
        <div className='proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 '>
          <h2 className='price font-bold inline text-gray-100   lg:text-2xl text-xl '>
            {p.price}
          </h2>
        </div>
        <p className='details text-xs text-gray-400'>
          *приказане цене су у РСД
        </p>
        <div
          className='uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center'
          onClick={() => dodajProizvodUKorpu(p)}
        >
          <p className='lg:text-sm text-xs text-gray-600'>додај у корпу</p>
          <span className=' xl:text-3xl text-xl text-yellow-500  '>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperProizvod;
