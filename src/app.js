import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Project />
            <Skills />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);