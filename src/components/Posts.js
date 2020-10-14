import React from 'react'

function Posts({ posts }) {
    return (
        <div className='posts'>
            {
                posts.map((post, index) => (
                    <div className='posts__post post' key={index}>
                        <p className="post__heading">{post.heading}</p>
                        <p className="post__post">{post.post}</p>
                        <p className="post__phone">{post.phone}</p>
                        <p className="post__city">{post.city}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
