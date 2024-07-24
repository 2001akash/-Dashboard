import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CellDetail from './components/CellDetail';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/cell/:cellId" component={CellDetail} />
        </Switch>
    </Router>
);

export default App;
