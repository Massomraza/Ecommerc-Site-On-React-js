import React from 'react'
import {FilterHook} from '../context/FilterContext';
import GridView from '../components/Gridview';
import ListView from '../components/ListView';

const ProductsSection = () => {
    const {filterProducts, gridView} = FilterHook();
    
    if(gridView){
      return <GridView products={filterProducts}/>
    }else{
      return <ListView products={filterProducts}/>
    }
}

export default ProductsSection;