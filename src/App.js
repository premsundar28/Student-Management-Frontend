import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import AddMarksForm from './AddMarksForm';
import HomePage from './HomePage';
import UpdateMarksForm from './UpdateMarksForm';
import GetStudentMarksForm from './GetStudentMarksForm';
import GetStudentGradeForm from './GetStudentGradeForm';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        

       
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/StudentForm" element={<StudentForm />} />
            <Route path="/AddMarksForm" element={<AddMarksForm />} />
            <Route path="/UpdateMarksForm" element={<UpdateMarksForm />} />
            <Route path="/GetStudentMarksForm" element={<GetStudentMarksForm />} />
            <Route path="/GetStudentGradeForm" element={<GetStudentGradeForm />} />
            {/* Add more routes for other components if needed */}
          </Routes>
       
        
      </div>
    </BrowserRouter>
  );
};

export default App;
