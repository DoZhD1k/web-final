import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are dedicated to providing high-quality products and services.
      </p>

      <table className="about-us-table">
        <tbody>
          <tr>
            <th className="about-us-th">Our Mission</th>
            <td className="about-us-td">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
          </tr>
          <tr>
            <th className="about-us-th">Our Team</th>
            <td className="about-us-td">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
          </tr>
          <tr>
            <th className="about-us-th">Contact Information</th>
            <td className="about-us-td">
              Address: Almaty, Kazakhstan<br />
              Phone: +7 (701) 577 03 55<br />
              Email: chereshnikovarlen03@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutUs;
