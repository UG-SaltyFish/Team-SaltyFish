import React from 'react';
import "./Footer.css";

export const Footer = () => (
  <div className = "main-footer">
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <h4>Swat Kats</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas tristique est eu leo ultricies condimentum.
          </p>
        </div>

        <div className = "col">
          <h4>Created by:</h4>
          <ul className = "list-unstyled">
            <li>Aneesh Chattaraj</li>
            <li>Dylan Stewart</li>
            <li>Ian Teh Jing Wen</li>
            <li>Ragav Narayanan</li>
            <li>Zhi Jie Siow</li>
          </ul>
        </div>
      </div>

      <div className = "row">
        <p className = "col-sm">
          &copy;{new Date().getFullYear()} Swat Kats | All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer;