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
z-index: -1;
${props => (props.change === true ? `background-image: url("https://www.weathernationtv.com/app/uploads/2018/04/sky-starts.jpg");` : `background-image: url("https://cdn.theatlantic.com/thumbor/qhOK9i-edRINNZdDYuXKeeUb-Iw=/0x0:1600x900/976x549/media/img/mt/2019/12/Nasa/original.gif");` )}
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
`;

const DivHeader = styled.div`
padding: 5em;
margin: 5em;
text-align: center;
`;

const Head1 = styled.h1`
font-family: Georgia;
font-size: 60px;
color: white;
text-align: center;
`;

const Head2 = styled.h2`
font-family: Georgia;
font-size: 50px;
color: white;

`;


const Imageheader = styled.img`
width: 40%;
`;

const Buttonheader = styled.button`
background-color: Transparent;
`;

function App() {

const[newpic,setNewpic] = useState({})
const[clicked, setClicked] = useState(true)


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
    <Card change={clicked} >
  
      <Head1> This is the picture of day {newpic.date}</Head1>

      <DivHeader >
        <Head2>{newpic.title}</Head2>

        <Buttonheader onClick ={()=>{setClicked(!clicked)}}>
          <Imageheader src = {"https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"}/>
        </Buttonheader>

      </DivHeader>

      <Pg>{newpic.explanation}</Pg>

      <Imagediv>
        <Image src = {newpic.hdurl}/>
      </Imagediv>
     
    </Card>
  );
}

export default App;
