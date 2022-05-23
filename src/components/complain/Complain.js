import React from 'react'
import Navbar from "../Navbar"
import Chat from './Chat';

function Complain() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div class="flex h-full w-3/12 mx-5 mt-10 justify-between cursor-pointer border-b-2 border-neutral-700 hover:bg-stone-800">
          <div className="w-16 h-16 p-2">
            <img className="rounded-full w-full h-full" src="./assets/a.jpg" alt="" />
          </div>
          <div className="block mt-2 -ml-10">
            <h2 className="font-semibold text-justify">Admin</h2>
            <p className="text-sm text-stone-400">hy, how are you...</p>
          </div>
          <div className="font-sm text-sm items-center mt-4">22:12</div>
        </div>
        {/* <div class="w-9/12 border-l-2 p-2">right</div> */}
        <Chat />
      </div>
    </>
  );
}

export default Complain