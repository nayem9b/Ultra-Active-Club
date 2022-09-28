import React from "react";
import "./MyInfo.css";
import pic from "./IMG_20211022_174133.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'

const MyInfo = () => {
  return (
    <div className='ml-6'>
      <div className='flex'>
        <div>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img src={pic} />
            </div>
          </div>
        </div>
        <div className="ml-4">
          <h1 className=' text-3xl '>MD RAZWAN NIAM</h1>
          <div className="flex">
             <FontAwesomeIcon className="mt-2" icon={faLocationDot} />
          <h2 className=' text-xl ml-4'>Dinajpur, Bangladesh</h2>
          </div>
        
        </div>
      </div>

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
