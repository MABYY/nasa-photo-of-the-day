import React , {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

// const NewpicFc = () =>{
//   const[newpic,setNewpic] = useState({})
//   useEffect(() =>{
//      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//      .then(response => {
//         console.log(response.data)
//         setNewpic(response.data)
//            }
//         )
//      .catch(error => console.log(error))
//   },[])

function App() {

  return (
    <div className="App">
      <p>
       {/* <NewpicFc /> */}
      </p>
    </div>
  );
}

export default App;
