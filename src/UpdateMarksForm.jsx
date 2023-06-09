import React, { useState } from 'react';
import axios from 'axios';

const UpdateMarksForm = () => {
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState({
    telugu: '',
    hindi: '',
    english: '',
    maths: '',
    science: '',
    social: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8080/updateMarks/${studentId}`, marks, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setStudentId('');
        setMarks({
          telugu: '',
          hindi: '',
          english: '',
          maths: '',
          science: '',
          social: '',
        });
        console.log('Marks updated successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formContainerStyle = {
    width: '400px',
    margin: '0 auto',
  };

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen '>
    <div className="container mx-auto" style={formContainerStyle}>
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Student ID:
            <input
              type="number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Telugu:
            <input
              type="number"
              name="telugu"
              value={marks.telugu}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Hindi:
            <input
              type="number"
              name="hindi"
              value={marks.hindi}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            English:
            <input
              type="number"
              name="english"
              value={marks.english}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Maths:
            <input
              type="number"
              name="maths"
              value={marks.maths}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Science:
            <input
              type="number"
              name="science"
              value={marks.science}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Social:
            <input
              type="number"
              name="social"
              value={marks.social}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Marks
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateMarksForm;
