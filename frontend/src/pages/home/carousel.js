import React from 'react';

import banner01 from '../../assets/images/bookstore03.png';
import banner02 from '../../assets/images/bookstore02.png';
import banner03 from '../../assets/images/bookstore01.jpg';
import NavbarPosLogin from '../navbar-footer/logged-navbar';
import mg from '../../assets/images/mg03.png'
import mg2 from '../../assets/images/mg02.png'
import mg3 from '../../assets/images/berserk.jpg'
function Carousel() {
  return (
    <div>
      
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false" 
        
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mg}  style={{ height:'450px'}} className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src={mg2} style={{ height:'450px'}} className="d-block w-100" alt="banner2" />
          </div>
          <div className="carousel-item">
            <img src={mg3} style={{ height:'450px'}} className="d-block w-100" alt="banner3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

