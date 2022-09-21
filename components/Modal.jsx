import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { NonSwiperProizvod } from '../components';
import { GridContainer } from './utils';

const Modal = () => {
  const { setSearchTerm, searchProducts } = useGlobalContext();

  return (
    <div
      className={`fixed  top-0 left-0 right-0 bottom-0 bg-gray-100/90 z-50 flex items-center justify-center flex-wrap overflow-auto p-4 gap-8 shadow-lg`}
    >
      <span
        className='absolute top-4 right-4 cursor-pointer'
        onClick={() => setSearchTerm('')}
      >
        <FaTimes className='w-[24px] h-[24px] text-gray-400' />
      </span>
      <GridContainer>
        {searchProducts &&
          searchProducts.map((p, idx) => (
            <NonSwiperProizvod key={idx} {...p} />
          ))}
        {!searchProducts.length && (
          <h2 className='price  inline text-gray-700   text-xl'>
            Нема производа...
          </h2>
        )}
      </GridContainer>
    </div>
  );
};

export default Modal;
