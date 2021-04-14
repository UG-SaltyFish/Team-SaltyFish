# IT Project COMP30022

## :computer: E-portfolio system! :student:


To create a functional, easy to use and visually appealing Eportfolio based upon client specifications

Documentation here: https://swatkats.atlassian.net/wiki/spaces/IPD/overview?homepageId=32968

Heroku link: https://it-project-eportfolio-2.herokuapp.com/

## Routes

REGISTER USER: router.post('/register', controller.createUser);

LOGIN USER: router.post('/login', controller.loginUser);

GET PROFILE ONCE LOGGED IN: router.get('/profile1/:user',controller.getProfile);

GET PUBLIC VIEW OF A PROFILE: router.get('/profile2/:email', controller.findUserByEmail);

FIND AND ADD/UPDATE BIO: router.put('/profilebio/:user',controller.addBio);

FIND AND ADD/UPDATE WORK: router.put('/profilework/:user',controller.addWork);

FIND AND UPDATE PHONE: router.put('/profilephone/:user',controller.addPhone);

FIND AND ADD/UPDATE INTRO: router.put('/profileintro/:user',controller.addIntro);

FIND AND ADD PERSONAL PROJECTS: router.put('/profileproject/:user',controller.addproject);

FIND AND ADD/UPDATE SKILLS: router.put('/profileskills/:user',controller.addSkills);

FIND AND ADD/UPDATE EDUCATION: router.put('/profileedu/:user',controller.addEducation);

FIND AND ADD SUBJECTS: router.put('/profilesub/:user',controller.addSubjects);

FIND AND DELETE SUBJECTS: router.put('/findanddeletsub/:user',controller.findSubjectsAndDelete);

FIND AND DELETE WORK: router.put('/findanddeletwork/:user',controller.findWorkAndDelete);

FIND AND DELETE PROJECT: router.put('/findanddeletproject/:user',controller.findProjectAndDelete);

FIND AND DELETE SKILLS: router.put('/findanddeletskill/:user',controller.findSkillAndDelete);

FIND AND GET PUBLIC USER PROFILE: router.get('/profile2/:email', controller.findUserByEmail);

ADD PROFILE PICTURE: router.put('/addprofilepic/:user',controller.addProfilePicture);

ADD TRANSCRIPT:router.put('/addtranscript/:user',controller.addTranscript);

ADD TO GALLERY: router.put('/addtogallery/:user',controller.addGallery);

DELETE FROM GALLERY: router.put('/deletefromgallery/:user', controller.findGalleryPicAndDelete);

ROUTER FOR SEARCH BAR: router.get('/users/name/:name', controller.FuzzySearchUserName);

## Controllers

CREATE USER AND USER’S PROFILE

    var createUser = function(req, res) {

    var user = new User({
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password
    });

    User.findOne({email:user.email}, function(err, user1) {
        if (user1) {
            console.log("User exists!");
     
            
        } else {
           
            user.save(function (err, newUser) {
                console.log(newUser);
                if (!err) {
                    var profile =new Profile({
                        user: newUser,
                        name: user.name,
                        website:'',
                        education:[],
                        subjects:[],
                        email:user.email,
                        phone:'',
                        skills:'',
                        bio:'',
                        date:''});
                    
                    console.log(profile.save());
                    console.log("registered");
                } else {
                    res.sendStatus(400);
                }
            });
        }
    });
    };

LOGIN USER AND SEND UNIQUE TOKEN TO GET PROFILE:

    var loginUser = function(req, res) {
    
    const user = req.body;
    
    //check for existing user
    User.findOne({email:user.email,password:user.password}, function(err, user1) {
        if (user1) {
            console.log("Successful login ");
            const payload = {
                _id: user1._id,
                name: user1.name,
                email: user1.email
              }
              let token = payload;
              res.send(token);

            
     
            
        }
        else{
            return res.status(400).json("Incorrect Email or Password")
        }

      // Validate password
      
         });
  
         };

GET PROFILE BASED ON LOGGED IN USER’S TOKEN

    var getProfile =function(req,res){
    
    var k=req.params.user;

    
    Profile.find({user:k},function(err,user2){
        if(user2){
            const payload=user2;
            console.log(user2);
            res.send(payload);
        }else{
           res.send(k);
        }
    })
    };

ADD AND UPDATE BIO

    var addBio= function(req,res){
    var user1=req.params.user;
        const bio1= req.body.bio; 
    Profile.findOneAndUpdate({user:user1},{$set:{bio:bio1}},{new: true},function(err,user2){
        if(err){
            console.log(user2);
            res.send("wrong"); 
        }else{
            console.log(user2);
           res.send("found");
        }
    })
};
ADD PHONE AND INTRO

    var addPhone= function(req,res){
    var user1=req.params.user;
    
    const phone1= req.body.bio;

    
    Profile.findOneAndUpdate({user:user1},{$set:{phone:phone1}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
          
           res.send(user2);
        }
    })
    };
    var addIntro= function(req,res){
    var user1=req.params.user;
    
    const intro1= req.body.intro;

    
    Profile.findOneAndUpdate({user:user1},{$set:{intro:intro1}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
          
           res.send(user2);
        }
    })
    };

 
