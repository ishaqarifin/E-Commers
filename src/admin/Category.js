import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
// import ModalCategory from './ModalCategory';
import NavbarAdmin from './NavbarAdmin';

import { useMutation, useQuery } from 'react-query';
import { API } from '../config/api';
import Modal from './modal';

function Category() {
  let navigate = useNavigate()

  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (id)=> {
    navigate(`/editcategory/${id}`)
  }

  let { data: categories, refetch } = useQuery("categoriesCache", async () => {
    const response = await API.get("/categories");
    return response.data.data;
  });

  const handleDelete = (id) => {
    setIdDelete(id);
    console.log(id);
    handleShow();
  };
  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/deletecategory/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

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
    <div className='w-screen'>
      <NavbarAdmin />
      <div className="ml-20 mt-5 font-bold mb-5">List Category</div>
      {show && <Modal 
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
        />}
      <button className="hover:bg-gray-800 font-bold border ml-20 py-2 px-4 rounded inline-flex items-center">
        <NavLink to="/addcategory">
            <span>Add Product</span>
          </NavLink>
      </button>
      <div className="mx-20 my-5">
        <table className="w-full table-auto">
          <thead className="text-left bg-stone-800 uppercase text-gray-50">
            <tr className="border-b">
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((item, index) => (
              <tr className="border-b bg-stone-800">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  book
                </th> */}
                <td className="px-6 py-3">{item.id}</td>
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 text-center">
                  <button
                  onClick={()=> {
                    handleEdit(item.id)
                  }} 
                  className="bg-green-500 hover:bg-green-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline" type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item.id)
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2"
                    type="button"
                  >
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

export default Category