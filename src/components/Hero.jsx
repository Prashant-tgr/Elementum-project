import { useEffect, useRef } from "react";
import Vector_yel from "../assets/decorations/Vector-yel.svg";
import EllipsePurple from "../assets/decorations/Ellipse_purple.svg";

import avatar1 from "../assets/images/hero/avatar1.png";
import avatar2 from "../assets/images/hero/avatar2.png";
import avatar3 from "../assets/images/hero/avatar3.png";
import avatar4 from "../assets/images/hero/avatar4.png";
import avatar5 from "../assets/images/hero/avatar5.png";
import avatar6 from "../assets/images/hero/avatar6.png";
import avatar7 from "../assets/images/hero/avatar7.png";
import avatar8 from "../assets/images/hero/avatar8.png";

function Hero() {

  const avatarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    avatarRefs.current.forEach((avatar) => {
      if (avatar) observer.observe(avatar);
    });

    return () => observer.disconnect();
  }, []);

  const avatars = [
    {
      image: avatar1,
      size: 120,
      top: 120,
      left: "0%",
    },
    {
      image: avatar2,
      size: 110,
      top: 60,
      left: "12%",
    },
    {
      image: avatar3,
      size: 125,
      top: 0,
      left: "30%",
    },
    {
      image: avatar4,
      size: 100,
      top: 120,
      left: "45%",
    },
    {
      image: avatar5,
      size: 130,
      top: 40,
      left: "58%",
    },
    {
      image: avatar6,
      size: 110,
      top: 80,
      left: "72%",
    },
    {
      image: avatar7,
      size: 125,
      top: 20,
      left: "86%",
    },
    {
      image: avatar8,
      size: 110,
      top: 110,
      left: "95%",
    },
  ];

  return (
    <section className="hero">
      <img src={EllipsePurple} className="elipse-purple-hero" alt="" />
      <div className="container">

        <div className="hero_content">

          <h1 className="hero_title">
            
            The <span className="scribble-yel">thinkers
             <img src={Vector_yel} alt="Scribble" className="vector-yel" />
            </span> and 
            <br />
            doers were <span className="pink-pill">changing
              </span> the <span className="green-word"> status </span> Quo with
            
          </h1>

          <p className="hero_description">
            We are a team of strategists, designers communicators,
            researchers. Together, we belive that progress only
            happens when you refuse to play things safe.
          </p>

          <div className="hero_avatars">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.image}
                alt={`Avatar ${index + 1}`}
                className="avatar"
                ref={(el) => (avatarRefs.current[index] = el)}
                style={{
                  width: `${avatar.size}px`,
                  height: `${avatar.size}px`,
                  top: `${avatar.top}px`,
                  left: avatar.left,
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;