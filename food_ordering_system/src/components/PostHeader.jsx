import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
export default function PostHeader() {

  return (
      <div className="container-fluid">
      <div className= "row">
      <div className= "col p-0">
       {/* have to apply one more image here */}
       {/* <img
        className="d-flex w-40"
        src={img4}
        alt="First slide"
      /> */}
      </div>
    <div className= "col p-1">

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={img2}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Food kart</h3>
        <p>The secret of success in life is to eat what you like and let the food fight it out inside</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d- block w-40"
        src={img1}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Food kart</h3>
        <p>Your diet is a bank account. Good food choices are good investments</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Food kart</h3>
        <p>If you cant' feed a hundred people, then just feed one</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div className="col p-1">
        {/* have to apply one more image here */}
        {/* <img
        className="d-block w-40 "
        src={img5}
        alt="First slide"
      /> */}
  </div>
  </div>
  </div>
  )
}
