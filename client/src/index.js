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
