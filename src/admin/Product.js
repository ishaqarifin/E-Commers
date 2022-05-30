import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Data from '../components/context/Data';
import Modal from './modal';
import NavbarAdmin from './NavbarAdmin';

function Product() {

  const [modalOn, setModalOn] = useState(false)

  const clicked = ()=> {
    setModalOn(true)
  }
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-5 font-bold">Product</div>
      {modalOn && <Modal setModalOn={setModalOn} />}
      <div className="mx-20 my-5">
        <button class="hover:bg-gray-800 mb-5 font-bold border py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Add Product</span>
        </button>
        <table className="w-full table-auto">
          <thead className="text-left bg-stone-800 uppercase text-gray-50">
            <tr className="border-b">
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Desc
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {Data.map((file, index) => (
              <tr className="border-b bg-stone-800">
                <td className="px-6 py-2">{file.id}</td>
                <td className="px-6 py-2">{file.name}</td>
                <td className="px-6 py-2">{file.desc}</td>
                <td className="px-6 py-2">{file.price}</td>
                <td className="px-6 py-2">{file.qty}</td>
                <td className="px-6 py-2">
                  <Link to="editproduct">
                    <button className="bg-green-500 hover:bg-green-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline" type="button">
                      Edit
                    </button>
                  </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2" type="button" onClick={clicked}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product