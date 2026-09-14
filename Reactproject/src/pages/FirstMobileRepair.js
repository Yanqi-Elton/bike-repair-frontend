import { Link } from "react-router-dom";

function FirstMobileRepair() {
    return (
        <main className="blog-article-page">

            <Link to="/blog" className="contact-submit blog-back-button">
                ← Back to Blog
            </Link>

            <article className="blog-article">

                <p className="section-kicker">REPAIR STORY</p>

                <h1>My First Mobile Bike Repair</h1>

                <p className="blog-meta">
                    Bike Lover Workshop · Ottawa · 2026
                </p>

                <img
                    src="/images/mobilerepair1.jpg"
                    alt="Bike Lover mobile bicycle repair"
                    className="blog-article-image"
                />

                <p className="blog-lead">
                    One of my goals with Bike Lover Workshop is to make bicycle repair
                    convenient and approachable for local riders. My first mobile repair
                    gave me the opportunity to bring my tools and repair experience
                    directly to a customer.
                </p>

                <h2>Preparing for the repair</h2>

                <p>
                    Mobile repair requires more preparation than working from my home workshop. Before leaving, I need to understand the bicycle type, the reported problem, and which tools or replacement parts may be required.
                    For most individual repairs, I recommend bringing the bicycle to my workshop. This allows me to work with my complete set of tools and equipment and makes it easier to handle unexpected issues that may be discovered during the repair.
                </p>

                <h2>Working away from the workshop</h2>

                <p>
                    Mobile service can be particularly convenient for customers who have multiple bicycles. For example, if a household has two or three bikes that need servicing, transporting all of them to my workshop may not be practical. Depending on the type of repairs required and the location, I may be able to come to the customer instead.
                    Working on a bike away from my normal workshop was a great learning experience. It taught me how important organization and preparation are when I cannot simply walk over to the toolbox for another tool.

                </p>
                <img
                    src="/images/mobilerepair2.jpg"
                    alt="Bike Lover mobile bicycle repair"
                    className="blog-article-image"
                />
                <h2>What I learned</h2>

                <p>
                    The experience helped me improve the questions I ask customers before an appointment. Knowing the bicycle type, number of bikes, required services, and symptoms ahead of time helps me determine whether a workshop appointment or mobile service is the better option.
                    Bike Lover Workshop will continue to operate primarily by appointment from my home workshop, while mobile repair may be available depending on the customer's request, the number of bicycles, the type of repair, and location. Please contact me in advance to discuss the best option for your bikes.

                </p>

            </article>
        </main>
    );
}

export default FirstMobileRepair;