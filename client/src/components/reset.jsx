import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import { Button, Image, Row} from 'react-bootstrap';
import icon from './registerImage.svg';

import decode from 'jwt-decode';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './logo.svg';
import logo1 from './logo1.svg';
import NavigationBar from "./NavigationBar";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import Footer from "./Footer"
import en from "./i18n/en";
import cn from "./i18n/cn";
import jp from "./i18n/jp";
import "./Footer.css";

import { Container, Col } from 'reactstrap';

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

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Get UserACC and set as default (display name and email only)
  componentWillMount(){

    const user = this.props.auth.user;
    console.log(user);

    axios
      .get('/user/' + user)
      .then(res=>{
        this.setState({
          user:res.data,
          id:res.data.id,
          name:res.data.name,
          email:res.data.email
        });
      });

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {

    e.preventDefault();

    const id = this.props.auth.user;
    const updatedUser = {
      id: this.state.user._id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    
    axios
      .post('/user/' + id + '/update',updatedUser)
      .then(res => {
        this.setState({
          email:res.data.email,
          name:res.data.name
        });
      })
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
      <div className="reset">
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
        <img
          src={logo1}
          width="125"
          height="125"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        
 
 <Nav.Item style={{paddingRight:"4px"}}><Nav.Link href="/login" style={{borderStyle:"solid", borderRadius:"8px", borderWidth:"thin", color:"#17a2b8"}}><Translate content='profile'></Translate></Nav.Link></Nav.Item>
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
            <h1 className="display-1 mx-auto mt-1"><font color="#338DFF"><Translate content='Resetacc'></Translate></font></h1>
          </div>
          <div className="row">
            <h1 className="display-10 mx-auto mt-10"><font size="5.5" color="grey"> <Translate content='instruction'></Translate> </font></h1>
          </div>

          <div className="container h-50">
          <div className="row h-100 justify-content-center align-items-center">
              <h2 style={{color:'red', paddingBlock:'10px'}}>{this.state.errors}</h2>
            </div>
          </div>
     

            <div className="container h-100">
            
            <div className="row h-100 justify-content-center align-items-center">
  
            <div className="col-5">
                <form noValidate onSubmit={this.onSubmit}>
                 <div className="form-group">
                    <input
                      type="text"
                      className={classnames('form-control form-control-lg')}
      
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
          
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames('form-control form-control-lg')}
                      
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                   
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames('form-control form-control-lg')}
                      placeholder="New Password"
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
                    
                    
                  
                </form>
                </div>
             </div>    
          </div>
        </div>

        <div className = "main-footer">
    <div className = "container">
      <div className = "row">
        <div className = "col"style={{paddingRight:"300px"}}>
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
      </div>
    );
  }
}

Reset.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
        
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
  });
        
export default connect(mapStateToProps)(Reset);