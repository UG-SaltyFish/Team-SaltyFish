# SaltyFish ePortfolio <img align="center" width="300" height="100" src="/ui/logo.png"> <br>
    Extend SwatKatz Eportfolio
Documentation here:<br> 
https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM1UG/Group%3A+SaltyFish <br>
Heroku link:<br> 
https://saltyfishwillgraduate.herokuapp.com <br>

## Project Overview:
This project is to test and further develop a web-based ePortfolio system built by students studying in COMP30022 capstone project in Semester 2, 2020. Our team selected the SwatKats ePortfolio as our development object. Since this project does not have clients, our supervisor will play the role of clients as well. In the following 3 months, we will try our best to expand some significant functions according to new project requirements, improve the user interface design and debug.<br>
  
Our team will run the project based on the Agile development model. This Confluence space will document the information of project. Trello is used as the kanban board. Team communication is in Microsoft Team and WeChat. Source code is in our Github.<br>
  
## Goals:<br>
* To test the basic functions of SwatKat e-portfolio website and fix the bugs.<br>
* To expand SwatKat by adding some functions and better meet the needs of the clients.<br>
* To improve the UI design of SwatKat for easily using and visually appealing.<br>

## Tools:<br>
* [Visual Studio Code](https://code.visualstudio.com) was used as the programming IDE for this project.<br> 
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
* The back-end was developed using [Node.js](https://nodejs.org/en/download/).<br>
* [MangoDB](https://www.mongodb.com/) was one of the database for storing text and URLs of files.<br>
```
const mongoURI = "mongodb+srv://<username>:<password>@<clustername>.mongodb.net/test?retryWrites=true&w=majority"
```
* [AWS](https://aws.amazon.com/cn/) was used to store the files and pictures in the website.<br>
```
S3_ACCESS_KEY=<your access key>
S3_SECRET_ACCESS_KEY=<your secret key>
```
* [Heroku](https://id.heroku.com/login) was the platform we used to deploy our ePortfolio app. More info see Deployment below.<br>
<br>
Below are the main plugins in our project: <br>
* express
* axios
* copy-to-clipboard
* dotenv
* mongoose
* nodemailer
* aws-sdk

## Deployment:<br>
### Local:<br>
In a cmd prompt, some available commands and scripts can be run at src/ directory:<br>
```
npm install
``` 
Install Node.js dependencies.<br>

```
npm start
``` 
It runs the server in the development mode at http://localhost:5000. The page will reload if you save changes of your code.<br>
In another cmd terminal, enter the command:<br>
```
npm run client
``` 
It loads the client in your browser at http://localhost:3000. <br>

**Now, your app is deployed!**<br>

If you are unable to load the app due to some errors, please install the following scripts as well.<br>
```
npm install react-google-login
//or npm install react-google-login --legacy-peer-deps
npm install react-facebook-login
//or npm install react-facebook-login --legacy-peer-deps
```
Packages of react-google-login and react-facebook-login are necessary for Google and Facebook login.<br>

### Heroku:<br>
In the package.json, you need to define some information, scripts and dependencies. Please make sure your Node.js is v12/v14/v16, and all the listed dependencies are in single correct version.<br>
```
{
  "name": "Team-SaltyFish",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "client": "npm start --prefix client",
    "client-install": "npm install --prefix client",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install && npm run build --prefix client",
    "dev": "concurrently \"npm start\" \"npm run client\""
  },
  "engines": {
    "node": "14.17.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/UG-SaltyFish/Team-SaltyFish.git"
  },
  "homepage": ".",
  "dependencies": {
    //your dependencies
  }
}
```
After you get a Heroku account, you can run the following commands in a cmd terminal at src/ directory.<br>
Login Heroku with your API key.<br>
```
heroku login
```
Create a new app with a defined name (eg. saltyfishwillgraduate) into your account.<br>
```
heroku create saltyfishwillgraduate
```
Deploy and push to the Heroku app from local repository.<br>
```
git push heroku master
//or git push heroku $BRANCH_NAME:master
```
Due to sensitive nature of AWS S3 credentials, you should set access key and secret key as config vars for the Heroku apps to deploy Amazon storage.<br>
```
heroku config:set S3_ACCESS_KEY=<your access key> S3_SECRET_ACCESS_KEY=<your secret key>
```
Open Heroku app.<br>
```
heroku open
```
The app loads in your browser at https://saltyfishwillgraduate.herokuapp.com <br>


## Changelog:<br>
### 26th March 2021:<br>
* Add a new branch: former-version.<br>
* Add a new tag: v-0.0.<br>
  v-0.0 contains codes and corresponding documents about project SwatKatz, the team would start Sprint 1 based on v-0.0.<br>        
### 30th March 2021:<br>
* Add docs to store documents of the project.<br>
* Update README.md.<br>
### 29th April 2021:<br>
* User story 2: Facebook and Google login functions.<br>
* User story 3: Section Management function.<br>
* User Story 4: Reset page for resetting user name, email, password functions.<br>
* User Story 9: Changes on the layout of home page, profile page and login page.<br>
* Add functional test of Sprint 1 in tests/.<br>
* Add documents in doc/, data sample in datasample/, and images in ui/.<br>
* Update README.md.<br>
* Add a release tag: COMP90082_2021_RLSE_<UG>_<1.0>.<br>
  COMP90082_2021_RLSE_<UG>_<1.0> contains codes and corresponding documents for our project in Sprint 1.<br>
### 27th May 2021:<br>
* User story 1: Get forgotten password by email.<br>
* User story 5: Download/delete transcript file.<br>
* User Story 6: Copy ePortfolio URL to clipboard.<br>
* User Story 7: Send email to ePortfolio owner.<br>
* User Story 8: Print ePortfolio as PDF.<br>    
* Add functional test of Sprint 2 in tests/.<br>
* Update documents in doc/, data sample in datasample/, and images in ui/.<br>
* Add a release tag: COMP90082_2021_RLSE_<UG>_<2.0>.<br>
  COMP90082_2021_RLSE_<UG>_<2.0> contains codes and corresponding documents for Sprint 2.<br> 
