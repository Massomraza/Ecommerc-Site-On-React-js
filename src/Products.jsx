import React from 'react';
import FilterSection from './components/FilterSection';
import SortSection from './components/SortSection';
import ProductsSection from './components/ProductsSection';
import styled from 'styled-components';

const Products = () => {


  return <Wrapper>
    <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className='product-view--sort'>
          <div className='sort-product'>
            <SortSection />
          </div>
          <div className='main-product'>
            <ProductsSection />
          </div>
        </section>
    </div>
  </Wrapper>
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products