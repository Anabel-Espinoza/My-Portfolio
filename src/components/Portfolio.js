import React from 'react'
import Project from './Project'

const myProjects = [
    {
        name: 'HomeHub',
        description: 'Full-stack property management solution. Gives landlords the option to track their properties, assign tenants, receive maintenance requests, and communicate with their tenant in an easy way. The app allows tenants to check their rental details, submit maintenance tickets, and communicate with their landlords through the messaging system.',
        image: '',
        technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Bulma',
        repo: '',
        deployed: ''
    }, 
    {
        name: 'NightOwl',
        description: 'An application that helps the user find the best events in their selected city and date, as well as dining recommendations close to the venue of the event the user has selected. The event search is done with the TicketMaster API, and the dining recommendations with the LocalBusiness API.',
        image: '',
        technologies: 'JS, Bootstrap',
        repo: '',
        deployed: ''
    }, 
    {
        name: 'MyTechBlog',
        description: 'My first solo full-stack application that offers developers a blog to share their thoughts or recommendations. The user can create and access their account and create posts in their profile, comment on other users posts, and update/delete their posts.',
        image: '',
        technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Boostrap',
        repo: '',
        deployed: ''
    }, 
    {
        name: 'Social-Media-BackEnd ',
        description: 'API routes for a social media app. Uses a MongoDB database to create users, friends, thoughts, and reactions. Get, update, and delete routes are set are included.',
        image: '',
        technologies: 'JS, express, mongoose, MongoDB',
        repo: '',
        deployed: ''
    }, 
]

const Portfolio = () => {
    return (
        <div>
            < Project />
        </div>
    )
}

export default Portfolio