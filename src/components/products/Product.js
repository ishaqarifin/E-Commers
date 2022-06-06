import React from 'react'
import Navbar from '../Navbar'
// import Data from '../context/Data';
import CardProduct from './CardProduct';

import {useQuery} from 'react-query'
import {API} from '../../config/api'

function Product() {
  // Fetching product data from database
  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data;
  });

  return (
    <div className=''>
      <Navbar />
      <div className="ml-16 text-3xl font-bold text-red-500 mt-5">Product</div>
      <div className=" p-16 grid grid-cols-5 gap-10">
        {products?.map((data, index) => (
          <CardProduct item={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Product