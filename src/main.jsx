import  {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// OR

// import  React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
