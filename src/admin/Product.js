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
      <div className="ml-20 mt-10 font-bold">Product</div>
      {modalOn && <Modal setModalOn={setModalOn} />}
      <div className="mx-10 my-5">
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
                <td className="px-6 py-4">{file.id}</td>
                <td className="px-6 py-4">{file.name}</td>
                <td className="px-6 py-4">{file.desc}</td>
                <td className="px-6 py-4">{file.price}</td>
                <td className="px-6 py-4">{file.qty}</td>
                <td className="px-6 py-4">
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