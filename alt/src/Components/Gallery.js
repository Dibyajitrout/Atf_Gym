import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./Main.css";

export default function Gallery() {
  const [data,setData]=useState([]);
  const [open,setOpen]=useState({img:'',i:0})
  const [close,setClose]=useState(false);

  useEffect(()=>{
    fetch("http://localhost:6001/view")
    .then((result)=>{result.json()
    .then((resp)=>{setData(resp)
    })
    })
  },[])

  const viewImage = (img,i) =>{
      setOpen({img,i})
      setClose(false)
  }
  return (
    <>
    <div className='dark'>
{close?
    <div className='front-img'>
      <img src={open.img} alt='img.jpg' style={{margin:'auto',maxWidth:'70%',maxHeight:'70%'}}  />
      <button className='btn-x' onClick={()=>setClose(false)}>X</button>
    </div>
    :null}


      <div className='gallery-container'>
        <h1 className='gallery-head'>GALLERY<hr className='hr' /></h1>
        <div className='gallery-box' data-aos="flip-left">
        {data.map((item,i)=>(
            <div key={i} className='box-1'><Card className='card' style={{ width: '18rem' }}><Card.Img className='img' variant="top" src={"../images/"+item.img}  style={{ width: "100%", display: "block",cursor:'pointer' }} onClick={()=>viewImage(item,i)}  /></Card></div>
          ))}

        </div>
      </div>
      </div>
    </>
  )
}
