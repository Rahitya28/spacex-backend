# SpaceX Mission Management System

## Project Overview

SpaceX Mission Management System is a backend application developed using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Cloudinary.

The system allows users to register, log in, and manage SpaceX missions through CRUD operations.

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* BcryptJS
* Multer
* Cloudinary
* GitHub
* Render

## Features

### Authentication

* User Registration
* User Login
* Password Encryption using BcryptJS
* JWT Token Authentication

### Mission Management

* Add Mission
* Get All Missions
* Get Mission By ID
* Update Mission
* Delete Mission
* Upload Mission Images using Cloudinary

### Deployment

* Hosted on Render
* Source Code Available on GitHub

## Mission Fields

Each mission contains the following details:

* Mission Name
* Rocket Name
* Launch Date
* Status
* Description
* Crew Count
* Image

## API Endpoints

### Authentication Routes

#### Register User

POST `/auth/register`

#### Login User

POST `/auth/login`

<img width="1216" height="213" alt="Screenshot 2026-06-17 203444" src="https://github.com/user-attachments/assets/23b70e20-e081-4a7d-9080-35523d0c85f7" />

### Mission Routes

#### Add Mission

POST `/api/v1/add/mission`

#### Get All Missions

GET `/api/v1/get/missions`

<img width="1438" height="798" alt="Screenshot 2026-06-18 154045" src="https://github.com/user-attachments/assets/9d157972-1c9c-4fa3-b490-492697370f29" />

#### Get Mission By ID

GET `/api/v1/get/mission/:id`

#### Update Mission

PUT `/api/v1/update/mission/:id`

#### Delete Mission

DELETE `/api/v1/delete/mission/:id`

## Database

MongoDB Atlas is used for storing:

* User Information
* Mission Information

## Deployment

### GitHub Repository

Source code is hosted on GitHub.

Repository:
https://github.com/Rahitya28/spacex-backend

### Render Deployment

Live API:
https://spacex-backend-g576.onrender.com

<img width="587" height="216" alt="image" src="https://github.com/user-attachments/assets/c8f3ef4b-528b-46cb-8b66-7fc76dd1c25d" />



