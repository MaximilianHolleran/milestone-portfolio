import React from 'react';


function Gallery(){
    return(
        <div className="showroom" >
            <div className="game1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px', paddingLeft: '200px' }}>
                <h2>Mario type game by Max Holleran</h2>
                <iframe width="750" height="400" src="https://www.youtube.com/embed/vnbgCAGU8zg" title="YouTube video player" style={{borderRadius: '8px'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://github.com/MaximilianHolleran/milestone-project-1" target="_blank">Max's Milestone Project 1 on GitHub</a>
            </div>
            <div className="game2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px', paddingLeft: '200px'  }}>
                <h2>Pacman type game by Andres Polo-Wood</h2>
                <img src="/assets/pacman.andres.png" alt="andres pacman game" style={{ maxWidth: '150%', height: 'auto', borderRadius: '8px' }} />
                <a href="https://github.com/DudePolo/P1BG-milestone-project" target="_blank">Andre's Milestone Project 1 on Github</a>
            </div>
            <div className="game3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px', paddingLeft: '200px'  }}>
                <h2>Shinobi Maze game by Luis Beltran</h2>
                <img src="/assets/luis.maze.game.png" alt="luis maze pic" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                <a href="https://github.com/labbeltran/MILESTONE-FINAL" target="_blank">Luis's Milestone Project 1 on Github</a>
            </div>
            <div className="game4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px', paddingLeft: '200px'  }}>
                <h2>Tic tac toe game by Mohamed Abdel Rahman</h2>
                <img src="/assets/moe.tictactoe.png" alt="moes tic tac toe game" style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }} />
                <a href="https://github.com/1moreinthetolly/Milestone-Project-1" target="_blank">Moe's Milestone Project 1 on Github</a>
            </div>
        </div>
    )
}

export default Gallery