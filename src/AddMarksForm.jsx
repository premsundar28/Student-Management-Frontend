import React, { useState } from 'react';
import axios from 'axios';

const AddMarksForm = () => {
  const initialState = {
    telugu: '',
    hindi: '',
    english: '',
    maths: '',
    science: '',
    social: '',
    studentId: '',
  };

  const [marks, setMarks] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonData = JSON.stringify(marks);
    console.log(jsonData); // JSON output for testing purposes

    axios
      .post('http://localhost:8080/addMarks', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data); // Optional: handle the response
        setMarks(initialState); // Clear the form inputs after successful submission
      })
      .catch((error) => {
        console.error(error); // Optional: handle the error
      });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginTop: '10px',
  };

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen '>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-100 rounded-lg p-6">
  <label className="mb-4">
    <span className="text-gray-800">Telugu:</span>
    <input
      type="number"
      name="telugu"
      value={marks.telugu}
      onChange={handleChange}
      className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </label>
      <label>
        Hindi:
        <input
          type="number"
          name="hindi"
          value={marks.hindi}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <label>
        English:
        <input
          type="number"
          name="english"
          value={marks.english}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <label>
        Maths:
        <input
          type="number"
          name="maths"
          value={marks.maths}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <label>
        Science:
        <input
          type="number"
          name="science"
          value={marks.science}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <label>
        Social:
        <input
          type="number"
          name="social"
          value={marks.social}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <label>
        Student ID:
        <input
          type="number"
          name="studentId"
          value={marks.studentId}
          onChange={handleChange}
          className="w-full py-2 px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <button
    type="submit"
    className="w-full py-2 px-4 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
  >
    Submit
  </button>
    </form>
    </div>
  );
};

export default AddMarksForm;
