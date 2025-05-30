import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Trending } from "./components/trending/Trending";
import { GlobalProvider } from "./context/GlobalState";
import { Status } from "./pages/Status";
import ScrollToTop from "./utils/ScrollToTop";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop>
          <div className="App">
            <div className="side-nav">
              <Sidebar />
            </div>
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Profile />} />
                <Route path="/status/:id" element={<Status />} />
              </Routes>
            </div>

            <div className="trending">
              <Trending />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    </GlobalProvider>
  );
}

export default App;
