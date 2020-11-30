import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox.js';
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            {/* Header */} 
            <div className="feed__header">
                <h1>Home</h1>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default Feed
