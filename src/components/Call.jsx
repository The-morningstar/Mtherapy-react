import React from 'react';
import './Call.css';
import nurseimg from "../Images/nurse.png";

const Call = () => {
  return (
    <div className="callcontainer">
      <div className='callcontent'>
        <div className='text-container'>
          <h1 className='callheading'>Heartbeat of Innovation </h1>
          <h1 className='callsubtext'>Become a Telepsych Volunteer,<br/>Shape the Future of Care</h1>
          <p className='calldesc'> Your expertise deserves a wider stage. Join our team and reach patients
            who  might otherwise go unseen, unheard, and untreated. Be a champion
            for accessibility, equity, and empowerment in mental healthcare.
          </p>
          <button className='join' onClick={() => window.location.href = 'tel:+919446997887'}>Call Us Today!</button>
        </div>
        <div className='callimgcontainer'>
          <img className="nurseimg" src={nurseimg} alt="Nurse" />
        </div>
      </div>
    </div>
  );
};

export default Call;
