//API Key =Sna6Rr4MCQI3P3emXJI6965hFTLzZI86

import './App.css';
import { useState, useEffect} from 'react';
import Form from './components/DisplayGiph/Form/Form';
import DisplayGiph from './components/DisplayGiph/DisplayGiph';




function App() {
  const API_KEY = "Sna6Rr4MCQI3P3emXJI6965hFTLzZI86"
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  const [gif, setGif] = useState(null);

  //make API call and update giph on app load
  const getRandomGif = async () =>{
    const response = await fetch(URL)
    const gifData = await response.json()
    setGif(gifData); //giph = giphData
  }

  //get giph from user input
  const getGifFromInput = async (searchTerm)=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`)
    const gifData = await response.json()
    setGif(gifData);

  }


  useEffect(()=>{getRandomGif()},[]);
  // getRandomGif()
  return (
    
    <div className="App">
      <h1>Let's Get Random!</h1>
      <Form getGifFromInput={getGifFromInput}/>
      <DisplayGiph giph={gif}/>

    </div>
  );
}

export default App;
