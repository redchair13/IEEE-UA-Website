import React from 'react';
import './Board.css';
import board from '../icons/board.jpg';
import member from '../icons/member.jpg';
import data from '../data/Members.json';
import { useState } from 'react';
import { useEffect } from 'react';


function Board() {
  
  const [year, setYear] = useState('2024');
  const [semester, setSemester] = useState('spring');
  const [filteredMembers, setFilteredMembers] = useState([]);
  
  useEffect(() => {
    const filtered = data.filter(
      (member) => member.start === parseInt(year) && member.startSemester === semester
    );
    setFilteredMembers(filtered);
  }, [year, semester]);

  const Eboard = filteredMembers.filter(member => member.branch === 'eboard');
  const Tboard = filteredMembers.filter(member => member.branch === 'tboard');
  const Dboard = filteredMembers.filter(member => member.branch === 'dboard');
  const Jboard = filteredMembers.filter(member => member.branch === 'jboard');

  return (
    <div className = 'page'>
      <div className = 'board-container'>
      <img src={board} className = 'top-pic' />
      <h1 className = "title">OUR BOARD</h1>
      <br></br><br></br>
      </div>
      <div className ='button-lay'>
        <label htmlFor='year'></label>
        <select id='year' onChange={(e) => setYear(e.target.value)}>
          <option disabled selected>Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
        <label htmlFor='semester'></label>
        <select id='semester' onChange={(e) => setSemester(e.target.value)}>
        <option disabled selected>Fall/Spring</option>
        <option value="fall">Fall</option>
        <option value="spring">Spring</option>
        </select>
      </div>
      <br></br><br></br>

      <h2>Eboard</h2>
      <div className = 'board-members'>
        {Eboard.map((member) => (
          <div className = 'member'>
            <img src={member.image}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>Dboard</h2>
      <div className = 'board-members'>
        {Dboard.map((member) => (
          <div className = 'member'>
            <img src={member.image}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>Jboard</h2>
      <div className = 'board-members'>
        {Jboard.map((member) => (
          <div className = 'member'>
            <img src={member.image}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>Tboard</h2>
      <div className = 'board-members'>
        {Tboard.map((member) => (
          <div className = 'member'>
            <img src={member.image}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;