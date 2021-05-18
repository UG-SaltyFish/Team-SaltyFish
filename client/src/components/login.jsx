import React, { Component } from 'react';
import {GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { Button, Image, Col, Row,Modal} from 'react-bootstrap';
import icon from './loginImage.svg';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, setUserLoading, setUserNotLoading, gooLoginUser, fbLoginUser, refreshTokenSetup,fbrefreshTokenSetup } from "../actions/authActions";


import classnames from "classnames";
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

import FacebookLogin from 'react-facebook-login';


//Translation
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('cn',cn);
counterpart.registerTranslations('jp',jp);
counterpart.setLocale('en');

//Google login 
const googleClientId = '996695088450-8vihibptuoco1cqafe0mpsvqdmp48fhu.apps.googleusercontent.com';
const appId = '277936307150836'

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


class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      showmessage:false,
      can: false,
      realpassword:'',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange =this.onChange.bind(this);
  }
  switchtoen = () => {
  
    counterpart.setLocale('en')
 
  };
  onSubmitEmail = (e) => {
    e.preventDefault();
    const mail = this.state.email;
    console.log(mail)
    axios.get('/getpassword/'+mail).then(res=>
      {this.setState({realpassword:res.data.password});})
    console.log(this.state.realpassword);
    var password = this.state.realpassword;
    var toUser={
      mail: this.state.email,
      pass: password,
    }
    console.log(toUser);
    axios.post('/sendmail/',toUser);
  }
  
  
  switchtojp= () =>{

  };
  switchtojp= () => {
    
    counterpart.setLocale('jp')

  };
  
  //Google Login
  onSuccess = (res) => {
    //console.log('[Login Success] currentUser:', res.profileObj);
    const googleUser = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      password: res.profileObj.googleId
    };
  
    this.props.gooLoginUser(googleUser);
    this.props.setUserLoading();
  
    refreshTokenSetup(res);
  };
  onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };
  

  callback = (res) => {
    console.log(res);
    const fbUser = {
          name: res.name, //res.profileObj.name
          email: res.email, //res.profileObj.email
          password: res.id,   //res.profileObj.googleId
        };
      
        this.props.fbLoginUser(fbUser);
        this.props.setUserLoading();
      
        fbrefreshTokenSetup(res);
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        
        this.props.history.push("/profile");
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
      this.props.setUserNotLoading();
    }

    if (this.props.auth.errors === "Incorrect Email or Password") {
      console.log(this.props.auth.errors);
      this.setState({
          errors: this.props.auth.errors
      });
      this.props.auth.errors="";
    }else if (this.props.auth.errors === "Email already registered"){
      console.log(this.props.auth.errors);
      this.setState({
          errors: this.props.auth.errors
      });
      this.props.auth.errors="";
    };
  }

  onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
  
    // Redirect is handled by the redux action loginUser so we don't need to use this.props.history
    this.props.loginUser(userData);
    this.props.setUserLoading();
  };
  
  showmessageModal = () => {
    this.setState({ showmessage: true });
  };
  hidemessageModal = () => {
    this.setState({ showmessage: false });
  };

  render() {
   
    return (
      
      <div className="login">
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
            <h1 className="display-4 mx-auto"><Translate content='welcome'></Translate> </h1>

          </div>
          <div className="row">
            <h1 className="display-4 mx-auto">{this.state.errors}</h1>
          </div>

          <div className="container h-50">
          <div className="row h-100 justify-content-center align-items-center">
              <h2 style={{color:'red', paddingBlock:'10px'}}>{this.state.message}</h2>
            </div>
          </div>

          <div className="row mt-5 align-self-center">
          <div className="col align-self-center d-none d-lg-block">
              <div className="col-md-8 m-auto">
                <Image src={icon} fluid />
              </div>
            </div>
            <div className="col align-self-center">
              <div className="col-md-12 m-auto">
                <p className="lead text-center">
                <Translate content='login'></Translate>
                </p>

                  <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.email}
                     
                      type="email"
                      className={classnames("form-control")}
                      placeholder="Email Address"
                      name="email"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                  
                    type="password"
                    className={classnames("form-control")}
                      placeholder="Password"
                      name="password"
                      required
                      
                      
                    />

                    

                    
                  </div>
                  <Row>
                      <Col>
                        <Button variant="info" type="submit" size="lg" block>
                        <Translate content='login'></Translate>
                        </Button>  
                      </Col>
                    
                    </Row>
                    
                    <div>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText="GOOGLE LOGIN"
                        theme={"dark"}
                        size={"large"}
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                      />

{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                      {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                      <FacebookLogin
                          appId={appId} // appId of our application registered on Facebook developer platform
                          textButton="FACEBOOK LOGIN"
                          typeButton={"button"}
                          size={"small"}
                          theme={"light"}
                          cssClass="kep-login-facebook"
                          fields="name,email,picture"
                          autoLoad={false}
                          //icon={}
                          //containerStyle={}
                          //buttonStyle={}
                          callback={this.callback}
                          uxMode={"redirect"}
                          redirectUri={"https://it-project-eportfolio.herokuapp.com/"} // if backend is finished, we could change redirect URL to "http://localhost:3000/profile"
                          cookiePolicy={'single_host_origin'}
                      />
                    
                    
                    
                      
                    </div>

                    



                   








                    <Row >
                      <a herf='/login' onClick={this.showmessageModal}  className="small mx-auto mt-2">
                      <Translate content='forgetpassword'></Translate>

                      </a>
                      
                    </Row>

                    <Modal show={this.state.showmessage}>
                    <Modal.Header closeButton onClick={this.hidemessageModal}></Modal.Header>
                    <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='message'></Translate> </h2>
                    <form>
                     <input onChange={this.onChange}
                      value={this.state.email}
                      type="text"
                      className={("form-control")}
                      placeholder="email address"
                      name="email"
                      style={{width: '200px',textAlign: 'center'}}
                          
                          required autoFocus 
                    />
                  
                    <button type="submit" onClick = {this.onSubmitEmail} style={{alignContent: 'center', paddingBlock:'10px' }}> <Translate content='submit'></Translate></button>
                  </form>
                </Modal>
                    
                      

                  
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
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  gooLoginUser: PropTypes.func.isRequired,
  fbLoginUser: PropTypes.func.isRequired,
  refreshTokenSetup: PropTypes.func.isRequired,
  fbrefreshTokenSetup: PropTypes.func.isRequired,
  setUserLoading: PropTypes.func.isRequired,
  setUserNotLoading: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
  };
  
  // This maps the state that we get from the Redux store to the props for this component
  const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
  });
  
  export default connect(
  mapStateToProps,
  { loginUser, setUserLoading, setUserNotLoading, gooLoginUser, fbLoginUser, refreshTokenSetup, fbrefreshTokenSetup }
  )(Login);
