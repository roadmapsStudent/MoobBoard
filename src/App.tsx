import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([]);

  const LoadImages = () => {
    let tempImages : string[] = [];
    for(let i = 0;i < 10; i++) {
      tempImages.push("https://picsum.photos/id/" + i + "/300/300");
    }
    setImages([...tempImages]);
  }

  const Swap = (direction:number, i:number) => {
    const tempImages = images;
    let a=i;
    let b=i;

    if(direction == 1) {
      b += 1;
    } else {
      a -= 1;
    }
    [tempImages[a], tempImages[b]] = [tempImages[b], tempImages[a]]
    setImages([...tempImages]);
  }

  const Pictures = (props:any) => {
    return <>
      <div className='picwrap'>
        <img className='pict' src={props.url}/>
        <div className='edit'>
            <button className='left' onClick={function() {if(props.index > 0) {Swap(-1, props.index)}}}>Left</button>
            <button className='right' onClick={function() {if(props.index < images.length-1) {Swap(1, props.index)}}} >Right</button>
        </div>
      </div>
    </>;
  }

  return (
    <div id="wrapper">
      <button id="seed" onClick={LoadImages}>Seed</button>
      <div id="board">
        {
          Array.from(images).map((url, index) => (
            <Pictures key={index} url={url} index={index}/>
          ))
        }
      </div>
    </div>
  )
};

export default App;