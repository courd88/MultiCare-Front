import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inquiry from './MultiCare/Inquiry/Inquiry';
import React from 'react';
import Main from './MultiCare/Main';
import Tinting from './MultiCare/tinting/Tinting';
import Exterior from './MultiCare/exterior/Exterior';
import Ppf from './MultiCare/Ppf';
import Brand from './MultiCare/tinting/Brand';
import Rating from './MultiCare/tinting/Rating';
import Polish from './MultiCare/exterior/Polish';
import GalssCurtin from './MultiCare/exterior/GlassCurtain';
import InquiryWrite from './MultiCare/inquiry/InquiryWrite';
import InquiryRetouch from './MultiCare/inquiry/InquiryReotuch';
import About from './MultiCare/about';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"                             element={<Main />} />
        <Route path="/about"                        element={<About />} />
        <Route path="/tinting"                      element={<Tinting />} />
        <Route path="/tinting/brand"                element={<Brand />} />
        <Route path="/tinting/rating"               element={<Rating />} />
        <Route path="/exterior"                     element={<Exterior />} />
        <Route path="/exterior/polish"              element={<Polish />} />
        <Route path="/exterior/glasscurtain"        element={<GalssCurtin />} />
        <Route path="/ppf"                          element={<Ppf />} />
        <Route path="/inquiry"                      element={<Inquiry />} />
        <Route path="/inquiry/write"                element={<InquiryWrite />} />
        <Route path="/inquiry/retouch"              element={<InquiryRetouch />} />
      </Routes>
    </>
  );
}

export default App;
