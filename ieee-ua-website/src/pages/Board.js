import React from 'react';
import './Board.css';
import board from '../icons/board.jpg';
import member from '../icons/member.jpg';

function Board() {
  
  return (
    <div className = 'page'>
      <div className = 'board-container'>
      <img src={board} className = 'top-pic' />
      <h1 className = "title">OUR BOARD</h1>
      <br></br><br></br>
      </div>
      <div className ='button-lay'>
        <button>FALL/SPRING</button>
        <button>YEAR</button>
      </div>
      <br></br><br></br>
      <h2>Eboard</h2>
      <div className = 'board-members'>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
      </div>

      <h2>Dboard</h2>
      <div className = 'board-members'>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
      </div>

      <h2>Jboard</h2>
      <div className = 'board-members'>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
      </div>

      <h2>Tboard</h2>
      <div className = 'board-members'>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
        <div class = 'member'>
          <img src={member} />
          <p>Name<br />Position</p>
        </div>
      </div>
    </div>
  );
}

export default Board;