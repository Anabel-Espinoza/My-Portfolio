import React from 'react'
import Project from './Project'

const myProjects = [
    {
        name: 'SportsConnect',
        description: 'Full-stack sports club management solution. Built with Javascript, React, and GraphQL with a MongoDB backend, Google Maps API, and Stripe Library. Helps users to build community through sports. User can create and join clubs and events in their area of interest or close to their location.',
        image: 'images/SportsConnect.png',
        technologies: 'Node, express, React, MongoDB, mongoose, JWT, Stripe, bycript, Tailwind',
        repo: 'https://github.com/JaminHLO/jaan-event-manager',
        deployed: 'https://sports-connect-e11a3bbe276b.herokuapp.com/'
    }, 
    {
        name: 'HomeHub',
        description: 'Full-stack property management solution. Gives landlords the option to track their properties, assign tenants, receive maintenance requests, and communicate with their tenant in an easy way. The app allows tenants to check their rental details, submit maintenance tickets, and communicate with their landlords through the messaging system.',
        image: 'images/HomeHub-Logo.png',
        technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Bulma',
        repo: 'https://github.com/Anabel-Espinoza/HomeHub',
        deployed: 'https://home-hub-management.herokuapp.com/'
    }, 
    {
        name: 'NightOwl',
        description: 'An application that helps the user find the best events in their selected city and date, as well as dining recommendations close to the venue of the event the user has selected. The event search is done with the TicketMaster API, and the dining recommendations with the LocalBusiness API.',
        image: 'images/night-owl-page-logo.png',
        technologies: 'JS, Bootstrap',
        repo: 'https://github.com/victoriamcn/NightOwl',
        deployed: 'https://victoriamcn.github.io/NightOwl/'
    }, 
    {
        name: 'MERN - Book Search',
        description: 'Refactored a Google Books API search engine built with RESTful API into a MERN stack application with GraphQL and Apollo Server. Allows the user to create an account, sign in, search for books, add them to their profile, review previously saved books, and remove books from their list.',
        image: 'images/MERN-Book-search.png',
        technologies: 'MERN, GraphQL, Apollo Server',
        repo: 'https://github.com/Anabel-Espinoza/Book-Search',
        deployed: 'https://thawing-garden-33255-dc0e53e242e6.herokuapp.com/'
    }, 
    {
        name: 'TechBlog',
        description: 'My first full-stack application that offers developers a blog to share their thoughts or recommendations. The user can create and access their account and create, delete, or update their posts in their profile, and comment on other users posts.',
        image: 'images/tech-blog.png',
        technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Boostrap',
        repo: 'https://github.com/Anabel-Espinoza/Tech-Blog',
        deployed: 'https://mytech-blog.herokuapp.com/'
    }, 
    {
        name: 'Social-Media-BackEnd',
        description: 'API routes for a social media app. Uses a MongoDB database to create users, friends, thoughts, and reactions. Get, update, and delete routes are set are included.',
        image: 'images/social-media-be.png',
        technologies: 'JS, express, mongoose, MongoDB',
        repo: 'https://github.com/Anabel-Espinoza/Social-Media-BackEnd',
    }, 
    {
        name: 'My Weather Dashboard',
        description: 'Browser app that allows the user to enter a city and find the current weather and a 5-day forecast retrieved from the Open Weather API',
        image: 'images/weather-dashboard.png',
        technologies: 'JS, html, css, bootstrap',
        repo: 'https://github.com/Anabel-Espinoza/My-Weather-Dashboard',
        deployed: 'https://anabel-espinoza.github.io/My-Weather-Dashboard/'
    }, 
    // {
    //     name: 'Employee Tracker',
    //     description: 'Content Management System. Command line application that allows the user manage departments, roles, and employees from a database. The user has a list of options to perform: view and add departments, roles, or employees. User can also update employee role, delete department, and learn the budget per department.',
    //     image: 'images/employee-tracker.png',
    //     technologies: 'JS, inquirer, MySQL2, dotenv',
    //     repo: 'https://github.com/Anabel-Espinoza/Employee_Tracker',
    // }, 
]

const Portfolio = () => {
    return (
        <div className="">
            < Project projects={myProjects} />
        </div>
    )
}

export default Portfolio