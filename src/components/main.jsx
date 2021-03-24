import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Tests from "./games/tests/tests.jsx";
import RoadCrossing from './games/roadCrossing/roadCrossing.jsx';
import MMOrpg from './games/mmo-rpg/mmoRPG.jsx';

function Main() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/games/tests">About</Link>
                        </li>
                        <li>
                            <Link to="/games/road-crossing">Users</Link>
                        </li>
                        <li>
                            <Link to="/games/mmo-rpg">RPG</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/games/tests">
                        <Tests />
                    </Route>
                    <Route path="/games/road-crossing">
                        <RoadCrossing />
                    </Route>
                    <Route path="/games/mmo-rpg">
                        <MMOrpg />
                    </Route>
                    <Route path="/">
                        <h1>Добро пожаловать!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main;