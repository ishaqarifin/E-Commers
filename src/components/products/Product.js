import React from 'react'
import Navbar from '../Navbar'
import Data from '../context/Data';
import CardProduct from './CardProduct';

// import {useQuery} from 'react-query'
// import {API} from '../../config/api'

function Product() {
  

  return (
    <div>
      <Navbar />
      <div className="ml-16 font-bold text-red-500 mt-5">Product</div>
      <div className="flex w-full ml-16 mt-4">
        {Data?.map((data, index) => (
          <CardProduct item={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Product