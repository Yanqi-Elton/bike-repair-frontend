import "./App.css";

function App() {
  const services = [
    {
      name: "Basic Tune-Up",
      price: "$40",
      description: "General safety check, brake and gear adjustment, clean the disk or file rim brake's brake pads, and clean the chain and apply lubricant.",
    },
    {
      name: "Advanced Tune-Up",
      price: "$100",
      description: "General safety check, brake and gear adjustment, and quick inspection.",
    },
    {
      name: "Brake Adjustment",
      price: "$10",
      description: "Adjust front or rear brakes for better stopping performance.",
    },
    {
      name: "Gear Adjustment",
      price: "$15",
      description: "Tune shifting so the bike changes gears more smoothly.",
    },
    {
      name: "Flat Tire Repair",
      price: "$15",
      description: "Patch or inspect a flat tire. Tube replacement cost not included.",
    },
    {
      name: "Tube Replacement",
      price: "$25",
      description: "Replace inner tube and check tire condition.",
    },
    {
      name: "Chain Cleaning",
      price: "$20",
      description: "Clean and lubricate the chain for smoother riding.",
    },
    {
      name: "Full Bike Cleaning",
      price: "$40",
      description: "Clean frame, drivetrain, wheels, and basic components.",
    },
    {
      name: "Safety Check",
      price: "$15",
      description: "Quick inspection of brakes, tires, chain, bolts, and overall condition.",
    },
    {
      name: "Bikes Stand Rack",
      price: "$30",
      description: "Secure storage for your bikes when not in use.",
    },
    
  ];

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="badge">Family Bike Repair Service</p>
          <h1>Reliable Bike Repair at Home</h1>
          <p className="subtitle">
            Simple, affordable bicycle maintenance for everyday riders.
          </p>
          <p className="version">Version 1.0 - Azure AKS Deployment Demo</p>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <h2>Service Pricing</h2>
          <p>
            Choose the repair service you need. Prices are estimated and may vary
            depending on bike condition and replacement parts.
          </p>
        </section>

        <section className="pricing-grid">
          {services.map((service) => (
            <div className="card" key={service.name}>
              <div className="card-header">
                <h3>{service.name}</h3>
                <span>{service.price}</span>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        <section className="contact">
          <h2>Need help with your bike?</h2>
          <p>
            Contact us to book a repair appointment or ask about a specific issue.
          </p>
          <button>Contact Now</button>
        </section>
      </main>

      <footer>
        <p>© 2026 Family Bike Repair | Built with React and deployed to Azure AKS</p>
      </footer>
    </div>
  );
}

export default App;