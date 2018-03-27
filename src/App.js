import React, { Component } from 'react';
import './styles/App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import About from './About';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <div>
                {/*Create our nav bar links using the Link element from react router*/}
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                {/*Create the routes*/}
                <div className="main">
                    <Switch>
                        {/*
                            If you remove 'exact' from the route, then all routes will match
                            'exact' tells react that this exact path only, not all paths which include
                            its name.
                        */}
                        <Route exact path="/" component={ Dashboard } />
                        <Route path="/about" component={ About } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
