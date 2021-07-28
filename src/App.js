import React , {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";


function App() {

const[newpic,setNewpic] = useState({})

useEffect(() =>{
     axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then(response => {
        console.log(response.data)
        setNewpic(response.data)
           }
        )
     .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <h1>'This is the picture of day ${newpic.date}'</h1>
       <h2>{newpic.title}</h2>
    
       <div>
         <img src = {newpic.url}/>
      </div>
    </div>
  );
}

export default App;
