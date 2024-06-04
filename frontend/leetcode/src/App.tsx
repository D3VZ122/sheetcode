import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Otp from './pages/opt';
import Problem from './pages/problem';
import Topbar from './components/topbar';
import ProblemSingle from './pages/problemSingle';
import { RecoilRoot } from 'recoil';

const LayoutWithTopbar = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

const App = () => {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verification/:id" element={<Otp />} />
        <Route
          path="/problem"
          element={
            <LayoutWithTopbar key="problem">
              <Problem />
            </LayoutWithTopbar>
          }
        />
        <Route
          path="/home"
          element={
            <LayoutWithTopbar key="home">
              <Home />
            </LayoutWithTopbar>
          }
        />
        <Route
          path="/problem/:id"
          element={
            <LayoutWithTopbar key="problemSingle">
              <ProblemSingle />
            </LayoutWithTopbar>
          }
        />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
