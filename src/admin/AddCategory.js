import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api';
import NavbarAdmin from './NavbarAdmin'

export default function AddCategory() {
  let navigate = useNavigate()
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Data body
      const body = JSON.stringify({ name: category });

      // Insert category data
      await API.post('/addcategory', body, config);

      navigate('/category');
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">Edit Category</div>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div className="mx-20 my-5">
          <div className="my-10">
            <input 
            type="text"
            name='name'
            onChange={handleChange}
            value={category} 
            placeholder="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
