import React, { useState, useEffect } from 'react'; 
import NavBar from '../components/NavBar/NavBar'
import backgroundRegular from './milestone-background.jpeg'
import backgroundDark from './milestone-background-white.jpeg'

function Home() {
  let skillList = [
    'JavaScript', 'React', 'Redux', 'Python', 'Git', 'Express',
    'NodeJS', 'Express', 'Mongoose/Mongo', 'Sequelize'
  ];

  

  const [skillDisplay, setSkillDisplay] = useState('');
 
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomSkillIndex = Math.floor(Math.random() * skillList.length); // Corrected variable name
      setSkillDisplay(skillList[randomSkillIndex]);
    }, 1500);

    // Cleanup
    return () => { clearInterval(intervalId); };
  }, []); // Added dependency array

  return (
    <>
    <NavBar/>
    <div className="displayBox">
      <a><img className="backgroundImg" src={backgroundRegular} alt="cyberpunk-themed building"/></a>
      <div className="skillDisplay">
      Knowledgeable in: {skillDisplay}
      </div>
      
    </div> 
    </>
  );
}

export default Home;