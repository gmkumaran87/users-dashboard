import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table";
import data from "./data";

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Navigation />
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard data={data[0]} />} />
              <Route path="/dashboard" element={<Dashboard data={data[0]} />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
