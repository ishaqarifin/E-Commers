import React from 'react'
import Navbar from '../Navbar';
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";
import { useParams } from 'react-router-dom';

function DetailProduct() {
  // Fetching product data from database
  let {id} = useParams()
  let { data: product } = useQuery("productCache", async () => {
    const response = await API.get(`/product/${id}`);
    return response.data.data;
  });

  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      const body = JSON.stringify(data);

      const response = await API.post('/addtransaction', body, config);
      console.log(response);

      // navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mr-5">
          <div className="w-96 h-96">
            <img className="object-fill h-full" src={product?.image} alt="" />
          </div>
        </div>
        <div className="">
          <div className="w-96">
            <h5 className="text-red-500 text-3xl font-bold mb-3">{product?.title}</h5>
            <p className="text-white text-base mb-3">Stock : {product?.qty}</p>
            <p className="text-white text-sm text-justify break-words my-16">{product?.desc}</p>
            <br />
            <p className="text-red-500 text-xl text-right font-bold mb-3">Rp.{product?.price}</p>
          </div>
          <div className=' grid grid-cols-2 gap-4'>
            <div 
              onClick={(e) => handleBuy.mutate(e)}
              className="bg-yellow-500 text-center py-1 mt-5 cursor-pointer font-bold rounded-sm">
                Add To Cart
            </div>
            <div 
              onClick={(e) => handleBuy.mutate(e)}
              className="bg-red-500 text-center py-1 mt-5 cursor-pointer font-bold rounded-sm">
                Buy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct