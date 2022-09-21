import { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { NonSwiperProizvod, Meta, Button2 } from '../../components';

import {
  FilterKategorije,
  FilterSort,
  FilterTip,
} from '../../components/Functional/FilterKategorije';

import { GridContainer, H1, ProductsListWrapper } from '../../components/utils';

const SviProizvodi = () => {
  const {
    items,
    setItems,
    vrstaZivotinje,
    setVrstaZivotinje,
    pagination,
    setPagination,
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
      <Meta title='Производи' />

      <div className={`wrapper w-full  `}>
        {/* //top slider */}

        <section className='sm:px-5 px-1 '>
          <div className='flex flex-col w-full m-auto  mb-12'>
            <H1 className='text-center '>сви производи</H1>

            <ProductsListWrapper>
              <div className='sm:w-1/6 w-4/5 flex flex-col px-2'>
                {vrstaZivotinje.length > 0 ? (
                  <>
                    <FilterKategorije numberOfProductsByType={products} />
                    <FilterTip
                      numberOfProductsByType={vrstaZivotinje.filter(
                        (f) => f.title
                      )}
                    />
                  </>
                ) : (
                  <FilterKategorije numberOfProductsByType={products} />
                )}

                <FilterSort />
              </div>
              <GridContainer>
                {items &&
                  items
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
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

export default SviProizvodi;
