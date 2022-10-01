import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Entry from '../pages/SignUp';
import Help from '../pages/Help';
import Scan from '../pages/Scan';
import Map from '../pages/Map';
import Code from '../pages/Code';
// import Canvas from '../pages/Canvas';
// import HighScore from '../pages/HighScore';
// import PlayGround from '../pages/PlayGround';
// import Help from '../pages/Help';

const RoutesJs = () => {
  const [answ1, setAnswer1] = useState();
  const [answ2, setAnswer2] = useState();
  const [answ3, setAnswer3] = useState();
  const [answ4, setAnswer4] = useState();

  const callback1 = ode => {
    setAnswer1(ode);
    localStorage.setItem('answ1', JSON.stringify(ode));
  };
  const callback2 = ode => {
    setAnswer2(ode);
    localStorage.setItem('answ2', JSON.stringify(ode));
  };
  const callback3 = ode => {
    setAnswer3(ode);
    localStorage.setItem('answ3', JSON.stringify(ode));
  };
  const callback4 = ode => {
    setAnswer4(ode);
    localStorage.setItem('answ4', JSON.stringify(ode));
  };
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Entry type={'Login'} />}></Route>
      <Route exact path="/signup" element={<Entry type={'Sign-up'} />}></Route>
      <Route
        exact
        path="/dashboard"
        element={
          <Dashboard ans1={answ1} ans2={answ2} ans3={answ3} ans4={answ4} />
        }
      ></Route>
      <Route exact path="/dashboard/help" element={<Help />}></Route>
      <Route exact path="/dashboard/scan" element={<Scan />}></Route>
      <Route exact path="/dashboard/map" element={<Map />}></Route>

      <Route
        exact
        path="/dashboard/scan/:id"
        element={
          <Code
            callback1={callback1}
            callback2={callback2}
            callback3={callback3}
            callback4={callback4}
          />
        }
      ></Route>
    </Routes>
  );
};

export default RoutesJs;
