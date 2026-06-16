import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [flippedCard, setFlippedCard] = useState(null);
  const services = [
    {
    name: "Basic Tune-Up",
    price: "$50",
    flip: true,
    featured: true,
    image: "/images/tuneup1.jpg",
    description: "Safety check, brake and gear adjustment.",
    details: [
      "Brake check and adjustment",
      "Gear indexing",
      "Tire pressure check",
      "Brake Pad Inspection and Sanding",
      "Bolt safety check",
      "Quick test ride"
    ]
    },
    // { name: "Basic Tune-Up", price: "$40", description: "Safety check, brake and gear adjustment." },
    {
    name: "Advanced Tune-Up",
    price: "$100",
    flip: true,
    featured: true,
    image: "/images/tuneup1.jpg",
    description: "Full check, brake and gear adjustment, quick inspection.",
    details: [
      "Everthing in Basic Tune-Up, plus:",
      "Wheel truing on the wheel truing stand",
      "Drivetrain complete cleaning",
    ]
    },
    // { name: "Advanced Tune-Up", price: "$100", description: "Full check, brake and gear adjustment, quick inspection." },

    { name: "Hydraulic Bleed", price: "$30", flip: false, description: "Remove air bubbles from hydraulic brake line." },
    { name: "Truing Wheel", price: "$20", flip: false,description: "Make sure the wheel is properly aligned." },
    { name: "Housing Replacement", price: "$20", flip: false,description: "Changing brake housing or derailleur housing." },
    { name: "Brake Adjustment", price: "$10", flip: false,description: "Adjust front or rear brakes." },
    { name: "Gear Adjustment", price: "$15", flip: false, description: "Tune shifting for smoother riding." },
    { name: "Flat Repair", price: "$10", flip: false, description: "Replace new inner tube or inspect a flat tire." },
  ];

  return (
    <div className="app">
      <section className="hero">
            {/* <div>
              <h1>Bike Lover Workshop</h1>
              <p>Affordable bike repair, tune-up, and maintenance from my home workshop.</p>
              <p className="version">Version 2.0 - Deployed with GitHub Actions + Azure</p>
            </div> */}
            <img src="/images/homepicture.JPG" alt="Bike Repair Logo" className="logo" />
            <div className="nav-buttons">
              <button onClick={() => setPage("home")}><b> Services </b></button>
              <button onClick={() => setPage("about")}><b>About Me</b></button>
              <button onClick={() => setPage("ride")}><b>Social Ride</b></button>
            </div>
          </section>
      {page === "home" && (
        <>
          <section className="container">
            <h2>Service Pricing</h2>
            <div className="pricing-grid">
              {/* {services.map((service) => (
                <div className="card" key={service.name}>
                  <div className="card-header">
                    <h3>{service.name}</h3>
                    <span>{service.price}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              ))} */}
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`card ${service.featured ? "featured-card" : ""} ${
                    service.flip && flippedCard === service.name ? "flipped" : ""
                  }`}
                  onClick={() => {
                    if (service.flip) {
                      setFlippedCard(
                        flippedCard === service.name ? null : service.name
                      );
                    }
                  }}
                >
                  <div className="card-inner">

                    <div className="card-front">
                      <div className="card-header">
                        <h3>{service.name}</h3>
                        <span>{service.price}</span>
                      </div>
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.name}
                          className="service-image"
                        />
                      )}

                      <p>{service.description}</p>

                      {service.flip && (
                        <div className="details-link">
                          <p>Click for Details →</p>
                        </div>
                      )}
                    </div>

                    <div className="card-back">
                      <h3>{service.name}</h3>

                      <ul>
                        {service.details?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="container page">
          
          <h2>About Me</h2>

  <div className="about-card">
    <img src="/images/selfie1.jpg" alt="Elton" className="about-photo" />

    <div className="about-text">
      <h3>Hi, I’m Elton.</h3>
      <p>
        I have been passionate about cycling and bike maintenance for many years.
        My bike repair journey started in 2022 at the University of Ottawa Bike Coop,
        where I learned basic mechanics and enjoyed helping fellow cyclists keep their
        bikes running smoothly.
      </p>
      <p>
        What I loved most was the welcoming environment — people could come in,
        chat, learn, and work on their bikes together.
      </p>
    </div>
  </div>

  <div className="about-card reverse">
    <img src="/images/selfie2.jpg" alt="Elton working with bikes" className="about-photo" />

    <div className="about-text">
      <h3>From hobby to hands-on experience</h3>
      <p>
        As my interest grew, I gained experience with Bushtukah, worked as a Bicycle
        Technician at Decathlon, and later joined Tunes On Wheels. These opportunities
        helped me develop my mechanical skills while working with riders of all levels.
      </p>
      <p>
        Bike Lover Workshop combines my love of cycling, community, and bicycle repair.
        My goal is to provide affordable, honest, and reliable service while helping more
        people enjoy riding their bikes.
      </p>
    </div>
  </div>

  <div className="tech-note">
    <p>
      This website is also my personal cloud deployment project, built with React,
      Docker, GitHub Actions, Azure Container Registry, and Azure Container Apps.
    </p>
  </div>
        </section>
      )}

      {page === "ride" && (
        <section className="container page">
          <h2>Nearby Social Ride</h2>
          <p>
            I would like to create a friendly local cycling community for casual group rides.
          </p>
          <div className="ride-card">
            <h3>Weekend Easy Ride</h3>
            <p>Distance: 20–40 km</p>
            <p>Pace: Beginner friendly</p>
            <p>Focus: Safety, fun, and meeting local riders</p>
          </div>
        </section>
      )}

      <footer>
        <p>© 2026 Elton's Bike Lover Workshop </p>
      </footer>
    </div>
  );
}

export default App;