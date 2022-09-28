import React from 'react';

const ExerciseDetails = ({setCount ,count,setRest ,rest,clicked,updateButton}) => {
//     const clicked =()=>{
//     setCount(count+30)
//   }
  
    return (
        <div>
                <div className="exerciseDetails">

   <h1 className="my-6 text-2xl ml-6">Exercise Details</h1>
    <div className='grid grid-cols-3 justify-evenly bg-slate-500 p-4 m-6 rounded-2xl'>
            <h1 className="text-xl">Exercise Time</h1> 
            <div className="flex">
                <h1 className="mx-2"  > {count}</h1>
            <h1  > Minutes</h1>
           </div>
            
            </div>
        <div className='grid grid-cols-3 justify-evenly bg-slate-500 p-4 m-6 rounded-2xl'>
            <h1 className="text-xl">Break Time</h1> 
            
            <div className="flex">
            <h1 className="mx-2"> {rest} Minutes</h1>
           </div>
            
            </div>
       
     
     </div>
        </div>
    );
};

export default ExerciseDetails;