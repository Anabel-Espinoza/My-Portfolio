import LineGradient from '../hooks/LineGradient'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const myProjects = [
  {
      name: 'SportsConnect',
      description: 'Full-stack sports club management solution. Built with JS, React, and GraphQL with a MongoDB backend, Google Maps API, and Stripe Library. Helps users to build community through sports.',
      image: 'assets/SportsConnect.png',
      technologies: 'Node, express, React, MongoDB, mongoose, JWT, Stripe, bycript, Tailwind',
      repo: 'https://github.com/JaminHLO/jaan-event-manager',
      deployed: 'https://sports-connect-e11a3bbe276b.herokuapp.com/'
  }, 
  {
      name: 'HomeHub',
      description: 'Full-stack property management solution. Gives landlords and tenants the option to track their properties, manage maintenance requests, and communicate with each other.',
      image: 'assets/HomeHub-Logo.png',
      technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Bulma',
      repo: 'https://github.com/Anabel-Espinoza/HomeHub',
      deployed: 'https://home-hub-management.herokuapp.com/'
  }, 
  {
      name: 'NightOwl',
      description: 'An application that helps the user find the best events in their selected city and date, as well as dining recommendations close to the venue of the event the user has selected.',
      image: 'assets/night-owl-page-logo.png',
      technologies: 'JS, Bootstrap',
      repo: 'https://github.com/victoriamcn/NightOwl',
      deployed: 'https://victoriamcn.github.io/NightOwl/'
  }, 
  {
      name: 'MERN - Book Search',
      description: 'Refactored a Google Books API search engine built with RESTful API into a MERN stack application with GraphQL and Apollo Server.',
      image: 'assets/MERN-Book-search.png',
      technologies: 'MERN, GraphQL, Apollo Server',
      repo: 'https://github.com/Anabel-Espinoza/Book-Search',
      deployed: 'https://thawing-garden-33255-dc0e53e242e6.herokuapp.com/'
  }, 
  {
      name: 'TechBlog',
      description: "Full-stack application that offers developers a blog to share their thoughts or recommendations and comment on other's posts",
      image: 'assets/tech-blog.png',
      technologies: 'JS, express, sequelize, bycript, mysql2, express-handlebars, and Boostrap',
      repo: 'https://github.com/Anabel-Espinoza/Tech-Blog',
      deployed: 'https://mytech-blog.herokuapp.com/'
  }, 
  {
      name: 'Social-Media-BackEnd',
      description: 'API routes for a social media app. Uses a MongoDB database to create users, friends, thoughts, and reactions. Get, update, and delete routes are set are included.',
      image: 'assets/social-media-be.png',
      technologies: 'JS, express, mongoose, MongoDB',
      repo: 'https://github.com/Anabel-Espinoza/Social-Media-BackEnd',
  }, 
  {
      name: 'My Weather Dashboard',
      description: 'Browser app that allows the user to enter a city and find the current weather and a 5-day forecast retrieved from the Open Weather API',
      image: 'assets/weather-dashboard.png',
      technologies: 'JS, html, css, bootstrap',
      repo: 'https://github.com/Anabel-Espinoza/My-Weather-Dashboard',
      deployed: 'https://anabel-espinoza.github.io/My-Weather-Dashboard/'
  }, 
  // {
  //     name: 'Employee Tracker',
  //     description: 'Content Management System. Command line application that allows the user manage departments, roles, and employees from a database. The user has a list of options to perform: view and add departments, roles, or employees. User can also update employee role, delete department, and learn the budget per department.',
  //     image: 'assets/employee-tracker.png',
  //     technologies: 'JS, inquirer, MySQL2, dotenv',
  //     repo: 'https://github.com/Anabel-Espinoza/Employee_Tracker',
  // }, 
]


const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const Project = (props) => {
    console.log(props.projects)
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-yellow`
  
    return (
          
          <>
          {props.projects.map((project) => (
            <>
            <motion.div variants={projectVariant} className="relative m-[1px]">
              <div className="absolute h-full w-full opacity-5  hover:opacity-90 transition duration-500
               bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-black">
                <p className="text-2xl font-playfair text-yellow font-bold">
                  {project.name}
                </p>
                <p className="mt-3 text-sm font-semibold">
                  {project.description}     
                </p>
                <div className="flex justify-evenly mt-4 w-full">   
                  <a href={project.repo} className='text-yellow text-3xl block' target="_blank"><AiFillGithub /></a>
                  <a href={project.deployed} className='text-yellow text-3xl block' target="_blank"><AiFillEye /></a>
                </div>
              </div>
              <div className='bg-purple flex items-center w-full h-[380px]'>
                <img className="m-auto" src={project.image} alt={project.name}/>
              </div>
          </motion.div>

          </>
        ))}
        </>
    );
  };
  
  const Portfolio = () => {
    return (
      <section id="portfolio" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              PROJECTS
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Visit my repositories and deployed apps
          </p>
        </motion.div>
  
        {/* Projects */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="flex justify-center text-center items-center p-10 bg-yellow
                max-w-full max-h-[400px] text-2xl font-playfair font-semibold m-[1px]"
            >
              ENGAGING USER EXPERIENCES
            </div>
            <Project projects={myProjects} />
            <div
              className="flex justify-center text-center items-center p-10 bg-yellow
                max-w-full max-h-[400px] text-2xl font-playfair font-semibold m-[1px]"
            >
              SCALABLE SERVER-SIDE SOLUTIONS
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  

