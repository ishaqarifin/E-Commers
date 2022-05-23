import React from 'react'
import Navbar from '../Navbar'
import Data from '../context/Data';

function Product() {
  return (
    <div>
      <Navbar />
        <div className='ml-16 font-bold text-red-500 mt-5'>Product</div>
      <div className="flex w-full ml-16 mt-4">
        {Data.map((data,index) => (
          <div className="rounded-lg shadow-lg bg-stone-900 max-w-sm w-56 mr-4 h-84">
            <a href="detail">
              <img className="rounded-t-lg h-72" src={data.image} alt="" />
            </a>
            <div className="p-3">
              <h5 className="text-red-500 text-xl font-medium">{data.name}</h5>
              <p className="text-white text-base">Price : {data.price}</p>
              <p className="text-white text-base">Stok : {data.qty}</p>
              {/* <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                Button
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product