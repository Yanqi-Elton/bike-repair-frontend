import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import FirstMobileRepair from "./pages/FirstMobileRepair";
import FlatRepairCourse from "./pages/FlatRepairCourse";

function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith("/blog");
  const navigate = useNavigate();
  const goToPage = (pageName) => {
  navigate("/");
  setPage(pageName);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  const services = [
    {
    name: "Basic Tune-Up",
    price: "$50",
    flip: true,
    featured: true,
    // image: "/images/tuneup1.jpg",
    image: "/images/tuneup3.jpg",
    description: "Safety check, brake and gear adjustment.",
    details: [
      "Brake check and adjustment",
      "Gear indexing",
      "Tire pressure check",
      "Brake Pad Inspection and Sanding",
      "Bolt safety check",
      "Headset and bottom bracket check",
      "Quick test ride"
    ]
    },
    // { name: "Basic Tune-Up", price: "$40", description: "Safety check, brake and gear adjustment." },
    {
    name: "Advanced Tune-Up",
    price: "$100",
    flip: true,
    featured: true,
    image: "/images/tuneupclean.jpg",
    description: "Full check, brake and gear adjustment, drivetrain cleaning, offer pickup service.",
    details: [
      "Everthing in Basic Tune-Up, plus:",
      "Wheel truing on the wheel truing stand",
      "Drivetrain complete cleaning",
      "Headset and Bottom Bracket regreasing",
      "Brake pad cleaning, sanding if needed",
    ]
    },
    // { name: "Advanced Tune-Up", price: "$100", description: "Full check, brake and gear adjustment, quick inspection." },

    { name: "Hydraulic Bleed", price: "$30", flip: false, description: "Remove air bubbles from hydraulic brake line." },
    { name: "Truing Wheel", price: "$20", flip: false,description: "Make sure the wheel is properly aligned." },
    { name: "Housing Replacement", price: "$20", flip: false,description: "Changing per brake housing or derailleur housing." },
    { name: "Brake Adjustment", price: "$10", flip: false,description: "Adjust front or rear brakes." },
    { name: "Gear Adjustment", price: "$15", flip: false, description: "Tune shifting for smoother riding， truing hanger and index gears." },
    { name: "Flat Repair", price: "$10", flip: false, description: "Replace new inner tube or inspect a flat tire." },
    { name: "Install Chain or Cassette", price: "$15", flip: false,description: "Install a new chain or cassette." },
    { name: "General Labor", price: "$60/hour", flip: false, description: "Hourly rate for general labor." }
  ];
  const featuredServices = services.filter((service) => service.featured);
  const miniServices = services.filter((service) => !service.featured);
  const handleContactSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const bikeType = formData.get("bikeType");
  const service = formData.get("service");
  const message = formData.get("message");

  const subject = encodeURIComponent(
      `Bike Repair Request from ${firstName} ${lastName}`
    );

    const body = encodeURIComponent(
      `Hi Elton,

  I would like to ask about a bicycle repair.

  Name: ${firstName} ${lastName}
  Email: ${email}
  Phone: ${phone}
  Bike type: ${bikeType}
  Service requested: ${service}

  Message:
  ${message}`
    );

    window.location.href =
      `mailto:bikeloverworkshop@gmail.com?subject=${subject}&body=${body}`;
  };
  const openBookingPage = (serviceName = "") => {
    setSelectedService(serviceName);
    setPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    
    <div className="app">
{/*       
      <section className="hero">
            {/* <div>
              <h1>Bike Lover Workshop</h1>
              <p>Affordable bike repair, tune-up, and maintenance from my home workshop.</p>
              <p className="version">Version 2.0 - Deployed with GitHub Actions + Azure</p>
            </div> */}
            {/* <img src="/images/homepicture.JPG" alt="Bike Repair Logo" className="logo" />
            <div className="nav-buttons">
              <button onClick={() => setPage("home")}><b> Services </b></button>
              <button onClick={() => setPage("about")}><b>About Me</b></button>
              <button onClick={() => setPage("ride")}><b>Social Ride</b></button>
            </div>
          </section> */} 
      <header className="site-header">
        <div className="brand">
          <img
            src="/images/logo.png"
            alt="Bike Lover Workshop Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <span className="brand-name">Bike Lover Workshop</span>
            <span className="brand-location">Ottawa Bicycle Service</span>
          </div>
        </div>

        <nav className="main-nav">
          <button onClick={() => goToPage("home")}>
            Services
          </button>

          <button onClick={() => goToPage("about")}>
            About Me
          </button>

          <button onClick={() => goToPage("contact")}>
            Contact
          </button>

          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </nav>
      </header>

      {!isBlogRoute && page === "home" && (
      <>
        <section className="workshop-hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-label">
                BY APPOINTMENT ONLY — BOOK BEFORE DROPPING OFF
              </span>

              <h1>
                Your Bike
                <em> My Care</em>
              </h1>

              <p>
                Friendly and affordable bicycle repair in Ottawa
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-action"
                  onClick={() => openBookingPage()}
                >
                  Book a Service →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="info-strip">
          <article>
            <span className="info-icon">⌖</span>

            <div>
              <h3>Riverside South, Ottawa, Ontario</h3>
              <p>
                Serving Ottawa and surrounding communities by appointment.
              </p>
            </div>
          </article>

          <article>
            <span className="info-icon">◷</span>

            <div>
              <h3>Turnaround Time</h3>
              <p>
                Most standard services are completed within 2–5 business days.
              </p>
            </div>
          </article>

          <article>
            <span className="info-icon">$</span>

            <div>
              <h3>Transparent Pricing</h3>
              <p>
                You will be contacted before any additional work begins.
              </p>
            </div>
          </article>
        </section>

        <main>
          <section className="packages-section">
            <p className="section-kicker">SERVICE PACKAGES — 2026</p>

            <h2>Service Packages</h2>

            <p className="section-intro">
              Choose a package based on how much care your bike currently needs.
            </p>

            <div className="package-grid">
              {featuredServices.map((service, index) => (
                <article className="package-card" key={service.name}>
                  <div className="package-top">
                    <span className="package-level">
                      {index === 0 ? "ESSENTIAL SERVICE" : "COMPLETE SERVICE"}
                    </span>

                    {index ===0 && (
                      <span className="popular-label">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="package-image"
                    />
                  )}

                  <div className="package-title-row">
                    <h3>{service.name}</h3>
                    <strong>{service.price}</strong>
                  </div>

                  <p>{service.description}</p>

                  <ul>
                    {service.details?.map((detail) => (
                      <li key={detail}>✓ {detail}</li>
                    ))}
                  </ul>

                  <a
                    type="button"
                    className="package-book-link"
                    onClick={() => openBookingPage(service.name)}
                  >
                    Book this service →
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* <section className="individual-services">
            <div className="service-heading">
              <div>
                <p className="section-kicker">
                  INDIVIDUAL SERVICES
                </p>

                <h2>Just need one thing done?</h2>
              </div>

              <a href="#booking">Request a service →</a>
            </div>

            <div className="service-list">
              {miniServices.map((service) => (
                <div className="service-row" key={service.name}>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>

                  <strong>{service.price}</strong>
                </div>
              ))}
            </div>
          </section> */}
          <section className="individual-services">
          <div className="service-heading">
            <div>
              <p className="section-kicker">INDIVIDUAL SERVICES</p>
              <h2>
                Just need <em>one thing done?</em>
              </h2>

              <p className="service-heading-description">
                Individual services are available on their own or as additions to a
                tune-up package.
              </p>
            </div>
          </div>

          <div className="service-list">
            {miniServices.map((service) => (
              <div className="service-row" key={service.name}>
                <div className="service-row-text">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <strong>{service.price}</strong>
              </div>
            ))}
          </div>
        </section>

          <section className="process-section">
            <p className="section-kicker">HOW IT WORKS</p>

            <h2>Book, drop off, ride again.</h2>

            <div className="process-grid">
              <article>
                <span>01</span>
                <h3>Send a Request</h3>
                <p>
                  Tell me about your bike, the issue, and your preferred date.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Confirm the Service</h3>
                <p>
                  I will confirm the service, estimated cost, and drop-off time.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Repair and Updates</h3>
                <p>
                  I complete the work and contact you about unexpected findings.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Pick Up and Ride</h3>
                <p>
                  Collect your bike and get back on the road.
                </p>
              </article>
            </div>
          </section>

          <section className="booking-area" id="booking">
            <p className="section-kicker">READY TO BOOK?</p>

            <h2>Book a bicycle service.</h2>

            <p>
              Include your bike type, requested service, preferred date,
              and a short description of the issue.
            </p>

            <a
              className="booking-button"
              onClick={() => openBookingPage()}
            >
              Send a Booking Request →
            </a>
          </section>
        </main>
      </>
    )}

      {!isBlogRoute && page === "about" && (
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

      {!isBlogRoute && page === "contact" && (
        <main className="contact-page">
          <section className="contact-hero">
            <div className="contact-hero-content">
              <p className="contact-kicker">GET IN TOUCH</p>

              <h1>
                I’d love to hear
                <em> from you.</em>
              </h1>

              <p className="contact-introduction">
                Have a question about a repair, service package, or bicycle issue?
                Send me a message and I will respond personally.
              </p>
            </div>

            <div className="contact-rings" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>

          <section className="contact-info-strip">
            <article>
              <div className="contact-info-icon">✉</div>

              <div>
                <small>RESPONSE TIME</small>
                <h3>Usually within 2 business days</h3>
              </div>
            </article>

            <article>
              <div className="contact-info-icon">⌖</div>

              <div>
                <small>BASED IN</small>
                <h3>Riverside South, Ottawa, Ontario, Canada</h3>
              </div>
            </article>
          </section>
{/* 
          <section className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33655.318252311255!2d-75.71544210223934!3d45.27248331298931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde31762c5d007%3A0x96cb3e9dd2362d4d!2s1078%20Lunar%20Glow%20Cres%2C%20Ottawa%2C%20ON%20K4M%200J8!5e0!3m2!1sen!2sca!4v1785428139305!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Bike Lover Workshop Location"
            />
          </section> */}


          
          <section className="contact-content">
            <div className="contact-form-column">
              <p className="section-kicker">CONTACT FORM</p>

              <h2>
                Send me <em>a message.</em>
              </h2>

              <p className="contact-form-intro">
                Tell me about your bicycle and the help you need. Please include
                as much information as possible so I can provide a useful response.
              </p>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-name-row">
                  <label>
                    <span>First name</span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                    />
                  </label>

                  <label>
                    <span>Last name</span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>

                <label>
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Optional"
                  />
                </label>

                <div className="contact-name-row">
                  <label>
                    <span>Bike type</span>

                    <select name="bikeType" defaultValue="">
                      <option value="" disabled>
                        Select a bike type
                      </option>
                      <option>Road bike</option>
                      <option>Mountain bike</option>
                      <option>Gravel bike</option>
                      <option>Hybrid bike</option>
                      <option>Commuter bike</option>
                      <option>Kids bike</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    <span>Service</span>

                    <select name="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Basic Tune-Up</option>
                      <option>Advanced Tune-Up</option>
                      <option>Hydraulic Bleed</option>
                      <option>Wheel Truing</option>
                      <option>Housing Replacement</option>
                      <option>Brake Adjustment</option>
                      <option>Gear Adjustment</option>
                      <option>Flat Repair</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>How can I help?</span>
                  <textarea
                    name="message"
                    rows="8"
                    placeholder="Describe the bicycle, the problem, and your preferred appointment date."
                    required
                  />
                </label>

                <button type="submit" className="contact-submit">
                  Prepare Email →
                </button>

                <p className="contact-form-note">
                  Submitting this form opens your email application. Review the
                  message and press Send to deliver it to Elton.
                </p>
              </form>
            </div>

            <aside className="contact-sidebar">
              <article className="contact-help-card">
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63562.3017792463!2d-75.71413466500533!3d45.246105993292645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde3a3e68a77d5%3A0x32642ebe14267b12!2sBikeLover!5e0!3m2!1sen!2sca!4v1788531291112!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Bike Lover Workshop Location"
            />
              </article>
              <article className="contact-help-card">
                <small>APPOINTMENTS</small>
                <h3>Ready to book a repair?</h3>
                <p>
                  Include your bicycle type, requested service, preferred date,
                  and a short description of the issue.
                </p>
                <a href="mailto:bikeloverworkshop@gmail.com">
                  Email directly →
                </a>
              </article>

              <article className="contact-help-card">
                <small>PRICING</small>
                <h3>Not sure which service you need?</h3>
                <p>
                  Describe the symptoms and I can recommend the most suitable
                  service before you drop off the bike.
                </p>
                <a type="button" onClick={() => setPage("home")}>
                  View service pricing →
                </a>
              </article>

              
            </aside>
          </section>
        </main>
      )}
      <Routes>
        <Route path="/blog" element={<BlogPage />} />

        <Route
          path="/blog/first-mobile-repair"
          element={<FirstMobileRepair />}
        />

        <Route
          path="/blog/roadside-flat-repair-course"
          element={<FlatRepairCourse />}
        />
      </Routes>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Bike Lover Workshop</h3>
            <p>Local bicycle repair in Riverside South, Ottawa.</p>
          </div>

          <div className="footer-contact">
            <p>1078 Lunar Glow Cres, K4M 0J8, Riverside South, Ottawa, Ontario</p>

            <p>
              <a href="tel:+12898925980">289-892-5980</a>
              <span> • </span>
              <a href="mailto:bikeloverworkshop@gmail.com">
                bikeloverworkshop@gmail.com
              </a>
            </p>

            <p>Service by Appointment Only</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Bike Lover Workshop
        </div>
      </footer>
    </div>
  );
}

export default App;
