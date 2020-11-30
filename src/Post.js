import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css"

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar>PP</Avatar>
            </div>
        </div>
    )
}

export default Post
