# PB Tech Website Redesign Project

## Introduction

This project was a collaboration with other UX designers at Mission Ready aimed at redesigning the PB Tech website to enhance user experience.

![PB](readme-images/screen1.png)
![PB](readme-images/screen2.png)
![PB](readme-images/screen3.png)
![PB](readme-images/screen4.png)

## About the Project

The primary goal of the project was to revamp the PB Tech website, taking user experience to the next level. We focused on improving the website's usability, accessibility, and overall visual appeal.

## Project Features

- Improved navigation and search functionality
- Responsive design for a seamless experience across devices

## Technologies Used

- Javascript
- React
- Tailwind CSS
- Node.js
- Express
- MongoDB
- Docker Compose

## Project Structure

- `/frontend`: Contains the React frontend code.
- `/backend`: Includes the Node.js backend code. Also holds the MongoDB data.


## Getting Started 


### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm
- Docker and Docker Compose (for Dockerized deployment)


### Installation and Deployment

To run the MERN stack project locally, follow these steps:

1. Clone the repository and navigate to the project's root directory.

2. Configure MongoDB Connection.

3. Run the backend server:
   ```bash
   cd backend
   node server.js  
   ```


4. Run the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

5. Access the app at `http://localhost:3000/product` in your web browser.

6. To deploy the project using Docker Compose:

- Create a docker-compose.yml file with the appropriate configurations.
- Build and start the Docker containers:
  ```docker-compose up```
- Access the deployed app at http://localhost:3000/product in your web browser.

7. Connect the backend to MongoDB using the service name defined in the Docker Compose file.



## Contact

For any inquiries, you can reach me at audwns39@hotmail.com 