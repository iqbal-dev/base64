import logo from './logo.svg';
import './App.css';
import Tickets from './Tickets';
import { useState } from 'react';

function App() {
  const[baseImage,setBaseImage] = useState("")
  const imageUpload = async (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    const base64 = await convertBase64(file);
    setBaseImage(base64)
    console.log(base64);
  }

  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = (error) => {
        reject(error);
      } 
    })
  }
  return (
    <div className="App">
      <input onChange={(e) => {
        imageUpload(e)
      }} type="file" name="image" id="image" />
      <br />
      <img src={baseImage} height="150" width="150px"alt=""/>
    </div>
  );
}

export default App;
