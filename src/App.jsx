import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import Jokes from "./Jokes";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Users from "./Users";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import DictionaryApp from "./DictionaryApp";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/quiz" element={<QuestionsAndAnswers />} />
          <Route path="/" element={<Jokes />} />
          <Route path="dictionary" element={<DictionaryApp />} />
          <Route path="/in" element={<Navigate to="/Jokes" />} />
          <Route path="/user/:username" element={<Users/>}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
