function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2>BREWLY</h2>

        <p>Copyright © 2026 Brewly ltd.</p>
        <p>All rights reserved.</p>

        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>

          <a href="#" aria-label="YouTube">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <h3>Company</h3>
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        <a href="#">Contact us</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>

      <div className="footer-contact">
        <h3>Contact Us For Product Tester</h3>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
          />

          <button type="submit" aria-label="Submit email">
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;