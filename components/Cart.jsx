import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { FaChevronRight, FaTimes, FaTrash } from 'react-icons/fa';

import { Button2, Divider } from './';

import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { CHEVRON_ROTATING_STYLE } from './utils';

import Link from 'next/link';
import Image from 'next/image';

const Cart = () => {
  const { proizvodiKorpa, setCart, removeItemFromCart } = useGlobalContext();
  const [order, setOrder] = useState(false);
  const [zavrsiKupovinu, setZavrsiKupovinu] = useState(false);
  return (
    <div className='flex flex-col'>
      <span
        onClick={() => setCart(false)}
        className='text-gray-50  bg-indigo-700   items-center px-4 py-2 text-xl cursor-pointer flex justify-between w-full'
      >
        Ваша корпа
        <FaTimes />
      </span>
      {proizvodiKorpa &&
        proizvodiKorpa.map((item) => {
          return (
            <div key={item.id}>
              <div className='flex px-2 items-center justify-start '>
                <span className='border flex items-center justify-center border-gray-300 p-1 '>
                  <Image
                    objectFit='cover'
                    width={80}
                    height={80}
                    placeholder='blur'
                    blurDataURL={item.image}
                    src={item.image}
                    unoptimized={true}
                    loading='eager'
                    alt={item.name}
                  />
                </span>
                <div className=' text-base m-2 w-full'>
                  <p className='text-gray-900 flex justify-between w-full '>
                    <span className=' text-gray-600 text-sm '>{item.name}</span>
                    <span className='text-red-600 whitespace-nowrap '>
                      {item.price}
                    </span>
                  </p>
                  <div className='text-gray-500 flex justify-between mt-2'>
                    <span>Kол. {item.kolicina}</span>
                    <span
                      className='text-gray-500 cursor-pointer tracking-wider uppercase'
                      onClick={() => removeItemFromCart(item._id.$oid)}
                    >
                      <FaTrash />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {!proizvodiKorpa.length && (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-gray-600 text-2xl  my-10'>Корпа је празна</h2>
          <span className='text-gray-800 text-5xl text-center'>
            <AiOutlineShoppingCart />
          </span>
        </div>
      )}
      {proizvodiKorpa.length > 0 && (
        <>
          <Divider />
          <h2 className='text-red-600 text-2xl my-4 text-right font-bold'>
            <span className='mr-2'> Укупно:</span>
            {proizvodiKorpa.reduce((total, item) => {
              total = total + +item.price * item.kolicina;
              return Math.round((total + Number.EPSILON) * 100) / 100;
            }, 0)}
            <span className='ml-1'>дин</span>
          </h2>
          <Button2
            title='заврши куповину'
            onClick={() => setZavrsiKupovinu(true)}
          />
          <p className='text-sm text-gray-500 cursor-pointer text-center my-2'>
            <span onClick={() => setCart(false)}>или наставите куповину →</span>
          </p>
        </>
      )}
      {zavrsiKupovinu && (
        <div className='fixed top-0 left-0 bottom-0 right-0  bg-gray-50 flex flex-col items-center justify-start   p-4 overflow-scroll'>
          <div className='flex flex-col items-center'>
            <Link href='/'>
              <a>
                <Image
                  src='/asklogo.svg'
                  width='120px'
                  height='100%'
                  unoptimized={true}
                  loading='eager'
                  alt='logo'
                />
              </a>
            </Link>
            <h2 className='text-blue-800 text-4xl uppercase  '>
              заврши куповину
            </h2>
          </div>
          <span
            className='text-gray-800 text-2xl p-2 absolute top-2 right-2 cursor-pointer'
            title='izadji'
            onClick={() => setZavrsiKupovinu(false)}
          >
            <FaTimes />
          </span>
          <p
            className=' bg-blue-800 p-2 text-lg text-gray-50 flex items-center gap-2 whitespace-nowrap cursor-pointer border-blue-300 border-4 rounded-md tracking-wide '
            onClick={() => setOrder(!order)}
          >
            погледај поруџбину{' '}
            <span className={order && CHEVRON_ROTATING_STYLE}>
              <FaChevronRight />
            </span>{' '}
          </p>
          {order && (
            <table className='text-gray-500 border-collapse  border-gray-600'>
              <tr>
                <th>производ</th>
                <th>количина</th>
                <th>цена</th>
              </tr>
              {proizvodiKorpa.map((p) => {
                console.log(p);
                return (
                  <>
                    <tr key={p.id}>
                      <td className='border p-4 border-gray-600 '>{p.name}</td>
                      <td className='border p-4 border-gray-600 '>
                        {p.kolicina}
                      </td>
                      <td className='border p-4 border-gray-600 '>{p.price}</td>
                    </tr>
                  </>
                );
              })}
              <tr className='text-left'>
                <td>*цене су у динарима</td>
                <td>укупно:</td>
                <td className='font-bold p-2'>
                  {proizvodiKorpa.reduce((total, item) => {
                    total = total + +item.price * item.kolicina;
                    return Math.round((total + Number.EPSILON) * 100) / 100;
                  }, 0)}
                </td>
              </tr>
              <tr>
                *Плаћање се врши поузећем по пријему или уплатом на текући рачун{' '}
                <br />
                *Робу шаљемо Bex курирском службом
              </tr>
            </table>
          )}
          <Divider />

          <h2 className='text-2xl text-blue-800'>Унесите податке за слање</h2>
          <form
            className='flex flex-col gap-2 border p-4 bg-white text-gray-600 w-96'
            method='POST'
            action='https://formsubmit.co/beograd.l@yandex.com'
          >
            <input type='hidden' value='table' name='_template' />
            <input type='hidden' name='_next' value='https://ask23.rs' />
            <TextField label='Име' variant='outlined' name='ime' required />
            <TextField
              label='Презиме'
              variant='outlined'
              name='prezime'
              required
            />
            <TextField
              label='Email'
              variant='outlined'
              name='email'
              type='email'
              required
            />{' '}
            <TextField
              label='Адреса'
              variant='outlined'
              name='adresa'
              required
            />
            <TextField
              label='Телефон'
              variant='outlined'
              name='telefon'
              required
            />
            <textarea
              className='hidden'
              name='message'
              id=''
              cols='30'
              rows='10'
              value={proizvodiKorpa.map((item) => [
                item.name,
                item.kolicina + 'kom' + ' ',
              ])}
            ></textarea>
            <Button2 title='пошаљи' type='submit' />
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
