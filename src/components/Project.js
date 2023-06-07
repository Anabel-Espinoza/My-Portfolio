import React, { useState } from 'react';

const Project = () => {
    return (
        <div className="card ">
            <div className='card-header text-center'>
                <h6>Project name</h6>
            </div>
            <div className='card-body'>
                <img src="images/ae-logo.png" alt="project-logo" width="100px"/>
                <p>description description description description</p>
                <a>Repository</a>
                <a>Deployed App link</a>
            </div>
        </div>
    )
 
}

export default Project;