ADD AND DELETE WORK EXPERIENCE

    var addWork= function(req,res){
    var user1=req.params.user;
    
    const work1= req.body;

    console.log(work1);
    Profile.findOneAndUpdate({user:user1},{$push: {work:{workplace:work1.workplace, position:work1.position,from:work1.from,to:work1.to}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
        
           res.send(user2);
        }
    })
    };
    var findWorkAndDelete= function(req,res){
    var user1=req.params.user;
    
    const work1= req.body;
    
    
    Profile.findOneAndUpdate({user:user1},{$pull:{work:{workplace:work1.workplace, position:work1.position,from:work1.from,to:work1.to}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
            
           res.send(user2);
        }
    })
};

 
ADD AND DELETE PROJECTS

    var addproject= function(req,res){
    var user1=req.params.user;
    
    const work1= req.body;

    console.log(work1);
    Profile.findOneAndUpdate({user:user1},{$push: {projects:{projectname:work1.projectname, projectdescription:work1.projectdescription,projectlink:work1.projectlink}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
        
           res.send(user2);
        }
    })
     };
     var findProjectAndDelete= function(req,res){
    var user1=req.params.user;
    
    const work1= req.body;
    
    console.log(work1);
    Profile.findOneAndUpdate({user:user1},{$pull:{projects:{projectname:work1.projectname, projectdescription:work1.projectdescription,projectlink:work1.projectlink}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
            
           res.send(user2);
        }
    })
    };

 
ADD SKILLS AND DELETE SKILLS

    var addSkills= function(req,res){
    var user1=req.params.user;
    
    const skill= req.body.skill;

    
    Profile.findOneAndUpdate({user:user1},{$push: {skills:skill}},{new: true},function(err,user2){
        if(err){
            console.log(user2);
            res.send("wrong");
            
        }else{
            console.log(user2);
           res.send("found");
        }
    })
    };

    var findSkillAndDelete = function(req, res) {
    var user1 = req.params.user;

    const skill = req.body.skill;

    Profile.findOneAndUpdate({user:user1},{$pull: {skills: {skill}}},{new: true},function(err,user2){
        if(err){
            console.log(user2);
            res.send("wrong");
            
        }else{
            console.log(user2);
           res.send(user2);
        }
    })
}

ADD AND DELETE SUBJECTS

    var addSubjects= function(req,res){
    var user1=req.params.user;
    
    const edu= req.body;

    Profile.findOneAndUpdate({user:user1},{$push: {subjects:{subjectname:edu.subjectname,subjectdescripition:edu.subjectdesc,subjectyear:edu.year}}},{new: true},function(err,user2){
        if(err){
         
            res.send("wrong");
            
        }else{
          
           res.send(user2);
        }
    })
    };

    var findSubjectsAndDelete= function(req,res){
    var user1=req.params.user;
    
    const edu= req.body;
    console.log(req.body);
    
    Profile.findOneAndUpdate({user:user1},{$pull:{subjects:{subjectname:edu.subjectname,subjectdescripition:edu.subjectdescripition,subjectyear:edu.subjectyear}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
            
           res.send(user2);
        }
    })
};

 
ADD EDUCATION AND DELETE EDUCATION

    var addEducation= function(req,res){
    var user1=req.params.user;
    
    const edu= req.body;

    
    Profile.findOneAndUpdate({user:user1},{$push: {education:{school:edu.school, qual:edu.qual}}},{new: true},function(err,user2){
        if(err){
            
            res.send("wrong");
            
        }else{
        
           res.send(user2);
        }
    })
     };
    var deleteEducation= function(req,res){
    var user1=req.params.user;
    
    const edu= req.body;

    
    Profile.findOneAndUpdate({user:user1},{$pull: {education:{school:edu.school, qual:edu.qual}}},{new: true},function(err,user2){
        if(err){
          
            res.send("wrong");
            
        }else{
           
           res.send(user2);
        }
    })
    };
FILE-DELETE.JS

    const file_delete = (props) => {
    const {region, bucket, key} = AmazonS3URI(props);

    var params = {
        Bucket : bucket,
        Key : key
    }

    s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack);  // error
        else     console.log();                 // deleted
        return data;
    }).promise();
}

IMG-UPLOAD.JS

    const img_upload = multer({
    fileFilter,
    storage: multerS3({
    s3: s3,
    bucket: 'it-project-bucket-2020',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_IMAGE'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + ".jpg")
    }
  

PDF-UPLOAD.JS


    const pdf_upload = multer({
    fileFilter,
    storage: multerS3({
      s3: s3,
      bucket: 'it-project-pdf-2020',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TESTING_PDF'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + ".pdf")
      }
 
    })
    })
    
## Credits

FrontEnd profile page inspiration from Tim Baker and Ceevee templates.
Header Photo credits Casey Horner.

 






