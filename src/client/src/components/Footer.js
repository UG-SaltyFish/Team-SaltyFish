import React from 'react';
import "./Footer.css";
import Translate from 'react-translate-component';

export const Footer = () => (
  <div className = "main-footer">
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <h4>Swat Kats</h4>
          <h4>Salty Fish</h4>
        </div>

        <div className = "col">
          <h4><Translate content='createdby'style={{paddingright:"400px"}}></Translate></h4>
          <ul className = "list-unstyled">
            <li>Aneesh Chattaraj</li>
            <li>Dylan Stewart</li>
            <li>Ian Teh Jing Wen</li>
            <li>Ragav Narayanan</li>
            <li>Zhi Jie Siow</li>
          </ul>
        </div>
        <div className = "col">
          <h4><Translate content='extendedby'></Translate></h4>
          <ul className = "list-unstyled">
            <li>Jiaxin Mo</li>
            <li>Jingjin Li</li>
            <li>Xiaoyue Liu</li>
            <li>Chengyu Zhang</li>
            <li>Zihan Ye</li>
          </ul>
        </div>
        </div>

      <div className = "row">
        <p className = "col-sm">
          &copy;{new Date().getFullYear()} Swat Kats | Salty Fish | All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer;