// import "./Footer.css"; // Optional: To add custom styles

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              ALL IN ONE
            </h5>
            <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam pariatur voluptate dolores sint quam dolorem sit? Itaque mollitia facilis doloribus.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Quick Links
            </h5>
            <p>
              <a
                href="#home"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </p>
            <p>
              <a
                href="#about"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="#contact"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </a>
            </p>
            <p>
              <a
                href="#services"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Services
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <a
              href="#"
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="btn btn-info btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="btn btn-danger btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="#"
              className="btn btn-dark btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">
              © 2024 Copyright:{" "}
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                YourWebsite.com{" "}
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-center text-md-right">Designed by Darshit Prajapati</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
