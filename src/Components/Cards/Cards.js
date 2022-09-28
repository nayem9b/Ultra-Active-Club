import React from "react";

const Cards = ({ image , setCount ,count }) => {
  const tags = image.tags.split(",");
  const clicked =()=>{
    setCount(count+30)
  }

  return (
    <div>
      <div className='card w-80 bg-base-100 shadow-xl my-10'>
        <figure>
          <img src={image.webformatURL} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h3 className='card-title'>{image.user}</h3>
            <p>
            {" "}
            <span className='text-violet-500'> Time Required:</span> {image.timeRequired}
          </p>
          <p>
            {" "}
            <span className='text-fuchsia-500'> For Age</span> {image.forAge}
          </p>
         
            <p>
            {" "}
            <span className='text-purple-400'></span> {image.motivation}
          </p>
        

          

          <button className='btn gap-2' onClick={clicked} > 
            Add to List
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </button>
          <div className='card-actions justify-end'>
            {tags.map((tag, index) => (
              <div key={index} className='badge badge-outline'>
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
