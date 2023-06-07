import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <>
        {props.projects.map((project) => (
        <div className="card m-3" width="25rem">
            <div className='card-header text-center'>
                <h5>{project.name}</h5>
            </div>
            <div className='card-body'>
                <div className='image-area' width="350px" height="350px">
                    <img src={project.image}  className='project--img m-auto' alt="project-logo" width="350px"/>
                </div>
                <p>{project.description}</p>
                <a href={project.repo} >Link to Repository</a><br/>
                <a href={project.deployed}>Deployed app link</a>
            </div>
        </div>
        ))}
        </>
    )
 
}

export default Project;
