import React , {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import styled from 'styled-components';

// const data = {
//   date: "2021-07-30",
//   explanation: "Peering from the shadows, the Saturn-facing hemisphere of Mimas lies in near darkness alongside a dramatic sunlit crescent. The mosaic was captured near the Cassini spacecraft's final close approach on January 30, 2017. Cassini's camera was pointed in a nearly sunward direction only 45,000 kilometers from Mimas. The result is one of the highest resolution views of the icy, crater-pocked, 400 kilometer diameter moon. An enhanced version better reveals the Saturn-facing hemisphere of the synchronously rotating moon lit by sunlight reflected from Saturn itself. To see it, slide your cursor over the image (or follow this link). Other Cassini images of Mimas include the small moon's large and ominous Herschel Crater.",
//   hdurl: "https://apod.nasa.gov/apod/image/1908/MimasPIA17213.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Mimas in Saturnlight",
//   url: "https://apod.nasa.gov/apod/image/1908/MimasPIA17213_fig1_1024.jpg"
// }

const Card = styled.section`
background-image: url("https://www.weathernationtv.com/app/uploads/2018/04/sky-starts.jpg");
z-index: -1;
`;

const Pg= styled.p`
font-family: Georgia;
font-size: 20px;
color: white;
margin: 3em 1em; 
line-height: 32px;
text-align: justify;
:hover {
  transform: scale(1.5)}
`;


const Imagediv = styled.div`
padding: 5em;

`;

const Image = styled.img`
width: 100%;
z-index: 1;
`;

const Head1 = styled.h1`
font-family: Georgia;
font-size: 60px;
color: white;
`;

const Head2 = styled.h2`
font-family: Georgia;
font-size: 50px;
color: white;
`;

const DivHeader = styled.div`
padding: 5em;
margin: 5em;
`;

const Imageheader = styled.img`
width: 40%;
`;


function App() {

const[newpic,setNewpic] = useState({})

useEffect(() =>{
     axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then(response => {
        console.log(response)
        setNewpic(response.data)
           }
        )
     .catch(error => console.log(error))
  },[])

  return (
    <Card className="App">
  
      <Head1> This is the picture of day {newpic.date}</Head1>

      <DivHeader>
        <Head2>{newpic.title}</Head2>
        <Imageheader src = {"https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"}/>
      </DivHeader>
      <Pg>{newpic.explanation}</Pg>
      <Imagediv>
        <Image src = {newpic.hdurl}/>
      </Imagediv>
     
    </Card>
  );
}

export default App;
