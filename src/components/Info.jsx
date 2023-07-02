import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Info() {
  return (
    <div className="outer-container">
      <main>
        <img src="./Rectangle-90.png" />

        <div className="person-info">
          <h2>Laura Smith</h2>
          <h3 className="role">Frontend Developer</h3>
          <h4>
            <a>laurasmith.website</a>
          </h4>
        </div>

        <div className="contact-btn">
          <button className="email-btn">
            <i className="fa-solid fa-envelope"></i>Email
          </button>
          <button className="linkedin-btn">
            <i className="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </div>

        <div className="about-section">
          <About />
        </div>

        <div className="interest-section">
          <Interests />
        </div>

        <div className="footer-section">
          <Footer />
        </div>
      </main>
    </div>
  );
}
