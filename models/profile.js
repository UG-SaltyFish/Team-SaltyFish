const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{type:String},
    profile_picture:{type:String},
    transcript:{type:String},
    website: {
        type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    skills: {
        type: [String],
        
    },
    bio: {
        type: String
    },
    work: [{
      workplace: {type: String},
      position: {type: String},
      from: {type: String},
      to: {type: String}
    }],
    gallery: [{
      imagesource: {type: String},
      description: {type: String}
    }],

    intro:{ type: String},
    education: [
      {
        school: {
          type: String,
          required: true
        },
        qual: {
          type: String,
          required: true
        }
      }
    ],
    subjects: [
     
      {
        subjectname:{
          type:String,
          required:true
        },
        subjectdescripition:{
          type:String,
          required:true
        },
        subjectyear:{
          type:Number,
          required:true
        }


      }
    ],
    projects:[{
      projectname:{type:String, required:true},
      projectdescription:{type:String,required:true},
      projectlink:{type:String}

    }]
});

var profile = mongoose.model('profile', ProfileSchema);