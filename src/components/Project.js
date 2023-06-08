import React from 'react';

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
                        <a href={project.repo} className='link-dark' target="_blank">Link to Repository  <span class="light-blue material-symbols-outlined">link</span></a><br/>
                        <a href={project.deployed} className='link-dark' target="_blank">Deployed app link <span class="light-blue material-symbols-outlined">arrow_right</span></a>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
 
}

export default Project;
