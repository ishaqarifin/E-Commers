import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

function DetailProduct() {
  const param = useParams
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mr-5">
          <div className="w-96 h-96">
            <img className="object-fill h-full" src="./assets/a.jpg" alt="" />
          </div>
        </div>
        <div className="">
          <div className="w-96">
            <h5 className="text-red-500 text-3xl font-bold mb-3">Mouse</h5>
            <p className="text-white text-base mb-3">Stock : 600</p>
            <p className="text-white text-sm text-justify break-words">
              - Wireless Mouse <br />
              - Konektivitas wireless 2.4 GHz <br />
              - Jarak wireless hingga 10 m <br />
              - Plug and Play <br />
              - Baterai tahan hingga 12 bulan
              <br />
              <br />
              Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima
              USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
            </p>
            <br/>
            <p className="text-red-500 text-xl text-right font-bold mb-3">Rp.300.000</p>
          </div>
          <div className='bg-red-500 text-center py-1 mt-5 cursor-pointer font-bold rounded-sm'>
            Buy
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct