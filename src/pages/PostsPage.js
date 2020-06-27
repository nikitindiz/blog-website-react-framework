import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostsContainer from '../containers/PostsContainer';
import SinglePostContainer from '../containers/SinglePostContainer';

const PostsPage = () => {
    return (
        <div className="posts-page">
            <Switch>
                <Route path="/:id">
                    <SinglePostContainer />
                </Route>
                <Route path="/">
                    <PostsContainer />
                </Route>
            </Switch>
        </div>
    );
}

export default PostsPage;