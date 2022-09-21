import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../../context';

import { Modal } from '../';

export const Search = () => {
  const { handleSearch, searchTerm, isSearching, setIsSearching } =
    useGlobalContext();
  return (
    <div
      className=' flex items-center gap-2 bg-transparent rounded-md cursor-pointer z-50'
      title='Претрага производа'
    >
      <span
        className={`p-2 cursor-pointer}`}
        onClick={() => setIsSearching(!isSearching)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='fill-gray-50'
        >
          <path d='M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z' />
        </svg>
      </span>
      <div>
        {isSearching && (
          <form
            onSubmit={(e) => handleSearch(e)}
            className='z-50 '
            onKeyDown={(e) => e.key === 'Escape' && setIsSearching(false)}
          >
            <div
              className={` fixed top-0 left-0 right-0 bottom-0 bg-gray-50/90 z-50 `}
              onClick={() => setIsSearching(false)}
            >
              <div className='bg-red-500 flex justify-between items-center px-4 py-2'>
                <h3 className='text-gray-50 capitalize'>претрага</h3>
                <span
                  className=' text-gray-50 text-2xl'
                  onClick={() => setIsSearching(false)}
                >
                  <FaTimes />
                </span>
              </div>
            </div>

            <input
              type='text'
              autoFocus
              placeholder='назив производа(ћирилица)...'
              className={`search-input text-base font-bold p-2  h-10 xl:w-[40%] w-[98%] transition-all shadow-md bg-gray-100  rounded-sm text-slate-800 absolute top-12 xl:left-1/2 xl:-translate-x-1/2 left-1 z-50   `}
            />
          </form>
        )}
      </div>
      {searchTerm !== '' && <Modal />}
    </div>
  );
};

export const SelectCategory = ({ handleSelect }) => {
  return (
    <div>
      <select
        className=' text-gray-500  bg-gray-50 focus:outline-none py-1 px-2 rounded-sm border-0 transition-all'
        name='izaberi_kategoriju'
        id='izaberi-kategoriju'
        onChange={handleSelect}
      >
        <option value='psi'>Psi</option>
        <option value='macke'>Macke</option>
        <option value='ptice'>Ptice</option>
        <option value='male zivotinje'>male zivotinje</option>
        <option value='ribe'>ribe</option>
      </select>
    </div>
  );
};
