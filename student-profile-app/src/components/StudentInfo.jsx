import React from 'react';

function StudentInfo({ department, email }) {
  return (
    <div className="student-info">
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default StudentInfo;