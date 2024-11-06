import React from 'react'
import htmlLogo from '../../src/assets/html-svgrepo-com.svg'
import javascriptLogo from '../../src/assets/javascript-svgrepo-com.svg'
import reactLogo from '../../src/assets/reactjs-svgrepo-com.svg'
import cssLogo from '../../src/assets/css3-svgrepo-com.svg'
import githubLogo from '../../src/assets/github-color-svgrepo-com.svg'


const Skills = () => {
  return (
    <div className='skillsWrapp-div'>
      <div className="headingText-div">
        <h2 className='heading'>My <span>Skills</span></h2>
      </div>
      <div className="technicalSkills-div">
        <div className="textDiv">
        <h2>Experience</h2>
        <p>This are the technologies i've worked with.</p>
        </div>

        <div className="IconsWrappper-div">
          <div className="html-div Icon">
            <img src={htmlLogo} alt="" srcSet="" />
            <p>HTML</p>
          </div>
          <div className="javascript-div Icon">
            <img src={javascriptLogo} alt="" srcSet="" />
            <p>JavaScript</p>
          </div>
          <div className="react-div Icon">
            <img src={reactLogo} alt="" srcSet="" />
            <p>React.js</p>
          </div>
          <div className="css-div Icon">
            <img src={cssLogo} alt="" srcSet="" />
            <p>CSS</p>
          </div>
          <div className="github-div Icon">
            <img src={githubLogo} alt="" srcSet="" />
            <p>GitHub</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills
