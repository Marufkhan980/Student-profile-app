import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page refresh
    console.log('Submitted Information:', formData);
    alert('Form submitted successfully! Check the console for details.');
  };

  return (
    <div className="form-container">
      <h3>Contact Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;