import React from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Project = (props) => {
    console.log(props)
    return (
        <div className="d-flex justify-content-evenly flex-wrap">
        {props.projects.map((project) => (
            <div className="cards">
                <div className="card m-5">
                    <div className='image-area card-img-top'>
                        <img src={project.image}  className='project--img' alt="project-logo"/>
                    </div>
                    <div className='card-body'>
                        <div className='text-center'>
                            <h5 className='warm-color'>{project.name}</h5>
                        </div>
                        <p><small>{project.description}</small></p>
                    </div>
                    <div className="d-flex justify-content-evenly">   
                        <h3><a href={project.repo} className='light-blue' target="_blank"><AiFillGithub /></a></h3><br/>
                        <h3><a href={project.deployed} className='light-blue' target="_blank"><AiFillEye /></a></h3>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
 
}

export default Project;
