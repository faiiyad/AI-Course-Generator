# CourseGen

### [Live Video Showcase](https://youtu.be/1Epwa6teADc)

![banner](https://raw.githubusercontent.com/faiiyad/AI-Course-Generator/refs/heads/main/assets/hat.png)

Generate an entire course - with chapters, subtopics and interactive quizzes - all with a single prompt!

### Table of Contents
- [Features](#features)
- [How it works](#how-it-works)
- [Tools used](#tools-used)
- [Deploying locally](#deploying-locally)

## Features
### [1] Generate a fully interactive course about literally anything!
From C++ to One piece - all it takes is a single prompt.

<img src="https://raw.githubusercontent.com/faiiyad/AI-Course-Generator/refs/heads/main/assets/loading.gif" height="300px" style="width:auto;" />

### [2] Interactive quizzes - with real-time stat tracking!
MCQs and One-Word questions to test your knowledge.

<img src="https://raw.githubusercontent.com/faiiyad/AI-Course-Generator/refs/heads/main/assets/quiz.gif" height="300px" style="width:auto;" />

### [3] User Dashboard!
See your all time track-record, as well as your progress in all the courses you have attempted.

<img src="https://raw.githubusercontent.com/faiiyad/AI-Course-Generator/refs/heads/main/assets/user.gif" height="300px" style="width:auto;" />

### [4] Authentication System!
Your data is safe! The app uses `argon2` for hashing and `JWT` for authentication to ensure only you have access to your data.

<img src="https://raw.githubusercontent.com/faiiyad/AI-Course-Generator/refs/heads/main/assets/auth.gif" height="300px" style="width:auto;" />

## How it works

The frontend is built using `React.js` and some components from `nivo`.

The backend is built using `flask`. Each core service is divided into it's own blueprint. While monolithic in it's current state, each blueprint can be run independently for a microservice architecture if needed.

The course is generated using an LLM. While the current version of the app uses `GEMINI 2.5 Flash Lite` to generate the content, it is also possible to use a locally run LLM such as Mistral/Deepseek on ollama (or independently using transformers). I have decided to not use a fine-tuned LLM since the scope of the app is very vast, and generalization is required for it to generate "anything".

Authentication is done by first hashing + salting the password using `argon2` and then storing it in the database. Everytime the user logs in, a JWT is issued, which is used in subsequent requests to verify the user's identity.

Everytime the user attempts a quiz on any course, it is recorded in the database. In the user dashboard, they can then view their all time stats, as well as progress for each course.


## Tools used
React.js, JavaScript, Flask, Python, argon2, JWT

## Deploying locally
The current version on GitHub is still in the devolpment stage. But it can be run locally:
### Steps:
- setup `React.js`
- setup `Flask`
- create a MongoDB atlas account (you can use a local setup, but you will have to change the database blueprint)
- clone the repo
- download the required packages
- setup .env file (see below)
- start the frontend and backend
- enjoy!
``` 
# example .env setup
GEMINI_API_KEY = "your_api_key" # set model to 2.5 Flash Lite
mongodb_user = "your_mongodb_username" # the free tier of mongodb atlas is sufficient
mongodb_pass = "your_mongodb_password"
JWT_SECRET_KEY = "your_secret_key"
