import { useEffect } from 'react';

import {
  FilterKategorije,
  FilterSort,
  FilterTip,
} from '../components/Functional/FilterKategorije';
import { Meta, NonSwiperProizvod, Button2 } from '../components';

import { useGlobalContext } from '../context';
import {
  GridContainer,
  H1,
  H2,
  ProductsListWrapper,
} from '../components/utils';

const Akcije = () => {
  const {
    pagination,
    setPagination,
    vrstaZivotinje,
    items,
    setItems,
    setVrstaZivotinje,
    products,
  } = useGlobalContext();

  useEffect(() => {
    setVrstaZivotinje([]);
  }, []);

  useEffect(() => {
    setItems(products);
  }, [products]);
  return (
    <>
      <Meta title='Акције' />

      <div className={`wrapper w-full  `}>
        {/* //top slider */}

        <section className='sm:px-5 px-1'>
          <div className='flex flex-col w-full m-auto mb-12'>
            <H1 className='text-center'>сви производи тренутно на акцији</H1>

            <ProductsListWrapper>
              <div className='sm:w-1/6 w-4/5 flex flex-col px-2'>
                {vrstaZivotinje.length > 0 ? (
                  <>
                    <FilterKategorije
                      numberOfProductsByType={products.filter((p) => p.akcija)}
                    />
                    <FilterTip
                      numberOfProductsByType={items.filter((p) => p.akcija)}
                    />
                  </>
                ) : (
                  <FilterKategorije
                    numberOfProductsByType={products.filter((p) => p.akcija)}
                  />
                )}
                <FilterSort />
              </div>
              <GridContainer>
                {items &&
                  items
                    .filter((f) => f.akcija)
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
                {items.filter((item) => item.akcija).length === 0 && (
                  <H2>Тренутно нема производа на акцији</H2>
                )}
              </GridContainer>
            </ProductsListWrapper>
            {items.filter((f) => f.akcija).length >
              pagination.perPage * pagination.page && (
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

export default Akcije;
