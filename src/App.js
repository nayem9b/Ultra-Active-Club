import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import MyInfo from './Components/My Info/MyInfo'
import Button from './Components/Button/Button'

function App(props) {
  const [images, setImages] = useState([])
  const [count , setCount]= useState(0)


  useEffect(() => {
    fetch('tree.json')
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="flex w-5/6">
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-0">
          {images.map((image) => (
            <Cards key={image.id} image={image} setCount={setCount} count={count}></Cards>
          ))}
          
        </div>
    
      </div>
        <MyInfo setCount={setCount} count={count} ></MyInfo>
       <Button></Button>
      <Footer></Footer>
    </div>
  )
}

export default App
