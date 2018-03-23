// Readers: To prepare this project to build along in `./App.js`, complete
// steps 1 & 2 below
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import "./styles/index.css";
import "./semantic-dist/semantic.css";


import SelectableApp from "./SelectableApp";

ReactDOM.render(
    <Router>
        <SelectableApp />
    </Router>,
    document.getElementById("root")
);
