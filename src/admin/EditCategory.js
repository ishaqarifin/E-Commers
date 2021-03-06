import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../config/api';
import NavbarAdmin from './NavbarAdmin';

function EditCategory() {
  let navigate=useNavigate()
  const {id} = useParams()
  const [category, setCategory] = useState({ name: '' });

  // Fetching category data by id from database
  useQuery('categoryCache', async () => {
    const response = await API.get('/category/' + id);
    setCategory({name: response.data.data.name})
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(category);
      console.log(body);
      await API.patch('/updatecategory/'+id, body, config);

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
            value={category.name} 
            placeholder="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          type="submit"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCategory