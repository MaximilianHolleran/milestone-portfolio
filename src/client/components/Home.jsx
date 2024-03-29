import React, { useState, useEffect } from 'react'; 
import NavBar from './NavBar'

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
    
    <div className="displayBox">
      Randomly selected: {skillDisplay}
      <NavBar/>
    </div> 
  );
}

export default Home;