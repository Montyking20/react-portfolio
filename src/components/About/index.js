import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
  
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"About Me".split("")}
                idx={15}
              />  
             </h1>
             <p>I am a very ambitious front-end developer looking for a role in an established tech company with the chance to work with the latest technologies on challenging and diverse projects.</p>
             <p align="LEFT">I am confident, and curious about other coding languages. I perpetually work on improving my skills one app at a time.</p>
             <p>If I need to define myself in ine sentence that would be a God-fearing, family man, father to two amazing children, a hockey and football fan, and tech obsessed. </p>  
         </div>
         <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#a83200" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#ffdf50" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#040e92" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#6b1c0a" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About