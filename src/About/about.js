function About() {
    return(
        <section className="about-us">
        <div className="about-us-section">
          {/* Left Section with Image */}
          <div className="about-us-image-section">
            <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="Company Image" />
          </div>
          {/* Right Section with Company Information */}
          <div className="about-us-info-section">
            <h2>Atka</h2>
            <h6 style={{color:'#0d6efd'}}><span style={{color:'orange'}}>Since </span>2010</h6>
            <p>
              Our company aims to provide affordable solutions that cover all your basic needs.
            </p>
            <p>With our wide availability, we ensure that our services reach most places.</p>
            <p> We are dedicated to excellence and strive to be the best at what we do.</p>
          </div>
        </div>
      </section>
    )
}

export default About;