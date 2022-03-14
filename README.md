![logo](https://user-images.githubusercontent.com/93285219/157888599-5be96246-c9e0-4d6f-8449-649806b4bb60.png)

# Back-End Repo for SalVeg

This repo contains the **Back-End** for SalVeg. 
SalVeg is a web application created by Team Six Bits for the final 4 week project at the School of Code (Nov 2021 - Mar 2022).

## 1. Description

We were given a very open-ended brief - to solve a problem. 

With this in mind, we decided to put our efforts towards solving the problem of food waste.

## 2. Our Problem Statement

> Of all fresh food that's produced, roughly a third of it is wasted, from farms and home growers. Despite supermarkets high cosmetic standards, a significant amount of consumers are prepared to buy wonky or otherwise edible vegetables, but there is no easy way for consumers to communicate with producers, or consumer-consumer.

## 3. Our Solution

We created an app that works as a platform to connect people who have excess fresh produce (whether this is farmers or home growers) to people who are happy to buy vegetables directly from producers even if they don't meet the standards held by supermarkets.


## **4. Installation**🔧

### Part 1: Prepare Local Server via VS Code
1. Clone this repo by running `git clone https://github.com/SchoolOfCode/final-project-api-six-bits.git`
2. `cd final-project-api-six-bits`
3. `npm install`

### Part 2: Initialise PostgreSQL Database via Heroku 
1. Create an app with the Heroku PostgreSQL add-on
2. Set up Continuous Deployment pipeline, linking Heroku to GitHub
3. Copy database credentials from Heroku to your local copy of .env

If you're new to Heroku or PostgreSQL on Heroku, [read here for more information](https://devcenter.heroku.com/categories/heroku-postgres)

### Part 3:  Initialise Database and Run Local Server via VS Code
1. Create users table `npm run db:createusers`
2. Create posts table `npm run db:createposts`
3. Run local server `npm run start`

## 5. Common Commands  🖥️ 

1. `npm run dev` Starts local development server at [http://localhost:3000](http://localhost:3000)
2. `npm run build` Runs build
3. `npm run start` Runs API server
4. `npm run test` Runs a suite of tests

## 6. Back-End Built With ⚡
- Express    -    Routing and Server Middleware
- GitHub     -    Sharing and Reviewing Code
- Heroku     -    Continuous Deployment of Database
- Jest       -    Unit Testing
- Node       -    Back-End JS / API
- PostgreSQL -    Database


## 7. Front-End Repo URL

[Click here to view the Front-End Repo for SalVeg](https://github.com/SchoolOfCode/final-project-front-end-six-bits.git)

