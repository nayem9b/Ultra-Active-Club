import React from 'react';

const Cards = ({image}) => {
    const tags= image.tags.split(',');
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10">
  <figure><img src={image.webformatURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h3 className="card-title">
      Photo By {image.user} 
    </h3>
      <div className="avatar">
  <div className="w-9 rounded-full">
   <img src={image.userImageURL} alt="" />
  </div>
</div>
    <p> <span className='text-violet-500'> Views:</span> {image.views}</p>
    <p> <span className='text-fuchsia-500'> Likes:</span> {image.likes}</p>
    <p> <span className='text-purple-400'> Comments:</span> {image.comments}</p>
  
    <div className="card-actions justify-end">
    {
        tags.map((tag,index) =>(
              <div key={index} className="badge badge-outline">#{tag}</div> 
        ))
    }
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;