import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table";
import Main from "./components/Wrappers/Main";
import { useGlobalContext } from "./context/Context";

function App() {
  // Getting the inital value from the Store
  const { isLoading, users } = useGlobalContext();
  console.log("In App", users);
  let content = "";

  // If the initial data is set and isLoading is True
  if (isLoading) {
    if (users.length === 0) {
      content = <h2> No Users to list down...</h2>;
    } else {
      content = "";
    }
  } else {
    content = <h2 className="empty-list">Page is loading...</h2>;
  }
  return (
    <>
      <Router>
        <div className="main">
          <Navigation />
          <div className="wrapper">
            <Header />
            <Main>
              <Routes>
                {!content && <Route path="/" element={<Dashboard />} />}
                {!content && (
                  <Route path="/dashboard" element={<Dashboard />} />
                )}
                {!content && <Route path="/table" element={<Table />} />}
              </Routes>
            </Main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
