import { useEffect, useRef } from "react";
import EllipsePurple from "../assets/decorations/Ellipse_purple.svg";
import gsap from "gsap"
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
            entry.target.classList.add(
              entry.target.classList.contains("scroll-decoration") ? "is-visible" : "show"
            );
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      }
    );

    avatarRefs.current.forEach((avatar) => {
      if (avatar) observer.observe(avatar);
    });

    document.querySelectorAll(".scroll-decoration").forEach((decoration) => {
      observer.observe(decoration);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
      // GSAP timeline runs after component mounts
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(".pink-pill",
        { x: "-100%" },
        { x: "0%", duration: 2 }
      );

      tl.fromTo(".green-word",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" },
        "-=1"
      );

      tl.fromTo(".elipse-purple-hero",
        { rotation: 120, y: -24, opacity: 0, transformOrigin: "50% 50%" },
        { rotation: 180, y: 0, opacity: 1, duration: 1.5, transformOrigin: "50% 50%" }
      );
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
      <img src={EllipsePurple} className="elipse-purple-hero scroll-decoration is-visible" alt="" />
      <div className="container">

        <div className="hero_content">

          <h1 className="hero_title">
            
            The <span className="scribble-yel">thinkers
              <svg className="vector-yel scroll-decoration is-visible" viewBox="0 0 595 56" fill="none" aria-hidden="true">
                <path pathLength="1" d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6" />
              </svg>
            </span>
              and 
            <br />
            doers were <span className="pink-pill-wrap">changing 
              </span> the <span className="green-word"> status <span className="green-pill"></span> </span> Quo with
            
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