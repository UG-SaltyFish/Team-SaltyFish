import React, { Component } from 'react'
import axios from 'axios'
import TestCard from './TestCard'
import Cardflip from './Cardflip'
import { Container, Row, Col } from 'reactstrap';

import CarouselHomepage from './CarouselHomepage'
import Autosuggest from 'react-autosuggest';
import { Nav, Navbar, Dropdown} from 'react-bootstrap';
import { CarouselCard } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLanguage, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './landing.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from "./i18n/en";
import cn from "./i18n/cn";
import jp from "./i18n/jp";
import styled from 'styled-components';
import logo from './logo.svg';
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



class Landing extends Component {

  state = {
    users: [],
    names:[],
    value:'',
    suggestions:[]
  }


  // Teach Autosuggest how to calculate suggestions for any given input value.
getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : (this.state.names).filter(name =>
    name.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (suggestion, suggestionValue) => {
    console.log(suggestionValue.suggestion.email);
    const useremail = suggestionValue.suggestion.email;

    window.location.href = ("/public/" + useremail);
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

  getUserDetails = () => {
    axios.get('/users')
      .then((response) => {
        const data = response.data;
        this.setState({users : data});
        const names = data.map((item) => {
          return {
            name: item.name,
            email: item.email,
            image: item.profile_picture

          }
        });
        console.log(names);
        this.setState({names: names});
        
        console.log("Data has been received!");
      })
      .catch(() => {
        alert("error retreiving data!");
      });
  }


  componentDidMount = () => {
    this.getUserDetails();
  }

  cardchoice(props){
    if(props.num % 2 === 0){
      return <TestCard name  = {props.name} bio = {props.bio}/>
    }
    return <Cardflip name  = {props.name} bio = {props.bio}/>
  }

  displayUsers = (users) => {
    if(!users.length) return null;
    users = users.slice(3,8);
    return users.map((users, index) => (
      //<div key = {index}>
        //<h3>{users.name}</h3>
        //<p>{users.email}</p>
        //<p>{index}</p>
        <div class="row">            
          <div class="col-md-4"></div>
          <div class = "card-group " key = {index} >
            <this.cardchoice name  = {users.name} bio = {users.bio} num = {index}/>
          </div>
        </div>
      //</div>
    ))
  };

  render() {

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a name',
      value,
      onChange: this.onChange
    };





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
  <div className ="searchbar" style={{backgroundColor:"#99ceff"}}>
            <h2 className = "searchH2" >
              <Translate content="landing1"></Translate>
           
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          </h2>
          <h3  className = "searchH3">Directly hit via email:https://it-project-eportfolio.herokuapp.com/public/useremail</h3>
            
        </div>
      <div className = "page-wrapper">
        <CarouselHomepage/>

      

        

          <div style={{backgroundColor:"#99ceff"}}>
              <h2 className = "explH2" style={{margin:"auto"}}>
              <Translate content="landing2"></Translate>
              </h2>

              <div className = "cards" style={{marginLeft:"-80px"}} >
                  <Container >
                    <Row>
                    <Col>
                  
                  <div style={{backgroundColor:"#f2f2f2"}}>
                      <div class="container">
                          <FontAwesomeIcon icon = {faHandshake} size = "4x" className = "cimg" />
                          <h4 style={{color:"Black"}}><b><Translate content="landing3"></Translate></b></h4>
                          <br/>
                          <p>
                          <Translate content="landing4"></Translate>
                          </p>
                      </div>
                  </div>
                     
                  </Col>
                  <Col>
                
                  <div style={{backgroundColor:"#f2f2f2"}} >
                      <div class="container">
                          <FontAwesomeIcon icon = {faUserPlus} size = "4x" className = "cimg" />
                          <h4 style={{color:"Black"}}><b><Translate content="landing5"></Translate></b></h4>
                          <br/>
                          <p>
                          <Translate content="landing6"></Translate>
                          </p>
                      </div>
                  </div>
                
                  </Col>
                  <Col>
                  
                  <div style={{backgroundColor:"#f2f2f2"}}> 
                      <div class="container">
                          <FontAwesomeIcon icon = {faLanguage} size = "4x" className = "cimg" />
                          <h4 style={{color:"Black"}}><b><Translate content="landing7"></Translate></b></h4>
                          <br/>
                          <p>
                          <Translate content="landing8"></Translate>
                          </p>

                      </div>
                  </div>
                 
                  </Col>
                  </Row>
                  </Container>
              </div>
            </div>
      </div>
      </div>
    )
  }
}

export default Landing