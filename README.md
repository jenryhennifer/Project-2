# WhimIt!

![Whim](public/img/whimItLogo.png)

## Description
The purpose of this project was to produce a forum style blog for users to freely use when they come up with an idea on the whim!
WhimIt is a program to reproduce some of the functionalities of the popular forum based website "Reddit" which is organized by categories, posts, and comments.

## Table of Contents
* [Getting Started](#getting-started)
* [Tech User](#tech-used)
* [Installation](#installation)
* [Usage](#usage)
* [Author](#author)
* [Acknowledgments](#acknowledgments)
* [License](#license)

## Getting Started
* [Github Repository](https://github.com/jenryhennifer/Project-2/pull/19)
* [Heroku Deployed Link](https://obscure-citadel-38973.herokuapp.com/)
* [Usage Demo Video](https://drive.google.com/file/d/1MEol4kxfMhk_hDraNP13MrBBKiYFvNri/view)

## Tech Used

* GitHub
* Node.js
* Bulma CSS
* npm
    * Sequelize
    * Passport
    * Bcrypt
    * Express

## Installation
It is recommended to run and test the program through the Heroku deployed link for simplicity however if you wish to test the program locally then you will have download the files from the repository and set up a database using MySQL Workbench and the code provided in the schema.sql file.

Run: 
```
npm init
```
and also an
```
npm install
```
in order to get the appropriate package required for the application installed.
After a successful installation, you can run
```
node server.js
```
on an integrated terminal for the server.js file to start the local server.

## Usage
### Log-in/Sign-up
At the root of the program is the login and sign-up pages where users can sign-up or log into an account to access WhimIt and it's contents.

### Main Page
On the main page of the application in the categories box of the page, users can add and delete categories to the website. The delete category button will delete the category that the user is currently on. 
Within these categories users can create posts using the "Create new post" which will reveal an input form for entering a post title and description. Clicking the "Add Post" button will generate the information inputted into a post block in the category with the post title as a link to access the post and view/add comments.

### Whims (Posts)
Inside of the posts users are able to create comments which are added to the posts. Clicking the back button will bring the user back to the category that they are in.

# Authors

[Jennifer Henry](https://github.com/jenryhennifer)

[Jerry Leong](https://github.com/jleong20)

[Nathan Vu](https://github.com/nathanmvu)
