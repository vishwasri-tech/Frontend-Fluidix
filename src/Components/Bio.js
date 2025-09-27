// import React from "react";
// import { Link } from "react-router-dom";
// import "./bio.css";

// // import images from assets
// import fb from "../assets/fb.png";
// import ig from "../assets/ig.png";
// import ln from "../assets/ln.png";
// import phoneIcon from "../assets/phone.png";   // ✅ New
// import mailIcon from "../assets/mail.png";     // ✅ New

// function Bio() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left Section - Logo & Social */}
//         <div className="footer-left">
//           <h2 className="footer-logo">
//             Fluidix <span>Pure Water Zero Hassle</span>
//           </h2>
//           <p className="footer-description">
//             Fluidix makes clean water simple and reliable. With easy rental plans and
//             trusted service, we ensure safe water for every need without the hassle.
//           </p>
//           <p className="social-text">Let's get social :</p>
//           <div className="social-icons">
//             <a
//               href="https://www.facebook.com/share/19KTo8DnGt/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={fb} alt="Facebook" className="social-img" />
//             </a>
//             <a
//               href="https://www.instagram.com/fluidix_in?igsh=MTdqNmlpaTFmbGI0NQ=="
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={ig} alt="Instagram" className="social-img" />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/fluidix25/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={ln} alt="LinkedIn" className="social-img" />
//             </a>
//           </div>
//         </div>

//         {/* Middle Section - Quick Links */}
//         <div className="footer-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/products">Products</Link></li>
//             <li><Link to="/plans">Plans</Link></li>
//             <li><Link to="/custom">Custom Products</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//           </ul>
//         </div>

//         {/* Right Section - Support */}
//         <div className="footer-support">
//           <h3>Support</h3>
//           <div className="support-item">
//             <img src={phoneIcon} alt="Phone" className="support-icon" />
//             <span>78160 59032, 98480 37623</span>
//           </div>
//           <div className="support-item">
//             <img src={mailIcon} alt="Email" className="support-icon" />
//             <a href="mailto:Crafted.Labs25@Gmail.Com">Crafted.Labs25@Gmail.Com</a>
//           </div>

//           <h3 className="address-heading">Address</h3>
//           <p>
//             9-6/53, Eswaripuri Colony,<br />
//             Nagram, Medchal–Malkagiri,<br />
//             Hyderabad, Telangana 500083
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Bio;





import React from "react";
import { Link } from "react-router-dom";
import "./bio.css";

// import images from assets
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import ln from "../assets/ln.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import logo from "../assets/footerlogo.png"; // ✅ NEW: Logo image

function Bio() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Social */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Fluidix Logo" className="footer-logo-img" />
            {/* <span className="footer-tagline">Pure Water Zero Hassle</span> */}
          </div>
          <p className="footer-description">
            Fluidix makes clean water simple and reliable. With easy rental plans and
            trusted service, we ensure safe water for every need without the hassle.
          </p>
          <p className="social-text">Let's get social :</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/19KTo8DnGt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="social-img" />
            </a>
            <a
              href="https://www.instagram.com/fluidix_in?igsh=MTdqNmlpaTFmbGI0NQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" className="social-img" />
            </a>
            <a
              href="https://www.linkedin.com/company/fluidix25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ln} alt="LinkedIn" className="social-img" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/custom">Custom Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Support */}
        <div className="footer-support">
          <h3>Support</h3>
          <div className="support-item">
            <img src={phoneIcon} alt="Phone" className="support-icon" />
            <a href="tel:7816059032">78160 59032</a>,{" "}
            <a href="tel:9848037623">98480 37623</a>
          </div>
          <div className="support-item">
            <img src={mailIcon} alt="Email" className="support-icon" />
            <a href="mailto:Crafted.Labs25@Gmail.Com">Crafted.Labs25@Gmail.Com</a>
          </div>

          <h3 className="address-heading">Address</h3>
          <p>
            9-6/53, Eswaripuri Colony,<br />
            Nagram, Medchal–Malkagiri,<br />
            Hyderabad, Telangana 500083
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Bio;

