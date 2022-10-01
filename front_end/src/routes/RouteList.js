import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Entry from '../pages/SignUp';
import Help from '../pages/Help';
import Scan from '../pages/Scan';
import Code from '../pages/Code';
// import Canvas from '../pages/Canvas';
// import HighScore from '../pages/HighScore';
// import PlayGround from '../pages/PlayGround';
// import Help from '../pages/Help';

const RoutesJs = () => {
  // const [first, setfirst] = useState(true);

  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Entry type={'Login'} />}></Route>
      <Route exact path="/signup" element={<Entry type={'Sign-up'} />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/dashboard/help" element={<Help />}></Route>
      <Route exact path="/dashboard/scan" element={<Scan />}></Route>
      <Route exact path="/dashboard/scan/:id" element={<Code />}></Route>
    </Routes>
  );
};

export default RoutesJs;
