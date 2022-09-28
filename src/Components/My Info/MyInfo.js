import React from "react";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div>
      <div>
        <h1 className=" text-3xl ">MD RAZWAN NIAM</h1>
      </div>

      <h2 className=" text-xl">Dinajpur, Bangladesh</h2>
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
      <h1 className="my-6 text-2xl ml-6">Add A Break</h1>
      <div className='button-group  bg-slate-600 p-4 m-6 rounded-2xl'>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            10 M
          </span>
        </button>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            20 M
          </span>
        </button>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            30 M
          </span>
        </button>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            40 M
          </span>
        </button>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            50 M
          </span>
        </button>
        <button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800'>
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            60 M
          </span>
        </button>
      </div>
       <h1 className="my-6 text-2xl ml-6">Exercise Details</h1>
    </div>
  );
};

export default MyInfo;