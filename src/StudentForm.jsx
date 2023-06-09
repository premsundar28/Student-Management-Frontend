import React, { useState, useEffect } from 'react';
import '/Users/premsundar/Downloads/projects/test/src/css/StudentForm.css';

const StudentForm = () => {
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8080/showAllStudents');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.error('Error fetching students');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const student = {
      studentId: studentID,
      studentName,
      studentMobileNumber: mobileNumber
    };

    try {
      const response = await fetch('http://localhost:8080/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        console.log('Student data submitted successfully');
        setStudentID('');
        setStudentName('');
        setMobileNumber('');
        fetchStudents();
      } else {
        console.error('Error submitting student data');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleModify = async (event, student) => {
    event.preventDefault();

    const updatedStudent = {
      studentId: student.studentId,
      studentName,
      studentMobileNumber: mobileNumber
    };

    try {
      const response = await fetch('http://localhost:8080/updateStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
      });

      if (response.ok) {
        console.log('Student data updated successfully');
        setStudentID('');
        setStudentName('');
        setMobileNumber('');
        fetchStudents();
      } else {
        console.error('Error updating student data');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:8080/deleteStudent/${studentId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Student deleted successfully');
        fetchStudents();
      } else {
        console.error('Error deleting student');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen '>
    <div className="student-form-container bg-gray-200 p-4 w-full">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="studentID">Student ID:</label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={(event) => setStudentID(event.target.value)}
            required
            className="input-field bg-white border border-gray-300 px-2 py-1 rounded-md"
          />
        </div>

        <div className="form-field">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            required
            className="input-field bg-white border border-gray-300 px-2 py-1 rounded-md"
          />
        </div>

        <div className="form-field">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            required
            className="input-field bg-white border border-gray-300 px-2 py-1 rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

      <h2>All Students</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.studentId}>
            {student.studentName} - {student.studentMobileNumber}
            <button
              onClick={() => handleDelete(student.studentId)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setStudentID(student.studentId);
                setStudentName(student.studentName);
                setMobileNumber(student.studentMobileNumber);
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Modify
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
   
    
  );
};

export default StudentForm;
