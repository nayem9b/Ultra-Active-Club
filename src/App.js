import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MyInfo from "./Components/My Info/MyInfo";
import Button from "./Components/Button/Button";
import AddBreak from "./Components/Add Break/AddBreak";
import ExerciseDetails from "./Components/ExerciseDetails/ExerciseDetails";

function App(props) {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [rest, setRest] = useState(0);

  useEffect(() => {
    fetch("tree.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Navbar></Navbar>
<div className="container flex">
      <div className='flex sm:block w-5/6'>
        <div className='grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-0'>
          {images.map((image) => (
            <Cards
              key={image.id}
              image={image}
              setCount={setCount}
              count={count}></Cards>
          ))}
        </div>
      </div>
      <div className="sticky">
        <MyInfo setCount={setCount} count={count}></MyInfo>
        <AddBreak
          setCount={setCount}
          count={count}
          rest={rest}
          setRest={setRest}></AddBreak>
        <ExerciseDetails setCount={setCount} count={count}  rest={rest}
          setRest={setRest}></ExerciseDetails>
        <Button></Button>
      </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
