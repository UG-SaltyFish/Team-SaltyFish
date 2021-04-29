# Team-SaltyFish<br>
    Extend SwatKatz Eportfolio
Documentation here: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM1UG/Group%3A+SaltyFish <br>
Heroku link:https://saltyfish2.herokuapp.com <br>

## Project Overview:
This project is to test and further develop a web-based ePortfolio system built by students studying in COMP30022 capstone project in Semester 2, 2020. Our team selected the SwatKats ePortfolio as our development object. Since this project does not have clients, our supervisor will play the role of clients as well. In the following 3 months, we will try our best to expand some significant functions according to new project requirements, improve the user interface design and debug.<br>
  
Our team will run the project based on the Agile development model. This Confluence space will document the information of project. Trello is used as the kanban board. Team communication is in Microsoft Team and WeChat. Source code is in our Github.<br>
  
## Goals:<br>
* To test the basic functions of SwatKat e-portfolio website and fix the bugs.<br>
* To expand SwatKat by adding some functions and better meet the needs of the clients.<br>
* To improve the UI design of SwatKat for easily using and visually appealing.<br>

## Tools:<br>
* This project is developed with [Visual Studio Code](https://code.visualstudio.com).
* We use [Wechat](https://www.wechat.com/) for daily communication and use [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/log-in) to hold weekly meetings.
* [Trello](https://trello.com/) is used to organize and track our work.
* We push our code into [Github](https://github.com/), and record our documents in [confluence](https://www.atlassian.com/software/confluence).
<br>

## Deployment:<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
### Local:<br>
To deploy this project in your local computer, you need to download [Node.js](https://nodejs.org/en/download/) firstly.<br>

In the src/ directory, some available commands and scripts can be run in a cmd prompt:<br>
```
npm install
``` 
Install Node.js dependencies.<br>

```
npm start
``` 
It runs the server in the development mode at http://localhost:5000. The page will reload if you save changes of your code.<br>

```
npm run client
``` 
Open another cmd prompt and enter the command. It loads the client in your browser at http://localhost:3000. <br>

**Now, your app is deployed!**<br>

If you are unable to load the app due to some errors, please install the following scripts as well.<br>
```
npm install openssl

npm install bootstrap

npm install react-google-login
//or npm install react-google-login --legacy-peer-deps

npm install react-facebook-login
//or npm install react-facebook-login --legacy-peer-deps
```
OpenSSL is a general-purpose cryptography library that stores some private information for HTTPS.<br>
Packages of react-google-login and react-facebook-login are necessary for Google and Facebook login.<br>

### Heroku:<br>
In the package.json, it needs to install the package and some parameters.<br>
```
{
  "name": "it-project",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "client": "npm start --prefix client",
    "client-install": "npm install --prefix client",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",
    "dev": "concurrently \"npm start\" \"npm run client\""
  },
  "engines": {
    "node": "15.14.0"
  },
  "homepage": "https://github.com/UG-SaltyFish/Team-SaltyFish#readme",
  "dependencies": {
    //your dependencies
  }
}
```
After you get a Heroku account, you can run the following commands in a cmd at src/ directory:<br>
```
heroku create saltyfish2 --buildpack mars/create-react-app
```
Login Heroku with your API key. It sets the app to use this buildpack. A new app will be created in your account.<br>

```
git push heroku master
//or git push heroku $BRANCH_NAME:master
```
Deploy and push to the Heroku app from local repository.<br>

```
heroku open
```
The app loads in your browser at https://saltyfish2.herokuapp.com <br>

## Logins and passwords:<br>
<br>
<br>

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
* Add a new tag: v-1.0.<br>
  v-1.0 contains codes and corresponding documents for our project in Sprint 1, the team would start Sprint 2 based on v-1.0.<br>
