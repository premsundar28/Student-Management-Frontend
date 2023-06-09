import React, { useState } from 'react';
import axios from 'axios';

const GetStudentMarksForm = () => {
  const [studentId, setStudentId] = useState('');
  const [studentMarks, setStudentMarks] = useState([]);

  const handleChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:8080/getStudentMarks/${studentId}`)
      .then((response) => {
        setStudentMarks(response.data);
        setStudentId('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen '>
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <label htmlFor="studentId" className="text-gray-700 text-sm font-bold mb-2">
          Student ID:
          <input
            type="number"
            id="studentId"
            value={studentId}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
          Fetch Marks
        </button>
      </form>

      <ul className="list-none p-0">
        {studentMarks.map((mark) => (
          <li key={mark.id} className="bg-gray-100 shadow-md rounded p-4 my-4">
            <p className="font-bold">
              <span className="mr-2">Telugu:</span>
              {mark.telugu}
            </p>
            <p className="font-bold">
              <span className="mr-2">Hindi:</span>
              {mark.hindi}
            </p>
            <p className="font-bold">
              <span className="mr-2">English:</span>
              {mark.english}
            </p>
            <p className="font-bold">
              <span className="mr-2">Maths:</span>
              {mark.maths}
            </p>
            <p className="font-bold">
              <span className="mr-2">Science:</span>
              {mark.science}
            </p>
            <p className="font-bold">
              <span className="mr-2">Social:</span>
              {mark.social}
            </p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default GetStudentMarksForm;
