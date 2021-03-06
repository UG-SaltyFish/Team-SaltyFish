var express = require('express');
var router = express.Router();
var controller = require('../controller.js');

//Routes for all backend acccess

router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);
router.post('/goologin', controller.gooLoginUser);
router.post('/fblogin', controller.fbLoginUser);
router.post('/contact', controller.contactTo);
//Send Email in backend state and get password
router.get('/getpassword/:email', controller.getPasswordByEmail);
router.post('/sendmail', controller.sendEmail);
//profile1 is to send user data on login
//profile2 is to look up users in search
router.get('/profile1/:user', controller.getProfile);
router.get('/profile2/:email', controller.findUserByEmail);
//routes for editing user deets
router.put('/profilebio/:user', controller.addBio);
router.put('/profilework/:user', controller.addWork);
router.put('/profilephone/:user', controller.addPhone);
router.put('/profileintro/:user', controller.addIntro);
router.put('/profileproject/:user', controller.addproject);
router.put('/profileskills/:user', controller.addSkills);
router.put('/profileedu/:user', controller.addEducation);
router.put('/profilesub/:user', controller.addSubjects);
router.put('/addprofilepic/:user', controller.addProfilePicture);
router.put('/addtranscript/:user', controller.addTranscript);

router.put('/addtogallery/:user', controller.addGallery);
router.put('/deletefromgallery/:user', controller.findGalleryPicAndDelete);

router.put('/addweb/:user', controller.addweb);

router.put('/deleteedu/:user', controller.deleteEducation);
router.put('/findanddeletsub/:user', controller.findSubjectsAndDelete);
router.put('/findanddeletwork/:user', controller.findWorkAndDelete);
router.put('/findanddeletproject/:user', controller.findProjectAndDelete);
router.put('/findanddeletskill/:user', controller.findSkillAndDelete);


router.put('/hideE/:user', controller.deleE);
router.put('/hideW/:user', controller.deleW);
router.put('/hideP/:user', controller.deleP);
router.put('/hideSk/:user', controller.deleSk);
router.put('/hideSu/:user', controller.deleSu);
router.put('/hideG/:user', controller.deleG);

// Find all users
router.get('/users', controller.findAllUsers);

// Find one user by id
router.get('/users/id/:id', controller.findOneUser);

//Find one user by name
router.get('/users/name/:name', controller.FuzzySearchUserName);

module.exports = router;