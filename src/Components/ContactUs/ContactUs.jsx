import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us if you have any questions or concerns.
      </p>

      <form onSubmit={handleSubmit} className="contact-us-form">
        <table className="contact-us-table">
          <tbody>
            <tr>
              <td className="contact-us-td">Name:</td>
              <td className="contact-us-td">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-us-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="contact-us-td">Email:</td>
              <td className="contact-us-td">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-us-input"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="contact-us-td">Message:</td>
              <td className="contact-us-td">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-us-textarea"
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="contact-us-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;