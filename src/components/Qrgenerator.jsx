import React, { useRef, useState } from 'react';
import './Qr_generator.css'; 

const Qrgenerator = () => {

  const inputref=useRef();
  const [qrcodeurl,setqrcoderul]=useState('');

  const search=async(val)=>
  {
  if(!val)
  { 
    alert('Enter the text/URL');
    return;
  }
  
  const qrapiurl=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`

  try{
    const response =await fetch(qrapiurl);

    if(response.ok)
    {
      setqrcoderul(qrapiurl);
    }
    else
    {
      alert('Error in generating the qr code');
    }
  }
  catch(error)
  {
console.log("Error fetching qr code")
  }

  };

  

  return (
    <div className='container'>
      <p>Enter the text/URL to generate QR</p>
      <input ref={inputref} type='text' placeholder='Text/URL' />
      
      <div className={`imgBox ${qrcodeurl ? 'show-img' : ''}`}>
        {qrcodeurl && <img src={qrcodeurl} id="qrimage" alt='QR Code' />}
      </div>
  
      <button onClick={() => search(inputref.current.value)}>Generate</button>
    </div>
  );
  
}

export default Qrgenerator;
