import React, { useState } from 'react';
import axios from 'axios';

const GetStudentGradeForm = () => {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentQuery = {
      studentId: studentId || null,
      studentName: studentName || null,
    };

    axios
      .post('http://localhost:8080/getStudentGrade', studentQuery, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setGrade(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen '>
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 py-6 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
            Student ID:
            <input
              type="number"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">
            Student Name:
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Fetch Student Grade
          </button>
        </div>
      </form>

      {grade && <p className="text-center">Grade: {grade}</p>}
    </div>
    </div>
  );
};

export default GetStudentGradeForm;
