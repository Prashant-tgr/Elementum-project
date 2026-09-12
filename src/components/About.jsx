import Vector_yel from "../assets/decorations/Vector-yel.svg";
import about1 from "../assets/images/about/about1.png";
import rectangle from "../assets/decorations/rectangle.svg";
import arrow from "../assets/icons/Arrow 4.svg";
function About() {
  return (
    <section className="about">
      <div className="about_glow"></div>
      <div className="container">

        <div className="split-layout">

          <div className="about_content">

            <h2 className="section-title">
              <span className="scribble-yel"> Tomorrow<img src={Vector_yel} alt="" className="vector-yel scroll-decoration" /> </span> should be better
              than <span className="green-word"> today </span>
            </h2>

            <p>
              We are a team of strategists, designers communicators, researchers.
Togeather, we belive that progress only happens when you refuse
to play things safe.
           </p>

          <a href="#" className="read-more">
            Read more
            <img src={arrow} alt="Arrow" className="arrow" />
          </a>

          </div>

          <div className="image-wrapper">
            <img className="red-shape scroll-decoration" src={rectangle} alt="" />

            <div className="about_image">
              <img src={about1} alt="Team meeting" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;