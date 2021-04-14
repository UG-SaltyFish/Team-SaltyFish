import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import { Button, Image, Row} from 'react-bootstrap';
import icon from './registerImage.svg';



import { Nav, Navbar, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './logo.svg';
import NavigationBar from "./NavigationBar";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import Footer from "./Footer"
import en from "./i18n/en";
import cn from "./i18n/cn";
import jp from "./i18n/jp";
import "./Footer.css";

//Translation
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('cn',cn);
counterpart.registerTranslations('jp',jp);
counterpart.setLocale('en');


const Styles = styled.div
`
  .navbar { background-color: #365; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000000;
    &:hover { color: #365; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000000;
    &:hover { color: #365; }
  }
  .dropdown-center {
    position: absolute !important;
    left: 50%;
    right: 50%;
  }
  .color-nav {
      background-color : rgb(255,255,255);
  }
`;




class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image:null,
      password: '',
      password2: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      image: this.state.image,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post('/register', newUser)
      .then(res => {this.props.history.push("/login");})
      .catch(err => this.setState({ errors: err.response.data }));
    
 
  }

  switchtoen = () => {
  
    counterpart.setLocale('en')
 
  };
  switchtocn = () => {
    
    counterpart.setLocale('cn');

  };
  switchtojp= () => {
    
    counterpart.setLocale('jp')

  };


  render() {
    

    return (
      <div className="register">
        <Styles>  
    <Navbar className = "color-nav" expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item style={{paddingRight:"4px"}}><Nav.Link href="/register" style={{borderStyle:"solid", borderRadius:"8px", borderWidth:"thin", color:"#17a2b8"}}><Translate content='register'></Translate></Nav.Link></Nav.Item>
 
 <Nav.Item style={{paddingRight:"4px"}}><Nav.Link href="/login" style={{borderStyle:"solid", borderRadius:"8px", borderWidth:"thin", color:"#17a2b8"}}><Translate content='login'></Translate></Nav.Link></Nav.Item>
 <Nav.Item>
 <Dropdown style={{size:"50px"}}>
       <Dropdown.Toggle variant = "outline-info" id = "dropdown-basic"  style={{borderStyle:"solid", borderRadius:"8px", borderWidth:"thin", }}>
           Language Options
       </Dropdown.Toggle>

       <Dropdown.Menu>
           <Dropdown.Item href="" onClick={this.switchtoen}>English</Dropdown.Item>
           <Dropdown.Item href="" onClick={this.switchtocn}>Chinese</Dropdown.Item>
           <Dropdown.Item href="" onClick={this.switchtojp}>Japanese</Dropdown.Item>
       </Dropdown.Menu>
 </Dropdown>
 </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
        <div style={{backgroundColor:"#fff", padding:"10px"}}>
          <div className = "row">
            <h1 className="display-4 mx-auto mt-3"><Translate content='Createacc'></Translate></h1>
            </div>
            <div>
              <h1>{this.state.errors}</h1>
            </div>
          <div className="row align-self-center nr-1">
            <div className="col align-self-center d-none d-lg-block">
              <div className="col-md-10 m-auto">
                <Image src={icon} fluid />
              </div>
            </div>
            <div className="col align-self-center nl-1">
              <div className="col-md-12 m-auto">
                
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames('form-control form-control-lg')}
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames('form-control form-control-lg')}
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                   

                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames('form-control form-control-lg')}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                   
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames('form-control form-control-lg')}
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <Button variant="info" type="submit" size="lg" block>
                  <Translate content='submit'></Translate>
                    </Button>
                    
                    <Row>
                      <a href="/login" className="small mx-auto mt-2">
                      <Translate content='registerfa'></Translate>
                      </a>
                    </Row>
                  
                </form>
              </div>
            </div>
          </div>
          
        </div>
        <div className = "main-footer">
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <h4>Swat Kats</h4>
          <p>
          <Translate content='info'></Translate>
          </p>
        </div>

        <div className = "col">
          <h4><Translate content='createdby'></Translate></h4>
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
      </div>
    );
  }
}

export default Register;