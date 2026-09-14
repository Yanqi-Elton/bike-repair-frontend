import { Link } from "react-router-dom";

function FlatRepairCourse() {
  return (
    <main className="blog-article-page">

      <Link to="/blog" className="contact-submit blog-back-button">
    ← Back to Blog
    </Link>

      <article className="blog-article">

        <p className="section-kicker">COMMUNITY WORKSHOP</p>

        <h1>My First Roadside Flat Repair Course</h1>

        <p className="blog-meta">
          Bike Lover Workshop · Ottawa · 2026
        </p>

        <img
          src="/images/flatrepair1.jpg"
          alt="Roadside flat repair bicycle workshop"
          className="blog-article-image"
        />

        <p className="blog-lead">
          I hosted my first beginner roadside flat repair course to help local
          riders become more confident when dealing with one of the most common
          problems in cycling: a flat tire.
        </p>

        <h2>What we learned</h2>

        <p>
          The workshop covered removing the wheel, using tire levers, removing
          the inner tube, inspecting the tire, installing a replacement tube,
          inflating the tire, and reinstalling the wheel correctly.
        </p>
<img
          src="/images/flatrepair2.jpg"
          alt="Roadside flat repair bicycle workshop"
          className="blog-article-image"
        />
        <h2>Why this skill matters</h2>

        <p>
          A flat tire can happen almost anywhere. Knowing how to replace an
          inner tube can turn a ride-ending problem into a short roadside repair.
        </p>
<img
          src="/images/flatrepair3.jpg"
          alt="Roadside flat repair bicycle workshop"
          className="blog-article-image"
        />
        <h2>Hands-on practice</h2>

        <p>
          Riders practiced using their own bikes and basic tools so they could
          become more confident handling a flat away from home.
        </p>

      </article>
    </main>
  );
}

export default FlatRepairCourse;