Job CRUD App
This application allows users to perform CRUD operations (Create, Read, Update, Delete) on job postings and company details. It is built using Spring Boot for the backend, MySQL for the database, and Angular for the frontend.

Features
Create: Users can create new job postings and add company details.
Read: Users can view existing job postings and company details.
Update: Users can edit and update job postings and company details.
Delete: Users can delete job postings and associated company details.

Technologies Used
Spring Boot: Backend framework for creating RESTful APIs.
MySQL: Relational database for storing job postings and company details.
Angular: Frontend framework for building a responsive user interface.
Bootstrap: Frontend library for styling and layout.
Maven: Dependency management and build automation for Java projects.
npm: Package manager for installing and managing frontend dependencies.

Setup Instructions
Backend (Spring Boot)
Clone this repository: git clone <repository-url>
Navigate to the backend directory: cd backend
Open src/main/resources/application.properties and configure your MySQL database connection settings.
Run the Spring Boot application: mvn spring-boot:run
Frontend (Angular)
Navigate to the frontend directory: cd frontend
Install dependencies: npm install
Start the Angular development server: ng serve

Usage
Open your web browser and navigate to http://localhost:4200 to access the application.
Use the provided UI to perform CRUD operations on job postings and company details.
