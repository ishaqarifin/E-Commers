import React from 'react'

function modal({ show, handleClose, setConfirmDelete }) {

  const handleDelete =()=> {
    setConfirmDelete(true)
  }
  return (
    <div show={show} onHide={handleClose} className="bg-white flex-col p-5 rounded w-80 h-28 m-auto absolute inset-0 justify-center items-center">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-black ">Delete Data</h4>
      </div>
      <div>
        <p className="text-black mt-1 mb-2 text-xs">Are you sure you want to delete this data?</p>
      </div>
      <button className="bg-green-500 font-bold text-xs hover:bg-green-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline" 
      type="button" 
      onClick={handleDelete}>
        Yes
      </button>
      <button className="bg-red-500 font-bold text-xs hover:bg-red-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2" 
      type="button" 
      onClick={handleClose}>
        No
      </button>
    </div>
  );
}

export default modal