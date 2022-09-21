import {
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
} from 'react-icons/fa';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useState } from 'react';

import { Sidebar, Cart, Search } from './';

import { BiTime } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';

import { useGlobalContext } from '../context';

const Topbar = () => {
  const { cart, setCart, isSearching, links, shake, proizvodiKorpa } =
    useGlobalContext();
  const [showSidebar, setShowSidebar] = useState(false);
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';

  return (
    <div className='w-full bg-gradient-to-r from-orange-800 to-orange-600 text-slate-50 flex  xl:items-center xl:justify-center xl:gap-16 py-2  fixed top-0 z-40  '>
      <Search />
      <div className='sm:flex w-full lg:text-sm text-xs justify-center gap-10 hidden'>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap `}
        >
          <span className={ICON_STYLE}>
            <FaMapMarkerAlt />
          </span>
          Др Драге Љочић 3, Београд
        </div>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap `}
        >
          <span className={ICON_STYLE}>
            <BiTime />
          </span>
          9 - 20ч
        </div>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap`}
        >
          <span className={ICON_STYLE}>
            <FaPhone />
          </span>
          069 288 72 94
        </div>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap`}
        >
          <span className={ICON_STYLE}>
            <FaEnvelope />
          </span>
          beograd.l@yandex.com
        </div>
      </div>

      <div
        className={`transition-all cursor-pointer text-2xl absolute xl:right-2 xl:top-1 top-4 right-12 z-50  flex flex-col  ${
          isSearching && 'hidden'
        } `}
      >
        <div className='flex gap-2'>
          {proizvodiKorpa.length > 0 && (
            <span className=' xl:hidden flex items-center justify-center text-base fixed top-2 right-10  w-5 h-5 rounded-full bg-blue-400 text-blue-900 z-50'>
              {proizvodiKorpa.reduce((kolicina, item) => {
                kolicina = kolicina + +item.kolicina;
                return kolicina;
              }, 0)}
            </span>
          )}
          {proizvodiKorpa.length > 0 ? (
            <FaShoppingCart
              onClick={() => setCart(true)}
              style={{ animation: `${shake && 'zoomIn 0.5s ease-out'} ` }}
            />
          ) : (
            <AiOutlineShoppingCart onClick={() => setCart(true)} />
          )}

          <span className='text-lg font-bold xl:block hidden'>
            {proizvodiKorpa.reduce((total, item) => {
              total = total + +item.price * +item.kolicina;
              return Math.round((total + Number.EPSILON) * 100) / 100;
            }, 0)}{' '}
            дин{' '}
          </span>
        </div>

        <span className='text-base xl:block hidden'>
          <b>
            {' '}
            {proizvodiKorpa.reduce((kolicina, item) => {
              kolicina = kolicina + +item.kolicina;
              return kolicina;
            }, 0)}{' '}
          </b>
          артикала
        </span>
      </div>
      <FaBars
        onClick={() => setShowSidebar(!showSidebar)}
        className={`fixed top-4  z-40 right-3 text-gray-50 font-bold text-2xl cursor-pointer lg:hidden flex ${
          cart || isSearching ? 'hidden' : ''
        } `}
      />
      {cart && (
        <>
          <ClickAwayListener onClickAway={() => setCart(false)}>
            <div className='shopping-cart fixed top-0 right-0 bottom-0 sm:w-96 w-full sm:border-l-4 border-gray-300 bg-gray-200/90 flex justify-between flex-col z-50 overflow-auto '>
              <Cart />
            </div>
          </ClickAwayListener>
        </>
      )}
      <div className='sm:hidden flex w-full items-center justify-center -ml-10 '>
        <Link href='/'>
          <a>
            <Image
              src='/logo_only.svg'
              width='120px'
              height='30px'
              alt='logo'
              unoptimized={true}
              loading='eager'
            />
          </a>
        </Link>
      </div>
      {showSidebar && <Sidebar links={links} setShowSidebar={setShowSidebar} />}
    </div>
  );
};

export default Topbar;
