import React, { useEffect, useState} from 'react';

import './Apparel.css';
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.png';
import SP25ShirtFront from '../images/Spring25_Shirt_Front.jpg'
import SP25HoodieFront from '../images/Spring25_Hoodie_Front.jpg'
import SP25HoodieBack from '../images/Spring25_Hoodie_Back.jpg'
import DTJShirtFront from '../images/DTJ_Shirt_Front.jpg'
import DTJShirtBack from '../images/DTJ_Shirt_Back.jpg'
import DTJCrewFront from '../images/DTJ_Crewneck_Front.jpg'
import DTJCrewBack from '../images/DTJ_Crewneck_Back.jpg'
import DTJSweats from '../images/DTJ_Sweatpants.jpg'

const Apparel = () => {

    const [SP25HoodFront, setHoodie25Img] = useState(SP25HoodieFront);
    const [DTJShFront, setDTJShImg] = useState(DTJShirtFront);
    const [DTJCrFront, setDTJCrImg] = useState(DTJCrewFront);
  
    const hoodie25HoverEnter = () => {
      setHoodie25Img(SP25HoodieBack);
    };

    const hoodie25HoverLeave = () => {
      setHoodie25Img(SP25HoodieFront);
    };

    const dtjShHoverEnter = () => {
      setDTJShImg(DTJShirtBack);
    };

    const dtjShHoverLeave = () => {
      setDTJShImg(DTJShirtFront)
    };

    const dtjCrHoverEnter = () => {
      setDTJCrImg(DTJCrewBack);
    };

    const dtjCrHoverLeave = () => {
      setDTJCrImg(DTJCrewFront)
    };

  return (
    <section className="apparel-section" id="apparel">
      <h1 className='shop-title title'>Apparel</h1>

      <h2>Spring 2025</h2>
      <div className="apparel-blocks">
        <div className="apparel-item">
          <img src={SP25ShirtFront} alt="Spring 2025 Shirt Front" className="sp25-apparel-cover"/>
          <div className="order-button">
            Order
          </div>
        </div>
        <div className="apparel-item">
          <img src={SP25HoodFront} alt="Spring 2025 Hoodie Front" className="sp25-apparel-cover"
          onMouseEnter={hoodie25HoverEnter} onMouseLeave={hoodie25HoverLeave}/>
          <div className="order-button">
            Order
          </div>
        </div>
      </div>

      <h2>DTJ</h2>
       <div className="apparel-blocks">
        <div className="apparel-item">
          <img src={DTJShFront} alt="DTJ Shirt Front" className="dtj-apparel-cover"
           onMouseEnter={dtjShHoverEnter} onMouseLeave={dtjShHoverLeave}/>
           <div className="order-button">
            Order
          </div>
        </div>
        <div className="apparel-item">
          <img src={DTJCrFront} alt="DTJ Crewneck Front" className="dtj-apparel-cover"
           onMouseEnter={dtjCrHoverEnter} onMouseLeave={dtjCrHoverLeave}/>
           <div className="order-button">
            Order
          </div>
        </div>
        <div className="apparel-item">
          <img src={DTJSweats} alt="DTJ Sweatpants" className="dtj-apparel-cover"/>
          <div className="order-button">
            Order
          </div>
        </div>
      </div>

      <div className="apparel-gallery">
        <div className="gallery-item">
          <img src={Image1} alt="ASA 2016 Apparel" className="apparel-image"/>
          <p className="image-caption">ASA 2016 Apparel</p>
        </div>
        <div className="gallery-item">
          <img src={Image2} alt="ASA 2016 Apparel" className="apparel-image"/>
          <p className="image-caption">ASA 2016 Apparel</p>
        </div>
        <div className="gallery-item">
          <img src={Image3} alt="Woodser 2017" className="apparel-image"/>
          <p className="image-caption">Woodser 2017</p>
        </div>
      </div>
    </section>
  );
}

export default Apparel;
