import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              <span>Premium</span> Coffee
              <br />
              Bean Supplier
            </h1>

            <p>
              Partner with Brewly to access premium Arabica and Robusta beans
              sourced directly from trusted Indonesian farmers. We help cafés
              deliver unforgettable coffee experiences with consistent quality
              and reliable supply.
            </p>

            <Link to="/register" className="hero-button">
              Be Our Partner
            </Link>
          </div>

          <div className="hero-image">
            <img
              src="/assets/images/biji kopi pertama.png"
              alt="Premium coffee beans"
            />
          </div>
        </section>

        {/* Clients */}
        <section className="clients-section" id="clients">
          <div className="section-heading">
            <h2>Our Clients</h2>
            <p>
              Proudly supplying premium coffee beans to cafés across the region.
            </p>
          </div>

          <div className="client-logos">
            {[
              "logo 1.png",
              "logo 2.png",
              "logo 3.png",
              "logo 4.png",
              "logo 5.png",
              "logo 6.png",
              "logo 7.png",
            ].map((logo) => (
              <img
                key={logo}
                src={`/assets/images/${logo}`}
                alt="Brewly client"
              />
            ))}
          </div>
        </section>

        {/* Signature Bean */}
        <section className="signature-section" id="signature">
          <div className="signature-image">
            <img
              src="/assets/images/biji kopi kedua.png"
              alt="Gayo Aceh coffee beans"
            />
          </div>

          <div className="signature-content">
            <h2>Gayo Aceh</h2>
            <p>Rich chocolate notes with a smooth finish.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="section-heading">
            <h2>Trusted by Specialty Coffee Businesses</h2>
            <p>Testimonials from our partners</p>
          </div>

          <div className="testimonial-grid">
            {[
              {
                text: "Brewly has been our trusted supplier for over three years. The consistency and flavor profile are exceptional.",
                name: "The Artisan Cup",
                location: "Jakarta",
              },
              {
                text: "The quality of the beans has helped us create a signature espresso that our customers love.",
                name: "North Brew Coffee",
                location: "Bandung",
              },
              {
                text: "Fast delivery, excellent communication, and premium beans every time.",
                name: "Morning House",
                location: "Surabaya",
              },
            ].map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-icon"></div>

                <blockquote>"{testimonial.text}"</blockquote>

                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-location">
                  {testimonial.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <h2>
            Ready to Brew Something
            <br />
            Exceptional?
          </h2>

          <Link to="/register" className="cta-button">
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;