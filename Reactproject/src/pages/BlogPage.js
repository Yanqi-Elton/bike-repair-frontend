import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-header">
        <p className="section-kicker">BIKE LOVER BLOG</p>

        <h1>
          Stories from the <em>workshop.</em>
        </h1>

        <p>
          Repair stories, community workshops, and bicycle maintenance
          experiences from Bike Lover Workshop.
        </p>
      </section>

      <section className="blog-card-grid">

        <Link
          to="/blog/first-mobile-repair"
          className="blog-card"
        >
          <img
            src="/images/mobilerepair1.jpg"
            alt="Bike Lover mobile bicycle repair"
          />

          <div className="blog-card-content">
            <small>REPAIR STORY</small>

            <h2>My First Mobile Bike Repair</h2>

            <p>
              Taking Bike Lover Workshop on the road for my first mobile
              repair appointment.
            </p>

            <span className="blog-read-more">
              Read the story →
            </span>
          </div>
        </Link>


        <Link
          to="/blog/roadside-flat-repair-course"
          className="blog-card"
        >
          <img
            src="/images/flatrepair1.jpg"
            alt="Bike Lover roadside flat repair workshop"
          />

          <div className="blog-card-content">
            <small>COMMUNITY WORKSHOP</small>

            <h2>My First Roadside Flat Repair Course</h2>

            <p>
              Helping beginner riders learn how to handle one of cycling's
              most common roadside problems.
            </p>

            <span className="blog-read-more">
              Read the story →
            </span>
          </div>
        </Link>

      </section>
    </main>
  );
}

export default BlogPage;