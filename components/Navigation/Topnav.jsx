import { Navlinks, Paw } from '../';

import Image from 'next/image';
import Link from 'next/link';

const Topnav = () => {
  return (
    <nav
      className={`flex flex-col items-center w-full justify-center bg-transparent text-gray-900 relative text-xl
       `}
    >
      <div
        className={` z-20 sm:flex hidden items-start justify-start w-fit p-2 xl:mt-16 mt-20 bg-transparent  `}
      >
        <div className='flex gap-4 -rotate-12 absolute right-5 -z-10'>
          <Paw style='rotate-45   ' />
          <Paw style='rotate-45 mt-40 ' />
          <Paw style='rotate-45 ' />
          <Paw style='rotate-45 mt-20 ' />
        </div>
        <Link href='/'>
          <a>
            <Image
              src='/asklogo.svg'
              alt='kuce'
              width={340}
              height={140}
              unoptimized={true}
              loading='eager'
            />
          </a>
        </Link>
      </div>

      <Navlinks className='lg:flex hidden' />
    </nav>
  );
};

export default Topnav;
