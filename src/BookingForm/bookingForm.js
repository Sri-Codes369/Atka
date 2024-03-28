import React from 'react';
import { useState } from 'react';

// Component for the form
function BookingForm() {
  const [formData, setFormData] = useState({
    whereTo: '',
    howManyPersons: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const countries = ["India", "Russia", "USA", "US", "Japan", "UAE", "South Korea"]
  const startDateLimit = new Date()

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Perform validation for dates
    if (name === 'startDate') {
      const selectedStartDate = new Date(value);
      if (selectedStartDate < startDateLimit) {
        alert('Start date should be a future date');
        return;
      }
    } else if (name === 'endDate') {
      const selectedEndDate = new Date(value);
      const selectedStartDate = new Date(formData.startDate);
      if (selectedEndDate <= selectedStartDate) {
        alert('End date should be greater than the start date');
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.whereTo && formData.howManyPersons && formData.startDate && formData.endDate && formData.description) {
      alert('Booking successful');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div id="BookingSection" class="d-flex flex-column">
        <div id="BookingSectionHeader" class="w-100 text-center my-3">
            <h2 style={{color:'#0d6efd'}}><span style={{color:'orange'}}>B</span>ook</h2>
        </div>
       
       <div class="d-flex flex-row w-100">
       <section id='imageSection' class="img-section mx-3">
           <img src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg'/>
        </section>


        <section id="formSection" class="form-section mx-3">
        <form onSubmit={handleSubmit}>
      <div class="mb-3">
      <label class="form-label"> Where to:</label>
       
        <select name="whereTo" value={formData.whereTo} aria-label="Default select example" onChange={handleChange} class="form-select">
          <option value="" selected hidden>Select destination</option>
          {countries.map((item, index) => (
        <option value={item}>{item}</option>
        ))}
         
        </select>
      
      </div>


      <div class="mb-3">
      <label class="form-label">How Many Persons:</label>
      <input type="number" min='0' class="form-control" name="howManyPersons" value={formData.howManyPersons} onChange={handleChange} />
      </div>
      


      <div class="mb-3">
      <label class="form-label">Start Date:</label>
        <input type="date" class="form-control"  name="startDate" value={formData.startDate} onChange={handleChange} />
      </div>
      
      <div class="mb-3">
      <label class="form-label">End Date:</label>
        <input type="date" class="form-control" name="endDate" value={formData.endDate} onChange={handleChange} min={formData.startDate} />
      </div>
      
      <div class="mb-3">
      <label class="form-label">Description:</label>
        <textarea name="description" class="form-control" value={formData.description} onChange={handleChange} minLength={50} maxLength={500} />
      </div>
      
      <div class="SubmitBtnClass">
      <button type="submit" class="btn submit-btn btn-primary">Book Now</button>
      </div>
    </form>
        </section>
       </div>
    </div>
  );
}

export default BookingForm;
