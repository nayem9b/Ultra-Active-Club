
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';

import Navbar from './Components/Navbar/Navbar';


function App() {

  const[ images, setImages]= useState([])
  const[ isLoading, setIsLoading]= useState(true)
  const[ term, setTerm]= useState('')

   useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=30122663-8b50b24bc7bd52e576cb2d22f&q=${term}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

   },[])

  return (
    <div className="App">
    
      <Navbar></Navbar>
  
      <Cards></Cards>
    </div>
  );
}

export default App;
