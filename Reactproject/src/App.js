import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const services = [
    { name: "Basic Tune-Up", price: "$40", description: "Safety check, brake and gear adjustment." },
    { name: "Advanced Tune-Up", price: "$100", description: "Full check, brake and gear adjustment, quick inspection." },
    { name: "Brake Adjustment", price: "$10", description: "Adjust front or rear brakes." },
    { name: "Gear Adjustment", price: "$15", description: "Tune shifting for smoother riding." },
    { name: "Flat Tire Repair", price: "$15", description: "Patch or inspect a flat tire." },
    { name: "Tube Replacement", price: "$25", description: "Replace inner tube and check tire condition." },
    { name: "Chain Cleaning", price: "$20", description: "Clean and lubricate chain." },
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
              {services.map((service) => (
                <div className="card" key={service.name}>
                  <div className="card-header">
                    <h3>{service.name}</h3>
                    <span>{service.price}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="container page">
          
          <h2>About Me</h2>
          <p>
            Hi, my name is Elton. I enjoy cycling, bike maintenance, and helping people keep
            their bikes safe and comfortable to ride.
          </p>
          <p>
            This project is also my personal cloud deployment project. I built it with React,
            Docker, GitHub Actions, Azure Container Registry, and Azure Container Apps.
          </p>
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
        <p>© 2026 Elton Bike Repair | React + Azure Cloud Project</p>
      </footer>
    </div>
  );
}

export default App;