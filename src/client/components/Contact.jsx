import {useState} from 'react'
import linkinLogo from './linkedinLogo.jpg'

function Contact (){
    const linkInLogo = linkinLogo
    return(
        <div>
            <div className="andres">
                <img src="" alt="profilePic"></img>
                <img src="" alt="resume"/>
                <footer>
                    <a href=""><img src={linkInLogo} alt="linkedinSocial"/></a>
                </footer>

            </div>
            <div className="max">
                <img src="" alt="profilePic"></img>
                <img src="" alt="resume"/>
                <footer>
                    <a href=""><img src={linkInLogo} alt="linkedinSocial"/></a>
                </footer>
            </div>
            <div className="moe">
                <img src="" alt="profilePic"></img>
                <img src="" alt="resume"/>
                <footer>
                    <a href=""><img src={linkInLogo} alt="linkedinSocial"/></a>
                </footer>
            </div>
            <div className="luis">
                <img src="" alt="profilePic"></img>
                <img src="" alt="resume"/>
                <footer>
                    <a href="https://www.linkedin.com/in/luis-alberto-beltran-4bb2b75b/"><img src={linkInLogo} alt="linkedinSocial"/></a>
                </footer>
            </div>
        </div>
    )
}

export default Contact