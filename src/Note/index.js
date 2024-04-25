import Slider from "react-slick";
import { PiNoteFill } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Notes = () => {
  const mobileSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    dots: true,
  };

  return (
    <>
      <div className="small-notes">
        <div className="note-container">
          <PiNoteFill className="note1" />
          <h1 className="library">My Saved Library 1</h1>
          <p className="dm">dd-mm-yyyy</p>
        </div>
        <div className="note-container">
          <PiNoteFill className="note2" />
          <h1 className="library">My Saved Library 2</h1>
          <p className="dm">dd-mm-yyyy</p>
        </div>
        <div className="note-container">
          <PiNoteFill className="note3" />
          <h1 className="library">My Saved Library 3</h1>
          <p className="dm">dd-mm-yyyy</p>
        </div>
        <div className="note-container">
          <PiNoteFill className="note4" />
          <h1 className="library">My Saved Library 4</h1>
          <p className="dm">dd-mm-yyyy</p>
        </div>
        <div className="note-container">
          <PiNoteFill className="note5" />
          <h1 className="library">My Saved Library 5</h1>
          <p className="dm">dd-mm-yyyy</p>
        </div>
      </div>

      <div className="note-slider-container-mobile">
        <Slider {...mobileSettings}>
          <div className="mobile-note-container">
            <PiNoteFill className="mobile-note1" />
            <h1 className="mobile-library">My Saved Library 1</h1>
            <p className="mobile-dm">dd-mm-yyyy</p>
          </div>
          <div className="mobile-note-container">
            <PiNoteFill className="mobile-note2" />
            <h1 className="mobile-library">My Saved Library 2</h1>
            <p className="mobile-dm">dd-mm-yyyy</p>
          </div>
          <div className="mobile-note-container">
            <PiNoteFill className="mobile-note3" />
            <h1 className="mobile-library">My Saved Library 3</h1>
            <p className="mobile-dm">dd-mm-yyyy</p>
          </div>
          <div className="mobile-note-container">
            <PiNoteFill className="mobile-note4" />
            <h1 className="mobile-library">My Saved Library 4</h1>
            <p className="mobile-dm">dd-mm-yyyy</p>
          </div>
          <div className="mobile-note-container">
            <PiNoteFill className="mobile-note5" />
            <h1 className="mobile-library">My Saved Library 5</h1>
            <p className="mobile-dm">dd-mm-yyyy</p>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Notes;
