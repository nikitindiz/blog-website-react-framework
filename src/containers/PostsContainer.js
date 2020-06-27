import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

const PostsContainer = () => {
    const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
    const [ fetchError, updateFetchError ] = useState(null);
    const [ posts, updatePosts ] = useState([]);

    useEffect(() => {
        updateFetchStatus('STARTED');

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/posts`)
            .then(response => response.json())
            .then((result) => {
                updatePosts(result.posts);
                updateFetchStatus('SUCCEED');
            })
            .catch(err => {
                updateFetchError(err.message);
                updateFetchStatus('FAILED');
            })
    }, []);

    return (
        <div className="posts-container">
            { (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') && 'Loading...' }
            { fetchStatus === 'FAILED' && fetchError }
            { fetchStatus === 'SUCCEED' && (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        brief={post.brief}
                        timestamp={post.timestamp}
                    />
                ))
            )}
        </div>
    )
};

export default PostsContainer;