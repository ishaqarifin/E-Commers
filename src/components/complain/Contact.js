import React from 'react'

export default function Contact() {
  return (
    <div className="flex h-full w-3/12 mx-5 mt-10 justify-between cursor-pointer border-b-2 border-neutral-700 hover:bg-stone-800">
          <div className="w-16 h-16 p-2">
            <img className="rounded-full w-full h-full" src="./assets/a.jpg" alt="" />
          </div>
          <div className="block mt-2 -ml-10">
            <h2 className="font-semibold text-justify">Admin</h2>
            <p className="text-sm text-stone-400">hy, how are you...</p>
          </div>
          <div className="font-sm text-sm items-center mt-4">22:12</div>
        </div>
  )
}
