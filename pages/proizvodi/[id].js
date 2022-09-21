// import products from '../../products.json';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase-config';

import { useGlobalContext } from '../../context';
import Image from 'next/image';

import { MultipleSwipers, AkcijaBadge, Meta, Button2 } from '../../components';
import { H2 } from '../../components/utils';

const ProizvodPojedinacno = ({ product, products }) => {
  const {
    dodajProizvodUKorpu,
    kolicinaInput,
    setKolicinaInput,
    trenutnaAkcija,
  } = useGlobalContext();
  return (
    <>
      <Meta title={product.name} />
      <div className={`wrapper w-full  `}>
        <article className='flex flex-col lg:w-4/5 w-full m-auto p-4 bg-transparent'>
          <h1 className='text-xl sm:text-2xl mb-5 text-orange-900 '>
            {product.name.toUpperCase()}
          </h1>
          <div className='flex md:flex-row flex-col gap-4 '>
            <div className='flex justify-center relative xl:max-w-[600px] p-4 bg-white '>
              {product.akcija && <AkcijaBadge />}
              <Image
                objectFit='contain'
                width='600px'
                height='600px'
                placeholder='blur'
                blurDataURL={product.image}
                unoptimized={true}
                loading='eager'
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='sm:text-base text-sm mt-2 flex flex-col gap-6'>
              <div className=''>
                <p className='font-bold mb-2 text-gray-600'>
                  Детаљи о производу
                </p>
                <p className='text-gray-800'>
                  {product.akcija ? trenutnaAkcija.tekst : product.detail}
                </p>
              </div>
              <div>
                <div className=' flex items-center gap-10'>
                  <div className='cena flex flex-col'>
                    <span>цена</span>
                    <span className='sm:text-2xl text-xl font-bold text-gray-50 bg-orange-600 px-1 rounded-sm'>
                      {product.price}
                    </span>
                  </div>
                  <div className='cena flex flex-col'>
                    <span>количина</span>

                    <input
                      // ref={kolicinaRef}
                      onChange={(e) =>
                        setKolicinaInput(
                          e.currentTarget.value < 99
                            ? e.currentTarget.value
                            : 99
                        )
                      }
                      className='w-10 p-1 font-bold text-center text-gray-600'
                      value={kolicinaInput}
                      min={1}
                      max={99}
                      type='number'
                    />
                  </div>
                  <Button2
                    title=' у корпу'
                    onClick={() => dodajProizvodUKorpu(product)}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className='px-8'>
          <H2 className='text-center my-10'>Слични производи</H2>
          <MultipleSwipers
            products={products.filter(
              (p) => p.tip === product.tip && p.title === product.title
            )}
          />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const proizvodiCollections = collection(db, 'products');
  const response = await getDocs(proizvodiCollections);
  const data = response.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return {
    props: {
      products: data,
      product: data.find((p) => p._id.$oid.toString() === context.params.id),
    },
    revalidate: 100,
  };
};

export const getStaticPaths = async () => {
  const proizvodiCollections = collection(db, 'products');
  const response = await getDocs(proizvodiCollections);
  const data = response.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return {
    paths: data.map((l) => {
      return {
        params: { id: l._id.$oid.toString() },
      };
    }),
    fallback: 'blocking',
  };
};
export default ProizvodPojedinacno;
