import React from 'react'

function Posts({ posts, setPosts }) {

    // Удаляем посты по id 
    const handleDelete = (id) => {
        setPosts(posts.filter(i => i.id !== id))
    }


    return (
        <div className='posts'>
            { // Мапим по постам, возвращаем div для каждого поста
                posts.map((post) => (
                    <div className='posts__post post' key={post.id}>
                        <button onClick={(e) => handleDelete(post.id)}>Удалить</button>
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
