import React from "react";
import "./MyInfo.css";
import pic from "./IMG_20211022_174133.jpg"

const MyInfo = () => {
  return (
    <div className='ml-6'>
      <div>
        <div className='avatar'>
          <div className='w-24 rounded-full'>
            <img src={pic} />
          </div>
        </div>
        <h1 className=' text-3xl '>MD RAZWAN NIAM</h1>
      </div>

      <h2 className=' text-xl'>Dinajpur, Bangladesh</h2>
      <div className='grid grid-cols-3 justify-evenly bg-slate-600 p-4 m-6 rounded-2xl'>
        <div>
          <div className='flex'>
            <h1 className='text-2xl'> 65</h1>
            <h1 className=''> kg</h1>
          </div>
          <h1 className='block'> Weight</h1>
        </div>
        <div>
          <div className='flex'>
            <h1 className='text-2xl'> 6.5</h1>
          </div>
          <h1 className='block'> Height</h1>
        </div>
        <div>
          <div className='flex'>
            <h1 className='text-2xl'> 23</h1>
            <h1 className=''> yrs</h1>
          </div>
          <h1 className='block'> Age</h1>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
