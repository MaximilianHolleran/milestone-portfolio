// import {useState} from 'react'
import linkedinLogo from './public/assets/linkedinLogo.jpg';
import lPortrait from './assets/portrait.jpg';
import resumeThumbnail from './assets/resumeThumbnail.png';

function Contact (){
    const linkInLogo = linkedinLogo
    const luisImg = lPortrait
    const resumeThumb = resumeThumbnail
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
                <img src={luisImg} alt="profilePic"></img>
                <img src={resumeThumb} alt="resume"/>
                <footer>
                    <a href="https://www.linkedin.com/in/luis-alberto-beltran-4bb2b75b/" target="_blank">
                        <img src={linkInLogo} alt="linkedinSocial"/>
                    </a>

                </footer>
            </div>
        </div>
    )
}

export default Contact