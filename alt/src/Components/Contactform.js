import React, { useState } from 'react';

function Contactform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.subject = 'Plz Fill your Subject';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Here you can submit the form data
      console.log(formData);
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      
      {formSubmitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className='center'>
        <div className='form-box'>
        <h2 className='con-text'>Contact <hr className='hr' /></h2>
          <div>
            <input
              type="text"
              name="name"
              className='con-box'
              placeholder='Enter Name'
              value={formData.name}
              onChange={handleChange}
            />
            
          </div>
          <div className='error'>{errors.name && <span>{errors.name}</span>}</div>
          <div>
            <input
              type="tel"
              name="phoneno"
              placeholder='Enter phone-no'
              className='con-box'
              value={formData.email}
              onChange={handleChange}
            />
            
          </div>
          <div className='error'>{errors.email && <span>{errors.email}</span>}</div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder='Enter Subject'
              className='con-box'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className='error'>{errors.subject && <span>{errors.subject}</span>}</div>
          <div>
            <textarea
              name="message"
              placeholder='Type your message here....'
              className='msg-box'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className='con-btn' type="submit">Submit</button>
          </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contactform;
