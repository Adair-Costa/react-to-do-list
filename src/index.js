import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // importacao do bootstrap css
import "bootstrap/dist/js/bootstrap.bundle"; // importacao do bootstrap js
import App from "./App";

const root = window.document.querySelector("#root");

ReactDOM.createRoot(root).render(<App />);