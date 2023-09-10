import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Navbar from "../Navbar/Navbar";
import GoHome from "../GoHome/GoHome";
// import React from 'react'

const App = () => {
  // const toggleBtn = () => {
  //   console.log("Hi")
  //   const toggler = document.getElementById("react-burger-menu-btn");
  //   toggler.addClass("hide")
  // }
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <GoHome />
        <Routes>
          {/* One can use "Component" or 'element' making necessary name adjustments */}
          
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// ALTERNATIVELY
{
  /*
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
// import React from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
*/
}
