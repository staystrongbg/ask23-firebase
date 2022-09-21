import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { Dropdown, Links } from '../';

import Image from 'next/image';
import { useGlobalContext } from '../../context';
import styles from '../../styles/dropdown.module.scss';

const Navlinks = ({ className = '' }) => {
  const { offset } = useGlobalContext();

  return (
    <>
      <div
        className={` ${
          offset
            ? 'fixed top-[56px] left-0 right-0 bg-gray-100   z-30 shadow-md'
            : ''
        }  flex gap-8 px-6 py-0  items-center justify-center text-base rounded-sm uppercase ${className} `}
      >
        {offset && (
          <Link href='/'>
            <a>
              <Image
                src='/asklogo.svg'
                alt='kuce'
                width={120}
                height={60}
                unoptimized={true}
                loading='eager'
              />
            </a>
          </Link>
        )}
        <div
          className={` ${styles.menu} flex items-center justify-center gap-0.5 relative  `}
        >
          <Link href='/proizvodi'>
            <a
              className={`text-gray-900 tracking-wider select-none whitespace-nowrap z-30}`}
            >
              производи
            </a>
          </Link>
          <span
            id={styles.chevron}
            className={`text-gray-900 hover:text-gray-600 select-none ${
              offset && 'hover:text-slate-500'
            }`}
          >
            <FaChevronRight />
          </span>
          <Dropdown />
        </div>

        <Links text_color='text-gray-900' />
        <Link href='/akcije'>
          <a className='text-slate-50 py-1 px-2 tracking-wider rounded-sm select-none bg-orange-600 z-30'>
            акције
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
