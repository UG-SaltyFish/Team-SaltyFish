import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {connect} from 'react-redux';
import { Modal} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Footer from './Footer.js';
import logo from './logo.svg';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import "./profile_pic.css";
import "./css/default.css";
import "./css/fonts.css";
import "./css/layout.css";
import "./css/magnific-popup.css";
import "./css/media-queries.css";
import en from "./i18n/en";
import cn from "./i18n/cn";
import jp from "./i18n/jp";

//Translation
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('cn',cn);
counterpart.registerTranslations('jp',jp);
counterpart.setLocale('en');
class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro:'',
      email: '',
      name: '',
      bio: '',
      skills: [],
      subjects: [],
      education: [],
      gallery: [],
      projects:[],
      website: '',
      phone: '',
      selectedFile: null,
      profilePicture: '',
      transcript: '',
      showAdd:false,
      showlang:false,
      addsubjectname:'',
      addsubjectyear:'',
      addsubjectdescripition:'',
      addgallerydescription:'',
      showintro:false,
      addintro:'',
      addinfo:'',
      showskills:'',
      showedu:false,
      addschoolname:'',
      addqual:'',
      showwork:false,
      addworkplace:'',
      addposition:'',
      addfrom:'',
      addto:'',
      showproject:false,
      addprojectname:'',
      addprojectdescripition:'',
      addprojectlink:'',
      showphone:false,
      lang:'en'
    };
  this.onChange =this.onChange.bind(this);
  
}
switchtoen = () => {
  
  counterpart.setLocale('en')
  this.setState({showlang:false});
};
switchtocn = () => {
  
  counterpart.setLocale('cn');
  this.setState({showlang:false});
};
switchtojp= () => {
  
  counterpart.setLocale('jp')
  this.setState({showlang:false});
};
showLanguage =() => {
this.setState({showlang:true});
};
hideLanguage =() => {
  this.setState({showlang:false});
  };
onChange = (e) => {
  
  this.setState({[e.target.name]: e.target.value});
}
   
  componentDidMount() {
    axios
        .get('/profile2/'+(this.props.match.params.user))
        .then(res=>{
          this.setState({email:res.data[0].email,
                         name:res.data[0].name,
                         bio:res.data[0].bio,
                         intro:res.data[0].intro,
                         skills:res.data[0].skills,
                         work:res.data[0].work,
                         projects:res.data[0].projects,
                         subjects:res.data[0].subjects,
                         gallery:res.data[0].gallery,
                         projects:res.data[0].projects,
                         education:res.data[0].education,
                         website:res.data[0].website,
                         phone:res.data[0].phone,
                         profilePicture: res.data[0].profile_picture,
                         transcript: res.data[0].transcript,
                         imgHash: Date.now()
                        });
          })
    
}
  
 
  
 
  
  render() {
    
      
    
  if ((this.state.email.length)===0)
  { console.log("1");
    this.componentDidMount();
    return null;
  }
    
        
    return (

      <div className = "top" style={{backgroundColor:'grey'}}>    

        <header >
        <nav id="nav-wrap" style={{backgroundColor: 'grey'}}>
        <ul id="nav" className="nav">
        <li className="current"><a href="/"><Translate content='home'></Translate> </a></li>
        <li><Link activeClass="active" to="top" spy={true} smooth={true} duration={1000} href="#" style = {{right:0}}><Translate content='intro'></Translate> </Link></li>
   <li ><Link activeClass="active" to="education" spy={true} smooth={true} duration={1000} href="#"><Translate content='education'></Translate> </Link></li>
   <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={1000} href="#"><Translate content='work'></Translate>  </Link></li>
   <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} href="#"><Translate content='projects'></Translate>  </Link></li>
   <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} href="#"><Translate content='skills'></Translate> </Link></li>
   <li><Link activeClass="active" to="subjects" spy={true} smooth={true} duration={1000} href="#"><Translate content='subjects'></Translate>  </Link></li>
   
   <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={1000} href="#"><Translate content='gallery'></Translate>  </Link></li>
   <li><a className="smoothscroll" href="#" onClick={this.showLanguage}> <Translate content='language'></Translate> </a> </li>
   <Modal show={this.state.showlang} >
        <Modal.Header closeButton onClick={this.hideLanguage}></Modal.Header>
        <button type="button" class="block" onClick={this.switchtoen}>English</button> 
        <button type="button" class="block" onClick={this.switchtocn}>Chinese</button> 
        <button type="button" class="block"onClick={this.switchtojp}>Japanese</button> 
      
      
    </Modal>
    
   
</ul>
</nav>
        
        <div class="row banner">
         <div class="banner-text">
            
            <h1 className="responsive-headline"> <Translate content='Im'></Translate>  {this.state.name} </h1>
            <div class="float-container">
          
                <h2 style={{color:'white', fontFamily:'Palatino Linotype'}}>  {this.state.intro}</h2>
                
            </div>
            
            <hr />
            
         </div>
      </div>
      </header>
      <section id="about" >
      <div className="row">
      <div className="three columns">
            <img className="profile-pic"  src={this.state.profilePicture} alt="Profile Pic" />
            
         </div>
       
         <div className="nine columns main-col">
            <h2 style={{fontFamily:'Georgia, serif'}}><Translate content='about_me'></Translate> </h2>
            <div style={{columnWidth:"1000px"}}>
            <p>{this.state.bio}</p>
            </div>
            <div className="row">
               <div className="columns contact-details">
                  <h2 style={{fontFamily:'Georgia, serif'}}><Translate content='contact_details'></Translate> </h2>
                  <p className="address">
						   <span>{this.state.phone}</span><br />
               <div>
                
      </div>
                     <span>{this.state.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
              
                  <button><a href = {this.state.transcript} target = "_blank"  download = "transcript"><Translate content='download'></Translate></a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section id="education">
      <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='education'></Translate> </h2>
      <div>         
    <p   style= {{ fontSize: '20px'}}  >{ <ul style={{textAlign: 'center', paddingBlock:'20px' }}>{this.state.education.map( (item, index) =>
<li key = {index} > 
        <p style={{color:'black', fontFamily:'bookman', fontSize:'25px',  letterSpacing:'1px'}}>{item.school} </p>    
        <p style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'20px',  letterSpacing:'1px'}}>{item.qual}</p>
        <hr />
      </li>
  )}</ul>} </p>
  
      </div>
             
      
      </div>
   </section>

   <section id="work">
   <div style={{backgroundColor:'#fff'}}>
    <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='work1'></Translate> </h2>
    <div>
    <p     >{ <ul style={{textAlign: 'center', paddingBlock:'20px' }}>{((this.state.work).sort((a,b)=>b.from -a.from)).map( (item, index) =>
<li key = {index} > 
<div className="row education">
         <div style={{width:"40%", float:"right"}}>
            <h3 ><span style={{fontFamily:'librebaskerville-italic' ,borderBottom: 'solid #11ABB0', letterSpacing:'1px'}}>{item.workplace}   </span></h3>
         </div>
         <div style={{width:"60%", float:"left"}}>
            <div className="row item">
               <div className="twelve columns">
                 <div>
        <p style={{color:'black', fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.position} </p>
        </div>
        <div>
        <p style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.from}-{item.to}</p>
        </div>
               </div>
            </div>
         </div>
     </div>
        
      </li>
  )}</ul>} </p>
    </div>
</div>
   </section>

   <section id='projects'>
   <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='projects'></Translate> </h2>
      <div>         
      <p > {<ul style={{textAlign: 'center', paddingBlock:'20px' }}>{(this.state.projects).map( (item, index) =>
   
  <li key = {index} >
    <div className="row education">
         <div style={{width:"40%", float:"right"}}>
            <h3 ><span style={{fontFamily:'librebaskerville-italic',borderBottom: 'solid #11ABB0', letterSpacing:'1px'}}>{item.projectname}   </span></h3>
         </div>
         <div style={{width:"60%", float:"left"}}>
            <div className="row item">
               <div className="twelve columns">
                 <div>
        <p style={{color:'black', fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.projectdescription} </p>
        </div>
        <div>
        <p style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.projectlink}</p>
        </div>
               </div>
              </div>
         </div>
      
         </div></li>
    )}</ul> } </p>
    </div>
    </div>
</section>


   <section id="skills">
      <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='skills'></Translate> </h2>
      <div>         
      <p style= {{ fontSize: '25px'}} >{<ul style={{textAlign: 'center', paddingBlock:'20px' }}>{this.state.skills.map( (item, index) =>
    <li key = {index} style={{paddingBottom:"20px"}}><span style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'23px',borderBottom:'solid #11ABB0'}}>{item}</span> </li>
  )}</ul> } </p>
      </div>
       </div>
   </section>

   <section id="subjects">
      <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='subjects'></Translate> </h2>
      <div>         
      <p > {<ul style={{textAlign: 'center', paddingBlock:'20px' }}>{((this.state.subjects).sort((a, b) => b.subjectyear - a.subjectyear)).map( (item, index) =>
   
  <li key = {index} >
    <div className="row education">
         <div style={{width:"40%", float:"right"}}>
            <h3 ><span style={{fontFamily:'librebaskerville-italic' ,borderBottom: 'solid #11ABB0', letterSpacing:'1px'}}>{item.subjectname}   </span></h3>
         </div>
         <div style={{width:"60%", float:"left"}}>
            <div className="row item">
               <div className="twelve columns">
                 <div>
        <p style={{color:'black', fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.subjectdescripition} </p>
        </div>
        <div>
        <p style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'23px'}}>{item.subjectyear}</p>
        </div>
               </div>
               </div>
         </div>
      
         </div></li>
    )}</ul> } </p>
      
      </div>
            
      
      </div>
   </section>

   <section id = "gallery">
   <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='gallery'></Translate> </h2>
     
        <Carousel style={{backgroundColor:"grey"}}>
      {(this.state.gallery).map( (item, index) =>
       <Carousel.Item>
       <img
       className="carousel-img"
       key={index} src={item.imagesource}
       alt="First slide" style={{ width: '45%',
        height: '15%',
        display: 'block',
        margin: 'auto'
       }}
       />
       <Carousel.Caption className = "caption" style={{position: 'absolute',
    top: '80%',
    width: '45%',
    margin: 'auto',
    backgroundColor: 'whitesmoke',
    display: 'inline-block',
    borderradius: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    height: '220px',
    opacity: '0.8'}}>
       <h3> {item.description} </h3>
       
              </Carousel.Caption>
        </Carousel.Item>
      )}
     </Carousel>
   
        
      </div>
    </section>
           <Footer/>
      </div>
     
    )
  }
}
    
   
export default connect()(PublicProfile);