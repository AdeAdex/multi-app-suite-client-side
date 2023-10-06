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

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Navbar/>,
    // <Fetch/>,
    // <Jokes/>
    // <Portal/>
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portal" element={<Portal />} />
          <Route path="/" element={<Jokes />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/in" element={<Navigate to="/Jokes" />} />
          <Route path="/user/:username" element={<Users/>}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

        <div className="container">
          <div className="row gap-3">
            <Card style="card bg-danger" title="Card One" text="This is card One" />
            <Card style="Card bg-primary" title="Card Two" text="This is card Two" />
            <Card style="Card bg-success" title="Card Three" text="This is card Three" />
            <Card style="Card bg-info" title="Card Four" text="This is card Four" />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
