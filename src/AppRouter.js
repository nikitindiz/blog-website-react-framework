import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage';

const Router = () => (
    <Switch>
        <Route path="/about">
            <AboutPage />
        </Route>
        <Route path="/">
            <PostsPage />
        </Route>
    </Switch>
);

export default Router;
