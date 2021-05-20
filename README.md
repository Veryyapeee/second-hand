# Second hand

This is project for chain of second-hand stores.
Project status: in progress

### Table of Contents
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Setup](#setup)
* [Demo](#demo-link)

### Technologies
-----------------
Project is created with:
* TypeScript
* React
* React-query
* SCSS Modules
* Node.js with Express.js

### IDE
- Visual Studio Code with extensions

### Requirements
-----------------
To be able to run our project locally, you need to have installed **yarn package manager**
If you do not know if you have it installed on your computer and you still want to run our project follow these steps:

#### Windows command prompt/Linux bash

##### Run *npm -v*
* *If you received a number like 'x.x.x' you already have installed* **npm package manager** *on your computer and you can follow the next part, which is installing **yarn**
* *Otherwise, you will have to install it, the best way to do it is installing it globaly by running the command **npm install npm@latest -g***
* *After that you can run again the command from the first line just to confirm that you have succesfully installed required* **package manager**
##### Install yarn
* *To install yarn* **package manager (faster version of npm)** *run the commnad **npm install --global yarn***
* *confirm yarn install by typing command **yarn --version***

### Setup
-----------------
#### DataBase
* *To run the project locally you will have to create your own MongoDB Atlas account, and have your own cluster/db created* <a href="https://www.mongodb.com/cloud/atlas/register">*here*</a>

#### To run the project locally follow these steps:
* *Clone this repository*
* *Open repository in your code editor*
* *Run command **yarn*** to install all dependencies
* *Run command **yarn dev:i*** to run local server on localhost:3000
* *Create .env file within the server catalog, this file should contain important information which lack of will cause fatal errors.*</br></br>
**this is the data that you should add into .env file:**</br></br>
MONGO_USER=\<you user name></br>
MONGO_PASSWORD=\<your user password></br>
MONGO_DB_NAME=\<your db name></br>
PORT=5000 < Leave it like that!</br>
ADDRESS=localhost < Leave it like that!</br>
JWT_PRIVATE_KEY=\<some random password></br>
* *Run commad **yarn dev*** in root directory to run whole project
* *Run command **yarn build*** to build the project

### Demo link
-----------------
- -
