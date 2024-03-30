import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle';


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {


  

  const [LoginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });


  
  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...LoginFormData, [name]: value });
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., send data to backend)
    const hardcodedCredentials = {
      email: 'user@atka.com',
      password: 'atka123'
    };

    // Check if input credentials match hardcoded ones
    if (
      LoginFormData.loginEmail == hardcodedCredentials.email &&
      LoginFormData.loginPassword == hardcodedCredentials.password
    ) {
      console.log(LoginFormData)
      setIsLoggedIn(true);
      
      const closeButton = document.querySelector('#loginFormModal .btn-close');
      if (closeButton) {
        closeButton.click();
      }

    //   const modal = document.getElementById('loginFormModal');
    //   console.log(modal)
    // const modalInstance = bootstrapBundle.Modal.getInstance(modal);
    // modalInstance.hide();
      
    } else {
      console.log(LoginFormData)
      alert('Invalid credentials');
    }
  };


  const [formData, setFormData] = useState({
    fullname: '',
    contact: '',
    dob: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to backend)
    console.log(formData);
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateContact = (contact) => {
    // Check if contact is exactly 10 digits
    return /^\d{10}$/.test(contact);
  };


  return (


    <><nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">Atka</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" role="button">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" role="button">Book</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Packages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item">United State</a></li>
                <li><a class="dropdown-item">India</a></li>
                <li><a class="dropdown-item">France</a></li>
                <li><a class="dropdown-item">Germany</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" role="button">Services</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" role="button">Gallery</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" role="button">About</a>
            </li>

          </ul>

          <form class="d-flex">
            <button type="button" class="btn btn-auth mx-1" data-bs-toggle="modal" data-bs-target="#loginFormModal">Login</button>
            <button type="button" class="btn btn-auth" data-bs-toggle="modal" data-bs-target="#registerFormModal">Register</button>
          </form>

        </div>
      </div>
    </nav>
    
    
    <div class="modal fade" id="registerFormModal" tabindex="-1" aria-labelledby="registerFormModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="registerFormModalLabel">Registeration Form</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
          {!validateContact(formData.contact) && <div className="text-danger">Contact number must be 10 digits</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          {!validateEmail(formData.email) && <div className="text-danger">Invalid email address</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div className="mt-3">
        <a data-bs-toggle="modal" data-bs-target="#loginFormModal" href='/login'>Already have an account? Login here</a>
      </div>
    </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div> */}
    </div>
  </div>
</div>


<div class="modal fade" id="loginFormModal" tabindex="-1" aria-labelledby="loginFormModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="loginFormModalLabel">Login Form</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
     
      <form onSubmit={handleLoginFormSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input type="loginEmail" className="form-control" id="loginEmail" name="loginEmail" value={LoginFormData.loginEmail} onChange={handleLoginFormChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" name="loginPassword" value={LoginFormData.loginPassword} onChange={handleLoginFormChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="mt-3">
        <a  data-bs-toggle="modal" data-bs-target="#registerFormModal"  href='/register'>Don't have an account? Register here</a>
      </div>
    </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div> */}
    </div>
  </div>
</div>

    
    </>
  );
};

export default Navbar;
