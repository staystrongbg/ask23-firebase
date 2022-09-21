//razmissliti o tome sta moze da bude prerenderovano a sta ne
//izbaciti _id object i staviti auto id

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/firebase-config';
import {
  FilterSort,
  FilterTip,
} from '../components/Functional/FilterKategorije';
import { Meta, Button2, NonSwiperProizvod } from '../components';

import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GridContainer, H1, P, ProductsListWrapper } from '../components/utils';

const Kategorija = ({ page, products }) => {
  const {
    setItems,
    items,
    setVrstaZivotinje,
    vrstaZivotinje,
    pagination,
    setPagination,
  } = useGlobalContext();

  const router = useRouter();

  useEffect(() => {
    setItems(vrstaZivotinje);
  }, [router.pathname, vrstaZivotinje]);

  useEffect(() => {
    setVrstaZivotinje(page.filter((k) => k.link === router.query.url));
  }, [page]);

  return (
    <>
      <Meta title={`Производи за ${page[0].title}`} />

      <div className={`wrapper w-full `}>
        {/* //top slider */}

        <section className='sm:px-5 px-1  '>
          <div className='flex flex-col  w-full m-auto mt-12 mb-12'>
            <H1 className='text-center'>{page[0].title}</H1>

            <ProductsListWrapper>
              <div className='sm:w-1/6 w-4/5 flex flex-col px-2'>
                <FilterSort />
                <FilterTip
                  numberOfProductsByType={products.filter(
                    (p) => p.link === router.query.url
                  )}
                />
              </div>
              <GridContainer>
                {items &&
                  items
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p) => <NonSwiperProizvod key={p.id} {...p} />)}
              </GridContainer>
            </ProductsListWrapper>
            {items.length > pagination.perPage * pagination.page && (
              <Button2
                className='w-72 m-auto'
                title='учитај још'
                onClick={() =>
                  setPagination({ ...pagination, page: pagination.page + 1 })
                }
              />
            )}
          </div>
        </section>
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
      page: data.filter((p) => p.link === context.params.url),
    },
    revalidate: 60,
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
        params: { url: l.link },
      };
    }),
    fallback: 'blocking',
  };
};
export default Kategorija;
