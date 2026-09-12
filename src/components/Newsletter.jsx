import VectorPink from "../assets/decorations/Vector_pink.svg";

import EllipsePurple from "../assets/decorations/Ellipse_purple.svg";

function Newsletter() {
  return (
    <section className="newsletter">
      <img src={VectorPink} className="newsletter_vector top-left scroll-decoration" alt="" />
      <img src={VectorPink} className="newsletter_vector top-right scroll-decoration" alt="" />
      <img src={EllipsePurple} className="elipse-purple scroll-decoration" alt="" />
      <div className="container">

        <div className="newsletter_content">
          <h2 >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p >
            To make your stay special and even more memorable
          </p>

          <button className="newsletter_btn">
            Subscribe Now
          </button>
        </div>

        <div className="newsletter_footer">

          <div className="footer_column">
            <h4>Company</h4>

            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer_column">
            <h4>Terms & Policies</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Explore</a>
            <a href="#">Accessibility</a>
          </div>

          <div className="footer_column">
            <h4>Follow Us</h4>

            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>

          <div className="footer_column">
            <h4>Contact</h4>

            <p>1498w Fulton st, STE</p>
            <p>2D Chicago, IL 63867.</p>

            <p>(123) 456789000</p>

            <p>info@elementum.com</p>
          </div>

        </div>

        <p className="copyright">
          ©2023 Elementum. All rights reserved
        </p>

      </div>
    </section>
  );
}

export default Newsletter;