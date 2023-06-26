import React from "react"

const Resume = () => {
    return (
        <div className='contact--area w-50 my-5 mx-auto d-flex border'>
            <div className='contact--form w-100 p-4'>
                <h5><strong>Resume</strong></h5>
                <p>Download my <a href="My-Portfolio/images/AnaEspinoza-Resume-GT.pdf" target="_blank" className="light-blue">resume</a>.</p>
                <h6><strong>Front-End technologies</strong></h6>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Responsive desing</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                </ul>
                <h6><strong>Back-End technologies</strong></h6>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume
