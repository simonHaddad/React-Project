import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Screens/Layout';
import Home from './components/Screens/Home/Index';

export const routes = <Router>
    <Switch>
        <Layout>
            <Route exact path='/' component={Home} />
        </Layout>
    </Switch>
</Router>