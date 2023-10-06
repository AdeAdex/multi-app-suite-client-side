import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import Fetch from "./Fetch";
import Jokes from "./Jokes";
import Portal from "./Portal";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Card from "./Card";
import Users from "./Users";
import QuestionsAndAnswers from "./QuestionsAndAnswers";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/quiz" element={<QuestionsAndAnswers />} />
          <Route path="/" element={<Jokes />} />
          <Route path="/in" element={<Navigate to="/Jokes" />} />
          <Route path="/user/:username" element={<Users/>}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
