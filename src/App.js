import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {

   const [ip,setip]=useState({});

   const clicked = () => {
   // const form = document.querySelector('form');

    let a=document.querySelector('#ida').value;
    let b=document.querySelector('#idb').value;
    let c=document.querySelector('#idc').value;
    let d=document.querySelector('#idd').value;
    let e=document.querySelector('#ide').value;
   // const data = new FormData(event.target);

   // const value = data.get('email');

  //  console.log({ value });

    const obj = {
      name:a,
      branch:b,
      usn:c,
      college:d,
      year:e
    }
  setip(obj);
  }



  return (
     <div className="App">
      <input id="ida" placeholder="name" />
          <input id="idb" placeholder="branch" />
          <input id="idc" placeholder="usn" />
          <input id="idd" placeholder="college" />
          <input id="ide" placeholder="year" />
           <button id="sub" onClick={clicked}>Submit</button> <br></br>
           {ip.name} <br></br>
           {ip.branch} <br></br>
           {ip.usn} <br></br>
           {ip.college} <br></br>
           {ip.year}

    </div>
  );
}

export default App;