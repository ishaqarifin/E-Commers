import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api';
import NavbarAdmin from './NavbarAdmin';

export default function AddProduct() {
  let navigate = useNavigate()

  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    image: '',
    title: '',
    desc: '',
    price: '',
    qty: '',
  }); //Store product data

  // Fetching category data
  const getCategories = async () => {
    try {
      const response = await API.get('/categories');
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // For handle if category selected
  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Save category id if checked
      setCategoryId([...categoryId, parseInt(id)]);
    } else {
      // Delete category id from variable if unchecked
      let newCategoryId = categoryId.filter((categoryIdItem) => {
        return categoryIdItem !== id;
      });
      setCategoryId(newCategoryId);
    }
  };

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set('image', form.image[0], form.image[0].name);
      formData.set('title', form.title);
      formData.set('desc', form.desc);
      formData.set('price', form.price);
      formData.set('qty', form.qty);
      formData.set('categoryId', categoryId.id);

      console.log(formData);

      // Insert product data
      const response = await API.post('/addproduct', formData, config);
      console.log(response);

      navigate('/product');
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">Add Product</div>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        {preview && (
          <div>
            <img
              src={preview}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
              alt={preview}
            />
          </div>
        )}
        <div className="mx-20 my-5">
          <div className="my-10">
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-White bg-clip-content border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-none focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
              name='image'
              hidden
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="Title Produxt" 
              name="title" 
              onChange={handleChange} 
              className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
            <input 
              type="textarea" 
              name="desc" 
              placeholder="description" 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
            <input 
              type="number" 
              name="price" 
              placeholder="price (Rp.)" 
              onChange={handleChange} 
              className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
            <input 
              type="number" 
              placeholder="stock" 
              name="qty" 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
          </div>
          <div className="card-form-input mt-4 px-2 py-1 pb-2">
              <div
                className="text-secondary mb-1"
                style={{ fontSize: '15px' }}
                >
                Category
              </div>
              {categories.map((item, index) => (
                  <label key={index} className="checkbox-inline mx-4">
                    <input
                      type="checkbox"
                      value={item.id}
                      onClick={handleChangeCategoryId}
                    />{' '}
                    {item.name}
                  </label>
                ))}
            </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
