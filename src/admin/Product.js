import React, { useState,useEffect } from 'react'
import { useQuery, useMutation } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import { API } from '../config/api';
import Modal from './modal';
import NavbarAdmin from './NavbarAdmin';

function Product() {
  let navigate = useNavigate()

  // const [modalOn, setModalOn] = useState(false)
  // Variabel for delete product data
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  // Modal Confirm delete data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (id) => {
    navigate('/editproduct/' + id)
  }

  // Create init useState & function for handle show-hide modal confirm here ...

  let { data: products, refetch } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data;
  });

  // const addProduct = () => {
  //   navigate('/add-product');
  // };

  // Create function handle get id product & show modal confirm delete data here ...
  const handleDelete = (id) => {
    setIdDelete(id);
    console.log(id);
    handleShow();
  };

  // Create function for handle delete product here ...
  // If confirm is true, execute delete data
  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/deleteproduct/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  // Call function for handle close modal and execute delete data with useEffect here ...
  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      handleClose();
      // execute delete data  by id function
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-5 font-bold">Product</div>
      {show && <Modal 
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
      />}
      <div className="mx-20 my-5">
        <button className="hover:bg-gray-800 mb-5 font-bold border py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {/* <path strokelinecap="round" strokelinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
          </svg>
          <NavLink to="/addproduct">
            <span>Add Product</span>
          </NavLink>
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
            {products?.map((item, index) => (
              <tr className="border-b bg-stone-800">
                <td className="px-6 py-2">{item.id}</td>
                <td className="px-6 py-2">{item.title}</td>
                <td className="px-6 py-2">{item.desc}</td>
                <td className="px-6 py-2">{item.price}</td>
                <td className="px-6 py-2">{item.qty}</td>
                <td className="px-6 py-2">
                    <button
                      onClick={()=> {
                        handleEdit(item.id)
                      }}
                      className="bg-green-500 hover:bg-green-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline"
                     >
                      Edit
                    </button>
                  <button 
                  onClick={()=> {
                    handleDelete(item.id)
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
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