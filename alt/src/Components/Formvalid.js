import React, { useState } from 'react';
// import validator from 'validator';
import './Main.css';

const Formvalid = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [message, setMessage] = useState("");

  const collectData = async(e)=>{
    e.preventDefault();
    let result = await fetch("http://localhost:5000/form",{
      method: "post",
      body :JSON.stringify({name, email, phone, message}),
      headers:{
        'content-type':'application/json'
      },
    });
    result = await result.json;
    localStorage.setItem('formdatas',JSON.stringify(result))
  }

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //  setFormData(e.target.value);
  //  setMail(e.target.value);
  //  SetPhone(e.target.value);
  //  setMassage(e.target.value);
  //   // Clear validation error when user starts typing
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let result = await fetch("http://localhost:5000/form",{
  //     method:"post",
  //     body:JSON.stringify({formData}),
  //     headers :{
  //       'Content-type' : 'application/json'
  //     },
  //   });
  //   result = await result.json();
  //   localStorage.setItem("formdata",JSON.stringify(result));
  //   let newErrors = {};

  //   if (validator.isEmpty(formData.name)) {
  //     newErrors.name = 'Name is required';
  //   }

  //   if (!validator.isEmail(mail.email)) {
  //     newErrors.email = 'Invalid email';
  //   }

  //   if (!validator.isMobilePhone(phone.phone, 'any', { strictMode: false })) {
  //     newErrors.phone = 'Invalid phone number';
  //   }

  //   if (validator.isEmpty(massage.message)) {
  //     newErrors.message = 'Message is required';
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //   } else {
  //     // Form submission logic here
  //     console.log('Form submitted:', formData);
  //     // Reset form fields after submission
  //     setFormData({
  //       name: ''
  //     });
  //     setFormData({
  //       email: ''
  //     });
  //     SetPhone({
  //       phone: ''
  //     });
  //     setMassage({
  //       message: ''
  //     });
  //   }
  // };

  return (
    <>
    <div className='features'>
      <h2 className='text-center inq-form'>
      <span>ATF</span> INQUIRY FORM
      <hr  className='hr inq'/>
      </h2>
      <div className='formvalid'>
        <form onSubmit={collectData}>
          <div className='input-form'>
            <div>
              
              <input
                type="text"
                className='input'
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} */}
            </div>
            <div>
             
              <input
                type="email"
                className='input'
                id="email"
                name="email" 
                placeholder='Enter EmailID'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>} */}
            </div>

            <div>
              <input
                type="tel"
                className='input'
                id="phone"
                name="phone"
                placeholder='Enter Tel No'
                value={phone}
                onChange={(e) => SetPhone(e.target.value)}
                required
              />
              {/* {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>} */}
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                className='text'
                placeholder='Write Your Feedback ...!'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                
                required
              />
              {/* {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>} */}
            </div>
            <button className='btn3' type="submit">SUBMIT</button>
          </div>
        </form>

      </div>
    </div>
    </>
  );
};

export default Formvalid;
