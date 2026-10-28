import React, { useState } from 'react';
import StudentInfo from './StudentInfo';

function StudentProfile({ name, studentId, department, email, profileImg, isActive }) {
  // 5. State (Show/Hide Details)
  const [showDetails, setShowDetails] = useState(true);

  // 7. List Rendering (Skills Array)
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Git'];

  // 6. Event Handling
  const handleSayHello = () => {
    alert('Hello, welcome to my React application!');
  };

  return (
    <div className="student-profile-card">
      <img src={profileImg} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p><strong>ID:</strong> {studentId}</p>

      {/* 8. Conditional Rendering (Active Status) */}
      <p className={`status ${isActive ? 'active' : 'inactive'}`}>
        Status: {isActive ? 'Student is currently active.' : 'Student is currently inactive.'}
      </p>

      {/* 6. Event Handling Button */}
      <button onClick={handleSayHello} className="btn hello-btn">
        Say Hello
      </button>

      {/* 5. State Toggle Button */}
      <button 
        onClick={() => setShowDetails(!showDetails)} 
        className="btn toggle-btn"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Conditional Details & Skills */}
      {showDetails && (
        <div className="details-section">
          {/* Props pass check */}
          <StudentInfo department={department} email={email} />

          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;