import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inquiry from './MultiCare/Inquiry/Inquiry';
import React from 'react';
import Main from './MultiCare/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </>
  );
}

export default App;
