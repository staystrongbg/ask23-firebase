import Link from 'next/link';

import { FaShoppingCart } from 'react-icons/fa';

import { AkcijaBadge } from '../';

import { useGlobalContext } from '../../context';

const NonSwiperProizvod = ({ ...p }) => {
  const { setSearchTerm, dodajProizvodUKorpu } = useGlobalContext();
  return (
    <>
      {p && (
        <div
          className={` min-h-[350px] h-[350px]  xs:h-[550px] bg-gray-100 hover:shadow-lg rounded-md overflow-hidden transition-all  border-2  flex flex-col  justify-start relative  `}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          {/* className=
          {`w-72 h-[420px] lg:text-base text-xs bg-gray-100 hover:shadow-lg rounded-md  transition-all relative  border-2 flex flex-col justify-start `} */}
          {p.akcija && <AkcijaBadge />}
          <div className='w-full lg:h-1/2 h-1/3 p-2 bg-white'>
            <Link href='/proizvodi/[id]' as={`/proizvodi/${p._id.$oid}`}>
              <a>
                {/* u nexy config... */}
                <img
                  onClick={() => setSearchTerm('')}
                  className='product-image  rounded-t-md object-contain  h-full w-full cursor-pointer '
                  src={p.image}
                  alt=''
                />
              </a>
            </Link>
          </div>
          <div className='p-2 flex flex-col items-center justify-around lg:h-1/2 h-2/3 '>
            <div className='flex gap-4 mt-2 text-sm sm:text-base '>
              <span className='rounded-lg bg-gray-200 text-gray-500 py-1 px-2'>
                {p.tip}
              </span>
              <span className='bg-gray-200 rounded-lg text-gray-500 py-1 px-2'>
                {p.title}
              </span>
            </div>
            <h3 className='title text-sm sm:text-base text-blue-700 whitespace-pre-wrap py-4 '>
              {p.name.toUpperCase()}
            </h3>
            <div className='proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 '>
              <h2 className='price font-bold inline text-gray-100 text-xl  sm:text-2xl   '>
                {p.price}
              </h2>
            </div>
            <p className='details sm:text-sm text-xs text-gray-400'>
              *приказане цене су у РСД
            </p>
            <div
              className='uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center'
              onClick={() => dodajProizvodUKorpu(p)}
            >
              <p className='text-sm sm:text-base text-gray-600'>
                додај у корпу
              </p>
              <span className=' xl:text-3xl text-xl text-yellow-500  '>
                <FaShoppingCart />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NonSwiperProizvod;
