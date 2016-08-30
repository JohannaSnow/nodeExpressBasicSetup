Node Express setup
==================

In this project we'll set up a basic NodeJS and Express project. Later, we'll be adding JQuery to this project. Our objective here is to set up a basic project using these technologies and set up a simple localhost server and a basic site upon which you may build later.

Install NodeJS and NPM
----------------------
First, you'll want to make sure you've got Node and NPM installed: https://nodejs.org/en/download/

Basic Setup
-----------
First, create a folder within which we'll create the project. Next, in terminal, run "npm init" in this folder. You'll be asked a number of questions, many of which you can simply click past with "return", but fill in those which you feel the need to see not remain hollow:
![alt text](pics/0 - npmInit.png)

You'll now see a "package.json" file in this folder. More on this later.

For now, let's install the node modules we need. In the console and still in the project folder type the following:

* npm install express -- save

![alt text](pics/1 - installExpress.png)

You'll see some action in the terminal that as the express module is installed.

You may also note that there is a new folder named 'node_modules' in the project folder now with an "express" folder within. This holds the scripts for 'express' that the project will now use.

If you look at the 'package.json' file now you'll also notice that 'express' along with its version are listed in the 'dependencies' portion of the file now:
![alt text](pics/2 - expressDependency.png)

Next, let's install 'body-parser' the same way:

* npm install body-parser --save

Regarding .gitignore and dependencies
---------------------------
Create a file names ".gitignore" in your project folder. Files and folders listed in this file are ignored by (wait for it...) git. One of the things that 'package.json' does is allow you to NOT upload your node modules to github. They can be installed by anyone so by having them listed in package.json we can add them to .gitignore like so:
![alt text](pics/3 - gitignore.png)

When users pull, fork, or otherwise download a project like this one they need only run "npm install" in the command line to install all needed dependencies. Npm will read what the dependencies are from the package.json file and automatically instal them in the project.
