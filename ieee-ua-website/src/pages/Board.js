import React from 'react';
import './Board.css';
import board from '../icons/board.jpg';
import empty from '../icons/empty.jpg';
import data from '../data/Members.json';
import Github from '../icons/github.png';
import Linkedin from '../icons/linkedin.png';
import { useState } from 'react';
import { useEffect } from 'react';


function Board() {
  
  const [year, setYear] = useState('2024');
  const [semester, setSemester] = useState('spring');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [selectedMember, setSelectedMemeber] = useState();
  
  useEffect(() => {
    const filtered = data.filter((member) => 
      (member.startSemester === semester && member.start === parseInt(year)) || 
      (semester === "spring" && member.end === parseInt(year) && member.start !== parseInt(year))
    );
    setFilteredMembers(filtered);
  }, [year, semester]);

  const Eboard = filteredMembers.filter(member => member.branch === 'eboard');
  const Tboard = filteredMembers.filter(member => member.branch === 'tboard');
  const Dboard = filteredMembers.filter(member => member.branch === 'dboard');
  const Jboard = filteredMembers.filter(member => member.branch === 'jboard');

  function handleMemberClick(memberData)  {
    setSelectedMemeber(memberData);
    setIsHidden(false);
  }

  return (
    <div className = 'page'>
      <div className="header-container">
      <img src={board} className="header-background-image" alt="header" />
      <h1 className = "title">OUR BOARD</h1>
      <br></br><br></br>
      </div>
      <div className ='button-lay'>
      <select id='year' onChange={(e) => setYear(e.target.value)} value ={year}>
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
        <select id='semester' onChange={(e) => setSemester(e.target.value)} value ={semester}>
        <option disabled selected>Semester</option>
        <option value="fall">Fall</option>
        <option value="spring">Spring</option>
        </select>
      </div>
      <br></br><br></br>

      <h2>E-board</h2>
      <div className = 'board-members'>
        {Eboard.map((member) => (
          <div className = 'member' onClick={() =>handleMemberClick(member)}>
            <img src={member.image || empty}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>D-board</h2>
      <div className = 'board-members'>
        {Dboard.map((member) => (
          <div className = 'member' onClick={() =>handleMemberClick(member)}>
            <img src={member.image || empty}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>J-board</h2>
      <div className = 'board-members'>
        {Jboard.map((member) => (
          <div className = 'member' onClick={() =>handleMemberClick(member)}>
            <img src={member.image || empty} />
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>

      <h2>T-board</h2>
      <div className = 'board-members'>
        {Tboard.map((member) => (
          <div className = 'member' onClick={() =>handleMemberClick(member)}>
            <img src={member.image || empty}/>
            <p>{member.name}<br />{member.position}</p>
          </div>
        ))}
      </div>


      {/*Member Card */}
      {!isHidden && (
        <div className = "card-container" onClick={(e) => {if (e.target.className === "card-container") setIsHidden(true);}}>
          <div className ="card-box">
          <button className = "exit" onClick = {() => setIsHidden(true)}>✕</button>
          <div className = "board-image">
              <img src={selectedMember.image || empty} />
          </div>
              <h1 className = "member-name">{selectedMember?.name}</h1>
              <h3 className = "position">{selectedMember?.position}</h3>
          <div className='board-githubbutton'>
            <a href={selectedMember.github} target="_blank">
              <img className = "board-githubimg" src = {Github} alt = "Github"/>
              <p className = "board-githubname">github</p>
            </a>
            </div>
          <div className='board-linkedinbutton'>
            <a href={selectedMember.linkedin || "https://www.linkedin.com/company/ieeeualbany/"} target="_blank">
              <img className = "board-linkedinimg" src = {Linkedin} alt = "LinkedIn"/>
              <p className = "board-linkedinname">linkedin</p>
            </a>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Board;