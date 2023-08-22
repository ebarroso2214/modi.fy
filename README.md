# **Modi.FYI**

Welcome to my MERN Stack blog/social media site, this web application is catered towards car enthusiasts like myself. The design of this web application is to allow others to showcase their car builds. 
## What is it?
You may be wondering what this application does. This application is very straightforward and easy to use. The main goal of this application is for the car enthusiast community to be able to share their project builds and what the parts the used were, the cost of each part / modification, and the grand total of everything. This would be used by to show off their build with a description like how some social media platforms do. However, the big difference between this and other social media applications is the ability to add a list of items and their price with the grand total. This helps other enthusiasts gain inspiration for their builds and gauge what they would be spending roughly.

## Features
The features this application includes is the ability to post, login, and register.

## Tools used
The tools used to make this application consists of JWT(jsonwebtoken) for authentication / authorization, bcrypt for hashing passwords and comparing them, React for the frontend, Mongoose / MongoDB for the backend and express + node. 

# API
This is a table of the Methods and Paths used for this project or that will be used in this project. 

**NOTE:** 
Some of the Methods and Paths are not incorporated with the front end features yet. However, they do work.

| Method | Path | Purpose |
| --- | --- | --- |
| GET | /users | Get all users |
| GET | /users/:id | Get a single user |
| GET | /posts | Get all posts |
| GET | /posts/:id | Get a single post |
| POST | /posts | Create a post |
| POST | /users | Create a user |
| POST | /users/login | Login |
| PUT | /posts/:id | Update a post |
| PUT | /users/:id | Update a user |
| DELETE | /users/:id | Delete a user |
| DELETE | /posts/:id | Delete a post | 



### **NOTE**

While this may be the production version, this is nowhere near finished and will be updated in the future to be able to provide better features and a more enhanced UI and UX. 

## Link to page
While this may be on GitHub pages for now, the plan is to migrate it over to AWS.

https://ebarroso2214.github.io/modi.fyi/
