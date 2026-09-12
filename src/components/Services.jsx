import Vector_yel from "../assets/decorations/Vector-yel.svg";
import redvector from "../assets/decorations/Vector 2517.svg";
import arrow from "../assets/icons/Arrow 4.svg";
function Services() {
  const services = [
    {
      subtitle: "Office of multiple interest content",
      title: "Collaborative & Partnership",
    },
    {
      subtitle: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      subtitle: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <section className="services">
      <img src={redvector} alt="" className="services-vector scroll-decoration" />
      <div className="container">
        
        <h2>

          What we <span className="green-word"> can <br/></span> <span className="scribble-yel">
            offer <img src={Vector_yel} alt="" className="vector-yel scroll-decoration" /></span> you!
        </h2>

        <div className="services_list">
          {services.map((service) => (
            <div
              className="service-row"
              key={service.title}
            >
              <p>{service.subtitle}</p>

              <h3>{service.title}</h3>

              <img src={arrow} alt="Arrow" className="services-arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;