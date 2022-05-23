import React from 'react'
import NavbarAdmin from './NavbarAdmin';

function EditCategory() {
  return (
    <div className="w-screen">
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">Edit Category</div>
      <div className="mx-20 my-5">
        <div class="my-10">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 bg-stone-800 text-white leading-tight focus:outline-none focus:shadow-outline" id="CategoryName" type="text" value="Elektronik" />
        </div>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditCategory