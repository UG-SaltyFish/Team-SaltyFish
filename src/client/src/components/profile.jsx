import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import {  logoutUser } from "./../actions/authActions";
import Footer from './Footer.js';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import logo from './logo.svg'
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
class Profile extends Component {
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
  this.onLogoutClick=this.onLogoutClick.bind(this);
  this.onChange =this.onChange.bind(this);
  this.onSubmitSubject =this.onSubmitSubject.bind(this);
  
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
showAddModal = () => {
  this.setState({ showAdd: true });
};
hideAddModal = () => {
  this.setState({addsubjectname:''});
  this.setState({addsubjectdescripition:''});
  this.setState({addsubjectyear:''});
  this.setState({ showAdd: false });
};
showEduModal = () => {
  this.setState({ showedu: true });
};
hideEduModal = () => {
  this.setState({addschoolname:''});
  this.setState({addqual:''});
  this.setState({ showedu: false });
};
showProjectModal = () => {
  this.setState({ showproject: true });
};
hideProjectModal = () => {
  this.setState({addprojectname:''});
  this.setState({addprojectdescripition:''});
  this.setState({addprojectlink:''});
  this.setState({ showproject: false });
};
showWorkModal = () => {
  this.setState({ showwork: true });
};
hideWorkModal = () => {
  this.setState({addworkplace:''});
  this.setState({addposition:''});
  this.setState({addfrom:''});
  this.setState({addto:''});
  this.setState({ showwork: false });
};
showintroModal = () => {
  this.setState({ showintro: true });
};
hideintroModal = () => {
  this.setState({addintro:''});
  this.setState({ showintro: false });
};
onChange = (e) => {
  
  this.setState({[e.target.name]: e.target.value});
}
onSubmitProject =(e) =>
{
  e.preventDefault();
  const userData ={
    projectname:this.state.addprojectname,
    projectdescription: this.state.addprojectdescripition,
    projectlink: this.state.addprojectlink
  }
  console.log(userData);
  axios.put('/profileproject/'+this.props.auth.user,userData)
  .then(res=> this.setState({projects:res.data.projects}))
  this.setState({addprojectname:''});
  this.setState({addprojectdescripition:''});
  this.setState({addprojectlink:''});
  this.setState({ showproject: false });
}
onSubmitWork = (e) =>{
  e.preventDefault();
  const userData ={
    workplace: this.state.addworkplace,
    position: this.state.addposition,
    from: this.state.addfrom,
    to: this.state.addto
  }
  axios.put('/profilework/'+this.props.auth.user,userData)
  .then(res=> this.setState({work:res.data.work}))
  this.setState({addworkplace:''});
  this.setState({addposition:''});
  this.setState({addfrom:''});
  this.setState({addto:''});
  this.setState({ showwork: false });
}
onSubmitSubject = (e) =>{
  
  e.preventDefault();
  const userData = {
    subjectname: this.state.addsubjectname,
    subjectdesc: this.state.addsubjectdescripition,
    year: this.state.addsubjectyear
  };
  console.log(userData);
  axios.put('/profilesub/'+this.props.auth.user,userData)
  .then(res=>this.setState({subjects:res.data.subjects}))
  this.setState({addsubjectname:''});
  this.setState({addsubjectdescripition:''});
  this.setState({addsubjectyear:''});
  this.setState({showAdd:false}); 
}
onSubmitEdu =(e) =>{
  e.preventDefault();
  const userData={
    school:this.state.addschoolname,
    qual: this.state.addqual
  }
  axios.put('/profileedu/'+this.props.auth.user,userData)
  .then(res=> this.setState({education:res.data.education}))
  this.setState({addschoolname:''});
  this.setState({addqual:''});
  this.setState({ showedu: false });
}
onSubmitIntro =(e) =>{
  e.preventDefault();
  const userData ={
    intro:this.state.addintro
  };
  
  axios.put('/profileintro/'+this.props.auth.user,userData)
  .then(res=>this.setState({intro:res.data.intro}))
  this.setState({addintro:''});
  this.setState({showintro:false});
}
showbioModal = () => {
  this.setState({ showbio: true });
};
hidebioModal = () => {
  this.setState({addinfo:''});
  this.setState({ showbio: false });
};
showphoneModal = () => {
  this.setState({ showphone: true });
};
hidephoneModal = () => {
  this.setState({addinfo:''});
  this.setState({ showphone: false });
};
onSubmitBio =(e) =>{
  e.preventDefault();
  const userData ={
    bio:this.state.addinfo
  };
  
  axios.put('/profilebio/'+this.props.auth.user,userData)
  .then(res=>this.setState({bio:res.data.bio}))
  this.setState({addinfo:''});
  this.setState({showbio:false});
}
onSubmitPhone =(e) =>{
  e.preventDefault();
  const userData ={
    bio:this.state.addinfo
  };
  
  axios.put('/profilephone/'+this.props.auth.user,userData)
  .then(res=>this.setState({phone:res.data.phone}))
  this.setState({addinfo:''});
  this.setState({showphone:false});
}
showskillsModal = () => {
  this.setState({ showskills: true });
};
hideskillsModal = () => {
  this.setState({addinfo:''});
  this.setState({ showskills: false });
};
onSubmitSkills =(e) =>{
  e.preventDefault();
  const userData ={
    skill:this.state.addinfo
  };
  console.log(userData);
  axios.put('/profileskills/'+this.props.auth.user,userData)
  .then(res=>this.setState({skills:res.data.skills}))
  this.setState({addinfo:''});
  this.setState({showskills:false});
}
handleGalleryChange = event => {
  event.preventDefault();
  
  this.setState({
    addgallerydescription: event.target.value
  })
}
onSubmitGalleryPhoto = (e) => {
  e.preventDefault();
  const fd = new FormData();
  if (this.state.selectedFile == null) {
    return (Error);
  }
  const photoDesc =  this.state.addgallerydescription;
  fd.append('image', this.state.selectedFile);
  axios.post('/img-upload', fd).then((postResponse) => {
    console.log(postResponse);
    this.newGP = postResponse.data.imageUrl;
    const galleryPhoto = {
      imagesource: this.newGP,
      description: photoDesc
    };
    console.log(galleryPhoto);
    axios.put('/addtogallery/' + this.props.auth.user, galleryPhoto).then(res => this.setState({gallery:res.data.gallery}))
   
  }, (err) => {
    console.log(err);
  })
  this.setState({addgallerydescription:''});
}
    onLogoutClick = (e) => {
      e.preventDefault();
      this.props.logoutUser();
      this.props.history.push('/login');
  };
  componentDidMount() {
    axios
        .get('/profile1/'+(this.props.auth.user))
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
                         education:res.data[0].education,
                         website:res.data[0].website,
                         phone:res.data[0].phone,
                         profilePicture: res.data[0].profile_picture,
                         transcript: res.data[0].transcript,
                         imgHash: Date.now()
                        });
          })
    
}
  fileSelectedHandler = event => {
    event.preventDefault();
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
 
  pdfUploadHandler = () => {
    const fd = new FormData();
    if (this.state.selectedFile == null) {
      return (Error);
    }
    if (this.state.transcript !== "") {
      axios.delete('/deletefile', {
        params: {
          url: this.state.transcript
        }
      }).then(res=> {
        console.log(res);
      })
    }
    fd.append('transcript', this.state.selectedFile);
      try {
        axios.post('/pdf-upload', fd).then((postResponse) => {
        this.newTrans = postResponse.data.transcriptUrl;
       
      }, (err) => {
        console.log(err);
      }).then(() => {
        //do PUT call
        const data = {
          transcript: this.newTrans
        }
        
        axios.put('/addtranscript/' + this.props.auth.user, data).then((putResponse) => {
          //do PUT stuff with response
          this.setState({
            transcript: this.newTrans
          });
          
        })
      })
    }catch(err) {
      console.log(err);
    };
    this.setState({
      selectedFile:null
    });
  }
  imgUploadHandler = () => {
    const fd = new FormData();
    if (this.state.selectedFile == null) {
      return (Error);
    }
    if (this.state.profilePicture !==  "https://it-project-bucket-2020.s3-ap-southeast-1.amazonaws.com/blank-profile.png") {
      axios.delete('/deletefile', {
        params: {
          url: this.state.profilePicture
        }
      }).then(res=> {
        
      })
    }
    fd.append('image', this.state.selectedFile);
      try {
        axios.post('/img-upload', fd).then((postResponse) => {
        this.newPP = postResponse.data.imageUrl;
       
      }, (err) => {
        console.log(err);
      }).then(() => {
        //do PUT call
        const data = {
          profilePic: this.newPP
        }
        
        axios.put('/addprofilepic/' + this.props.auth.user, data).then((putResponse) => {
          //do PUT stuff with response
          this.setState({
            profilePicture: this.newPP
          });
          
        })
      })
    }catch(err) {
      console.log(err);
    };
    this.setState({
      selectedFile:null
    });
  }
  deletework(index,user){
    axios.put('/findanddeletwork/'+user,index)
    .then(res=> this.setState({work:res.data.work}))
    .catch(error => {
      console.log("handlesubmit error for blog ", error)
  })
}
  deletesubject(index,user) {
  axios.put('findanddeletsub/'+user,index)
      .then(res=> this.setState({subjects:res.data.subjects}))
      .catch(error => {
        console.log("handlesubmit error for blog ", error)
    })
    
  }
  deleteproject(index,user){
    axios.put('/findanddeletproject/'+user,index)
  .then(res=> this.setState({projects:res.data.projects}))
  .catch(error => {
    console.log("handlesubmit error for blog ", error)
})
}
  deleteedu(index,user) {
    
    axios.put('deleteedu/'+user,index)
        .then(res=> this.setState({education:res.data.education}))
        .catch(error => {
          console.log("handlesubmit error for blog ", error)
      })
  
      
    }
  deleteskills(index,user) {
    console.log(this.state.skills[index]);
    axios.put('/findanddeletskill/'+user,{skill:this.state.skills[index]})
        .then(res=> this.setState({skills:res.data.skills}))
        .catch(error => {
          console.log("handlesubmit error for blog ", error)
      })
  
      
    }
  //onClick={()=>{this.deletesubject((this.state.subjects)[index],this.props.auth.user)}}
  deletegallerypic(index, user) {
    axios.put('deletefromgallery/' + user,index).then(res => this.setState({gallery:res.data.gallery}))
    .catch(err => {
      console.log("delete error for gallery", err);
    })
  }

  scrollUp() {
    window.scroll(0,0);
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
    
   <li><a className="smoothscroll" href="" onClick={this.onLogoutClick}><Translate content='logout'></Translate> </a></li>

</ul>
</nav>
        
        <div class="row banner">
         <div class="banner-text">
            
            <h1 className="responsive-headline"> <Translate content='Im'></Translate>  {this.state.name} </h1>
            <div class="float-container">
          
                <h2 style={{color:'white', fontFamily:'Palatino Linotype'}}>  {this.state.intro}</h2>
                <Button  onClick={this.showintroModal}><Translate content='edit_Intro'></Translate></Button>
                <Modal show={this.state.showintro}>
                <Modal.Header closeButton onClick={this.hideintroModal}></Modal.Header>
                <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='edit_Intro'></Translate> </h2>
                <form onSubmit={this.onSubmitIntro}>
                  <input onChange={this.onChange}
                      value={this.state.addintro}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Intro"
                      name="addintro"
                      style={{width: '200px'}}
                          
                          required autoFocus 
                    />
                  
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}> <Translate content='submit'></Translate></button>
                  </form>
                </Modal>
             
            </div>
            
            <hr />
            
         </div>
      </div>
      </header>
      <section id="about"  >
      <div className="row" >
      <div className="three columns" >
            <img className="profile-pic"  src={this.state.profilePicture} alt="Profile Pic" />
            <input type = "file" accept=".jpg, .png" onChange={this.fileSelectedHandler}/>
<Button onClick={this.imgUploadHandler}><Translate content='upload'></Translate> </Button>
         </div>
       
         <div className="nine columns main-col">
            <h2 style={{fontFamily:'Georgia, serif'}}><Translate content='about_me'></Translate> </h2>
            <div style={{columnWidth:"1000px"}}>
            <p>{this.state.bio}</p>
            </div>
            <Button  onClick={this.showbioModal}><Translate content='edit_Bio'></Translate></Button>
                <Modal show={this.state.showbio}>
                <Modal.Header closeButton onClick={this.hidebioModal}></Modal.Header>
                <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='edit_Bio'></Translate> </h2>
                <form onSubmit={this.onSubmitBio}>
                  <input onChange={this.onChange}
                      value={this.state.addinfo}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Bio, max length 1000 characters"
                      name="addinfo"
                      style={{height:'200px' }}
                      maxLength="1000"
                          
                          required autoFocus 
                    />
                  
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}><Translate content='submit'></Translate></button>
                  </form>
                </Modal>
            <div className="row">
               <div className="columns contact-details">
                  <h2 style={{fontFamily:'Georgia, serif'}}><Translate content='contact_details'></Translate> </h2>
                  <p className="address">
						   <span>{this.state.phone}</span><br />
               <div>
               <Button  onClick={this.showphoneModal}><Translate content='edit_phone'></Translate></Button>
                <Modal show={this.state.showphone}>
                <Modal.Header closeButton onClick={this.hidephoneModal}></Modal.Header>
                <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='edit_Bio'></Translate> </h2>
                <form onSubmit={this.onSubmitPhone}>
                  <input onChange={this.onChange}
                      value={this.state.addinfo}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Phone"
                      name="addinfo"
              
                      maxLength="20"
                          
                          required autoFocus 
                    />
                  
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}> <Translate content='submit'></Translate></button>
                  </form>
                </Modal>
             
      </div>
                     <span>{this.state.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                  <input type = "file" accept = ".pdf" onChange={this.fileSelectedHandler}/>
                  <button onClick={this.pdfUploadHandler}><Translate content='upload_transcript'></Translate> </button>
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
        <Button onClick={()=>{this.deleteedu((this.state.education)[index],this.props.auth.user)}}><Translate content='delete'></Translate></Button>
        <hr />
      </li>
  )} <button style={{alignItems:'center'}} onClick={this.showEduModal}><Translate content='add_edu'></Translate> </button></ul>} </p>
      
      </div>
      
      <Modal show={this.state.showedu} >
        <Modal.Header closeButton onClick={this.hideEduModal}></Modal.Header>
      <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='add_edu'></Translate> </h2>
      <form onSubmit={this.onSubmitEdu}>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addschoolname}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add School Name"
                      name="addschoolname"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addqual}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Qualification"
                      name="addqual"
                          
                          required autoFocus 
                    />
                  </div>
                 
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}><Translate content='submit'></Translate></button>
                  </form>
      
        </Modal>
     
            
      
      </div>
   </section>

   <section id="work" >
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
               <Button onClick={()=>{this.deletework((this.state.work)[index],this.props.auth.user)}}><Translate content='delete'></Translate></Button>
            </div>
            
         </div>
      
         </div>
        
      </li>
  )}  <button style={{alignItems:'center', marginLeft:'auto'}} onClick={this.showWorkModal}><Translate content='add_work'></Translate> </button></ul>} </p>
    </div>
   
      <Modal show={this.state.showwork} >
        <Modal.Header closeButton onClick={this.hideWorkModal}></Modal.Header>
      <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='add_work'></Translate> </h2>
      <form onSubmit={this.onSubmitWork}>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addworkplace}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Business Name"
                      name="addworkplace"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addposition}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Position/Role"
                      name="addposition"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addfrom}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Start Date"
                      name="addfrom"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addto}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add End Date"
                      name="addto"
                          
                          required autoFocus 
                    />
                  </div>
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}> <Translate content='submit'></Translate></button>
                  </form>
      
        </Modal>
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
            <h3 ><span style={{fontFamily:'librebaskerville-italic' ,borderBottom: 'solid #11ABB0', letterSpacing:'1px'}}>{item.projectname}   </span></h3>
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
               <Button onClick={()=>{this.deleteproject((this.state.projects)[index],this.props.auth.user)}}><Translate content='delete'></Translate></Button>
            </div>
         </div>
      
         </div></li>
    )} <button style={{alignItems:'center'}} onClick={this.showProjectModal}><Translate content='add_projects'></Translate> </button></ul> } </p>
    </div>
    
      <Modal show={this.state.showproject} >
        <Modal.Header closeButton onClick={this.hideProjectModal}></Modal.Header>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='add_projects'></Translate> </h2>
      <form onSubmit={this.onSubmitProject}>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addprojectname}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Project Name"
                      name="addprojectname"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addprojectdescripition}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Project Description"
                      name="addprojectdescripition"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addorijectlink}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Project Link"
                      name="addprojectlink"
                          
                          required autoFocus 
                    />
                  </div>
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}> <Translate content='submit'></Translate></button>
                  </form>
      
        </Modal>
    </div>
</section>

   <section id="skills">
      <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='skills'></Translate> </h2>
      <div>         
      <p style= {{ fontSize: '25px'}} >{<ul style={{textAlign: 'center', paddingBlock:'20px' }}>{this.state.skills.map( (item, index) =>
    <li key = {index} style={{paddingBottom:"20px"}}><span style={{color:'black' ,fontFamily:'librebaskerville-italic', fontSize:'23px',borderBottom:'solid #11ABB0'}}>{item}</span> <Button onClick={()=>{this.deleteskills(index,this.props.auth.user)}}><Translate content='delete'></Translate></Button></li>
  )}<button style={{alignItems:'center'}} onClick={this.showskillsModal}><Translate content='add_skills'></Translate> </button></ul> } </p>
      </div>
      
      
      <Modal show={this.state.showskills}>
                <Modal.Header closeButton onClick={this.hideskillsModal}></Modal.Header>
                <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='add_skills'></Translate> </h2>
                <form onSubmit={this.onSubmitSkills}>
                  <input onChange={this.onChange}
                      value={this.state.addinfo}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Skills"
                      name="addinfo"
                      style={{height:'200px' }}
                      maxLength="100"
                          
                          required autoFocus 
                    />
                  
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}><Translate content='submit'></Translate></button>
                  </form>
                </Modal>
            
      
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
               <Button onClick={()=>{this.deletesubject((this.state.subjects)[index],this.props.auth.user)}}><Translate content='delete'></Translate></Button>
            </div>
         </div>
      
         </div></li>
    )}<button style={{alignItems:'center'}} onClick={this.showAddModal}><Translate content='add_subjects'></Translate> </button></ul> } </p>
      
      <Modal show={this.state.showAdd} >
        <Modal.Header closeButton onClick={this.hideAddModal}></Modal.Header>
      <h2 style={{textAlign: 'center', paddingBlock:'10px',fontFamily:'Times New Roman'}}><Translate content='add_subjects'></Translate> </h2>
      <form onSubmit={this.onSubmitSubject}>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addsubjectname}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Subject Name"
                      name="addsubjectname"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addsubjectdescripition}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Subject Description"
                      name="addsubjectdescripition"
                          
                          required autoFocus 
                    />
                  </div>
                  <div className="form-group">
                    <input onChange={this.onChange}
                      value={this.state.addsubjectyear}
                      
                      type="text"
                      className={("form-control")}
                      placeholder="Add Subject Year"
                      name="addsubjectyear"
                          
                          required autoFocus 
                    />
                  </div>
                  <button type="submit" style={{alignContent: 'center', paddingBlock:'10px' }}><Translate content='submit'></Translate></button>
                  </form>
      
        </Modal>
      </div>
            
      
      </div>
   </section>

   <section id = "gallery">
   <div style={{backgroundColor:'#fff'}}>
      <h2 style={{fontSize:'35px', textAlign: 'center', paddingBlock:'18px',fontFamily:'Georgia, serif'}}><Translate content='gallery'></Translate></h2>
     
        <Carousel style={{backgroundColor:"grey", paddingBottom:"35px"}}>
      {(this.state.gallery).map( (item, index) =>
       <Carousel.Item>
       <img
       className="carousel-img"
       key={index} src={item.imagesource}
       alt="First slide" style={{ width: '45%',
        height: '20%',
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
      <div >
       <h3> {item.description} </h3>
       </div>
       <div>
       <Button onClick={()=>{this.deletegallerypic((this.state.gallery)[index],this.props.auth.user)}} > <Translate content='delete'></Translate></Button>
       </div>
              </Carousel.Caption>
              
        </Carousel.Item>
      )}
     </Carousel>
   
        <form name="uploadForm" onkeydown="return event.key != 'Enter';">
          <div>
            <input type = "file" accept=".jpg, .png" onChange={this.fileSelectedHandler}/>
          </div>
          <div>
            <h2> <Translate content='add_photodesc'></Translate> </h2>
            <input type = "text" value = {this.state.addgallerydescription} onChange = {this.handleGalleryChange}/>
          </div>
          <div><button type="button" onClick={this.onSubmitGalleryPhoto}><Translate content='add_photo'></Translate> </button></div>
          </form>
      
      </div>
    </section>
           <Footer/>
      </div>
     
    )
  }
}
        
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
        
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
  });
        
export default connect(mapStateToProps, {logoutUser})(Profile);