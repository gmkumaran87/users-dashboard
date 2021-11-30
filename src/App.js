import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CreateUser from "./components/pages/CreateUser";
import Dashboard from "./components/pages/Dashboard";
import EditUser from "./components/pages/EditUser";
import Table from "./components/pages/Table";
import Main from "./components/Wrappers/Main";
import { useGlobalContext } from "./context/Context";

function App() {
  // Getting the inital value from the Store
  const { isLoading, users } = useGlobalContext();

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
                {!content && <Route path="/users" element={<Table />} />}
                <Route path="/create-user/*" element={<CreateUser />} />
                <Route path="/edit-user/:userId" element={<EditUser />}>
                  <Route path="" element={<CreateUser />} />
                </Route>
              </Routes>
            </Main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
