import React, { useState,useEffect } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { API } from '../config/api';
import CheckBox from './CheckBox';
import NavbarAdmin from './NavbarAdmin';

function EditProduct() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data

  // Create Variabel for store product data here ...
  const [form, setForm] = useState({
    image: "",
    title: "",
    desc: "",
    price: "",
    qty: "",
  });

  // Create function get product data by id from database here ...
  useQuery('productCache', async () => {
    const response = await API.get('/product/' + id);
    setPreview(response.data.data.image);
    setForm({
      ...form,
      title: response.data.data.title,
      desc: response.data.data.desc,
      price: response.data.data.price,
      qty: response.data.data.qty,
    });
    setProduct(response.data.data);
  });

  // Create function get category data by id from database here ...
  useQuery('categoriesCache', async () => {
    const response = await API.get('/categories');
    setCategories(response.data.data);
    console.log(response);
  });

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

  // Create function for handle change data on form here ...
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // Create function for handle submit data ...
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      if (form.image) {
        formData.set("image", form?.image[0], form?.image[0]?.name);
      }
      formData.set("title", form.title);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      formData.set("categoryId", categoryId);
      console.log(formData);

      // Insert product data
      const response = await API.patch("/updateproducts/"+product.id, formData, config);
      console.log(response);

      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  });

  // Get category id selected
  useEffect(() => {
    const newCategoryId = product?.categories?.map((item) => {
      return item.id;
    });

    setCategoryId(newCategoryId);
  }, [product]);
  
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">Edit Product</div>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div className="mx-20 my-5">
          {preview && (
            <div>
              <img
                src={preview}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
                alt="preview"
              />
            </div>
          )}
          <div className="my-10">
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-White bg-clip-content border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-none focus:border-blue-600 focus:outline-none"
              type="file"
              id="upload"
              name="image"
              hidden
              onChange={handleChange}
            />
            <input
              type="text" 
              placeholder='Product Title'
              name='title'
              onChange={handleChange}
              value={form?.title} 
              className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
            <input
              type="textarea"
              placeholder='Product Desc'
              name='desc'
              onChange={handleChange}
              value={form?.desc}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
            <input 
              type="number"
              placeholder='Price (Rp.)'
              name='price' 
              onChange={handleChange}
              value={form?.price} 
              className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" 
              />
            <input
              type="number"
              placeholder='Stock'
              name='qty'
              onChange={handleChange}
              value={form?.qty} 
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
              {product &&
                categories?.map((item, index) => (
                  <label key={index} className="checkbox-inline mx-4">
                    <CheckBox
                      categoryId={categoryId}
                      value={item?.id}
                      handleChangeCategoryId={handleChangeCategoryId}
                    />
                    <span className="ms-2">{item?.name}</span>
                  </label>
                ))}
            </div>
          <button 
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct