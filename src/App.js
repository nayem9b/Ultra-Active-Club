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
import Questions from "./Components/Questions/Questions";

function App(props) {
  const [images, setImages] = useState([]);

 
  const getLocalItems = () => {
    let list = localStorage.getItem("hello world");
    if (list) {
      return JSON.parse(localStorage.getItem("ExerciseTime"));
    } else {
      return JSON.parse(localStorage.getItem("ExerciseTime"));
    }
  };
  const getLocalItemsForBreak = () => {
    let list2 = localStorage.getItem("BreakTime");
    if (list2) {
      return JSON.parse(localStorage.getItem("BreakTime"));
    } else {
      return [];
    }
  };
  const [count, setCount] = useState(getLocalItems(0));
   const [rest, setRest] = useState(getLocalItemsForBreak(0));
  useEffect(() => {
    fetch("tree.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ExerciseTime", JSON.stringify(count));
    window.localStorage.setItem("BreakTime", JSON.stringify(rest));
  });

  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='container lg:flex md:block sm:block'>
        <div className='sm:w-screen lg:w-fit md:w-screen'>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-0'>
            {images.map((image) => (
              <Cards
                key={image.id}
                image={image}
                setCount={setCount}
                count={count}></Cards>
            ))}
          </div>
        </div>
        <div className='mt-8' >
          <MyInfo setCount={setCount} count={count}></MyInfo>
          <AddBreak
            setCount={setCount}
            count={count}
            rest={rest}
            setRest={setRest}></AddBreak>
          <ExerciseDetails
            setCount={setCount}
            count={count}
            rest={rest}
            setRest={setRest}></ExerciseDetails>
          <Button></Button>
        </div>
      </div>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
