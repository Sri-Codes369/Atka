import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
   return(
    <section className="footer-section">
         <div className="footer-brand-name">
            <h2>Atka</h2>
            {/* <h6 style={{color:'#0d6efd'}}><span style={{color:'orange'}}>Since </span>2010</h6> */}
            <ul class="social-media-list">
    <li><a ><SlSocialInstagram></SlSocialInstagram></a></li>
    <li><a ><FaFacebookF></FaFacebookF></a></li>
    <li><a ><FaXTwitter></FaXTwitter></a></li>
</ul>
            <p>&copy; 2024 Atka. All rights reserved.</p>
          </div>
    </section>
   )
}

export default Footer;