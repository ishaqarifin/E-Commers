import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../components/context/Data';
// import Modal from './modal';
import NavbarAdmin from './NavbarAdmin';

function category() {

  // const [modal, setModal] = useState(false)

  // const clicked = () => {
  //   setModal(true);
  // };

  return (
    <>
      <NavbarAdmin />
      <div className="ml-20 mt-10 font-bold">List Category</div>
      {/* {modal && <Modal setModal={setModal} />} */}
      <div className="flex justify-between items-center w-[80%] mx-20 my-5">
        <table className="justify-between text-justify w-full text-sm text-white dark:bg-gray-700 dark:text-gray-400">
          <thead className="text-xs bg-stone-800 uppercase text-gray-50">
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
            {Data.map((data, index) => (
              <tr className="border-b bg-stone-800">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              book
            </th> */}
                <td className="px-6 py-4">{data.id}</td>
                <td className="px-6 py-4">{data.name}</td>
                <td className="pl-6 text-center">
                  <Link to="editcategory">
                    <button className="bg-green-500 hover:bg-green-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline" type="button">
                      Edit
                    </button>
                  </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 w-16 rounded focus:outline-none focus:shadow-outline ml-2" 
                  type="button"
                  // onClick={clicked}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default category