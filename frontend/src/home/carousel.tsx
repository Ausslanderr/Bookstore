import banner01 from '../assets/images/banner01.jpg';
import banner02 from '../assets/images/banner2.jpg';
import banner03 from '../assets/images/banner3.jpg';


import deathStrandingBanner from '../assets/images/deathstranding.jpg';
import mariobros from '../assets/images/mariobros.jpg';
import redDead from '../assets/images/redDead.jpg';
import skyrim from '../assets/images/skyrim.jpg';
import sotn from '../assets/images/sotn.jpg';

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
            <img src={banner01} className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src={banner02} className="d-block w-100" alt="banner2" />
          </div>
          <div className="carousel-item">
            <img src={banner03} className="d-block w-100" alt="banner3" />
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

