import React from "react";

const Cards = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl my-10'>
        <figure>
          <img src={image.webformatURL} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h3 className='card-title'>Photo By {image.user}</h3>
          <div className='avatar'>
            <div className='w-9 rounded-full'>
              <img src={image.userImageURL} alt='' />
            </div>
          </div>     <p>
            {" "}
            <span className='text-violet-500'> Views:</span> {image.views}
          </p>
          <p>
            {" "}
            <span className='text-fuchsia-500'> Likes:</span> {image.forAge}
          </p>
          <p>
            {" "}
            <span className='text-purple-400'> Comments:</span> {image.comments}
          </p>

          

          <button className='btn gap-2'>
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
