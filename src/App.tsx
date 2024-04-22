import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login";

const App: Component = () => {
    return (
        <div>
            <Router>
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
};

export default App;
