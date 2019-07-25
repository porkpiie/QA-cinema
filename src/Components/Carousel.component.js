import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";

export default class Carousel1 extends Component{
  render(){
  return(
  <Carousel autoPlay>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="caro" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="caro"/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="caro"/>
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="caro"/>
      <p className="legend">Legend 4</p>
    </div>
    </Carousel>
);
  }
}
