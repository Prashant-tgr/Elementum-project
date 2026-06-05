import user1 from "../assets/images/testimonials/user1.png";
import user2 from "../assets/images/testimonials/user2.png";
import user3 from "../assets/images/testimonials/user3.png";
import user4 from "../assets/images/testimonials/user4.png";
import user5 from "../assets/images/testimonials/user5.png";
import user6 from "../assets/images/testimonials/user6.png";
import user7 from "../assets/images/testimonials/user7.png";
import user8 from "../assets/images/testimonials/user8.png";

function Testimonials() {
  const avatars = [
    {
      image: user1,
      size: 70,
      top: 1,
      left: 10,
    },
    {
      image: user2,
      size: 120,
      top: 100,
      left: 5,
    },
    {
      image: user3,
      size: 80,
      top: 120,
      right: 10,
    },
    {
      image: user4,
      size: 100,
      top: 0,
      right: 2,
    },
    {
      image: user5,
      size: 70,
      top: 250,
      right: 2,
    },
    {
      image: user6,
      size: 150,
      top: 400,
      right: 2,
    },
    {
      image: user7,
      size: 100,
      top: 400,
      left: 10,
    },
    {
      image: user8,
      size: 90,
      top: 200,
      left: 15,
    },
  ];

  return (
    <section className="testimonials">
    <div className="container" >
      <h2 className="testimonial-title">
        <span className="green-word">What</span> our customer says
        <span className="scribble-yel">About Us</span>
      </h2>
      {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.image}
            alt=""
            className={`bubble bubble-${index + 1}`}
            style={{
              width: `${avatar.size}px`,
              height: `${avatar.size}px`,
              top: `${avatar.top}px`,
              left:
                avatar.left !== undefined
                  ? `${avatar.left}%`
                  : "auto",
              right:
                avatar.right !== undefined
                  ? `${avatar.right}%`
                  : "auto",
            }}
          />
        ))}

      <div className="testimonials_card">
        <p>
          Elementum  delivered the site with inthe timeline
          as they requested. Inthe end, the client found a 50% 
          increase in traffic with in days since its launch. They
          also had an impressive ability to use technologies that
          the company hasn`t used, which have also proved to
          be easy to use and reliable
        </p>
      </div>
    </div>
    </section>
  );
}

export default Testimonials;