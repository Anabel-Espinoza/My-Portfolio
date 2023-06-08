import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <div className="d-flex justify-content-evenly flex-wrap">
        {props.projects.map((project) => (
            <div className="cards">
                <div className="card m-5" width="25rem">
                    <div className='image-area card-img-top'>
                        <img src={project.image}  className='project--img' alt="project-logo"/>
                    </div>
                    <div className='card-body'>
                        <div className='text-center'>
                            <h5 className='warm-color'>{project.name}</h5>
                        </div>
                        {/* <div class="accordion" id="descriptions">
                            <div class="accordion-item">
                                <h2 class="project-description" id="project-desc">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project" aria-expanded="true" aria-controls="project">
                                        Description
                                    </button>
                                </h2>
                                <div id="project" class="accordion-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#projects">
                                <div class="accordion-body">
                                    {project.description}
                                </div>
                            </div>
                        </div>    
                        </div>   */}
                        {/* <p>{project.description}</p> */}
                        <a href={project.repo} className='link-dark'>Link to Repository  <span class="material-symbols-outlined">link</span></a><br/>
                        <a href={project.deployed} className='link-dark'>Deployed app link <span class="material-symbols-outlined">arrow_right</span></a>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
 
}

export default Project;
