import React, { useContext } from 'react'
import { UserContext } from '../context/useContext';
import Navbar from '../Navbar';

function Profile() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state);
  // console.log(dispatch);
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="basis-6/12">
          <div className="ml-16 font-bold text-red-500 mt-5">Detail Product</div>
          <div className="flex w-full ml-16 mt-4">
            <div className="flex rounded-lg shadow-lg max-w-sm w-64 h-80 mr-4">
              <img className="rounded h-auto object-cover" src="./assets/a.jpg" alt="" />
            </div>
            <div className="flex-col space-y-5 ">
              <div className="px-3">
                <p className="text-red-500 text-sm font-medium">Name</p>
                <p className="text-white text-sm">{state?.user?.name}</p>
              </div>
              <div className="px-3">
                <p className="text-red-500 text-sm font-medium">Email</p>
                <p className="text-white text-sm">{state?.user?.email}</p>
              </div>
              <div className="px-3">
                <p className="text-red-500 text-sm font-medium">Phone</p>
                <p className="text-white text-sm">{state?.user?.phone}</p>
              </div>
              <div className="px-3">
                <p className="text-red-500 text-sm font-medium">Gender</p>
                <p className="text-white text-sm">{state?.user?.gender}</p>
              </div>
              <div className="px-3">
                <p className="text-red-500 text-sm font-medium">Addrress</p>
                <p className="text-white text-sm">{state?.user?.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-6/12">
          <div className="font-bold text-red-500 mt-5">My Transaction</div>
          <div className="flex mt-4 bg-stone-700 items-center px-5 py-3 mr-20">
            <div className="flex rounded-lg shadow-lg w-20 h-24">
              <img className="rounded" src="./assets/a.jpg" alt="" />
            </div>
            <div className="flex-col space-y-3">
              <div className="px-3">
                <p className="text-red-500 text-md font-bold">Mouse</p>
                <p className="text-red-500 text-sm">Saturday, 14 Juli 2021</p>
                <p className="text-white text-sm">Price : Rp.500.000</p>
              </div>
              <div className="px-3">
                <p className="text-white text-sm font-bold">Sub Total : 500.000</p>
              </div>
            </div>
            <div className="w-20 ml-36 right-0">
              <img className="relative" src="./assets/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile