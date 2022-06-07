import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import './index.scss'


const Work = () => {
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
                  strArray={['M', 'y', ' ', 'W', 'o', 'r ', 'k']}
                  idx={15}
                />  
               </h1>
        <div>
        </div>
      </div>
      </div>
      <div className="projectDivs">
                <a href="https://palabra-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <div class="other-projects project-1 opacity">
                        <div className="other-projects-label label-1">Palabra: Word of <br /> the Day App</div>
                    </div>
                </a>
            </div>


        <Loader type="pacman" />
        </> 
    )
}   



export default Work