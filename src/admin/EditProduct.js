import React from 'react'
import NavbarAdmin from './NavbarAdmin';

function EditProduct() {
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">Edit Product</div>
      <div className="mx-20 my-5">
        <div className="my-10">
          <input
            classNameName="form-control block w-full px-3 py-1.5 text-base font-normal text-White bg-clip-content border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-none focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
          <input className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" id="CategoryName" type="text" value="Mouse" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="CategoryName"
            type="textarea"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe illo dolor corrupti doloremque ullam quaerat odio, unde ratione tenetur?
"
          />
          <input className="my-4 shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" id="CategoryName" type="text" value="39000" />
          <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" id="CategoryName" type="text" value="454" />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditProduct