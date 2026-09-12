import Vector_yel from "../assets/decorations/Vector-yel.svg";
import triangle from "../assets/decorations/triangle.svg";
import about2 from "../assets/images/progress/about2.png";
import redvector from "../assets/decorations/Vector 2517.svg";
import arrow from "../assets/icons/Arrow 4.svg";
function Progress() {
  return (
    <section className="progress">
      <div className="container">
        <img src={redvector} alt="" className="progress-vector scroll-decoration" />
        <div className="split-layout">

          <div className="image-wrapper">
              
              <img src={triangle} alt="" className="triangle triangle-top scroll-decoration"/>
              
          <div className="progress_image">
            <img src={about2} alt="Team working together" />
          </div>
           
              <img src={triangle} alt="Triangle decoration" className="triangle triangle-bottom scroll-decoration" />
              
          </div>

          <div className="progress_content">
            <h2 className="section-title">
              <span className="green-word"> See </span> how we can help you <span className="scribble-yel">progress<img src={Vector_yel} alt="Scribble" className="vector-yel scroll-decoration" /></span>
            </h2>

            <p>
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#" className="read-more">
              <span>Read more</span>
      
              <img src={arrow} alt="Arrow" className="arrow" />
            </a>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Progress;