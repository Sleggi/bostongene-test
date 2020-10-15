import React, { useState } from 'react';
import AddPost from './components/AddPost'
import Posts from './components/Posts'

function App() {
  // Храним посты в стейте
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      {/* Компонент добавления постов */}
      <AddPost posts={posts} setPosts={setPosts} />
      {/* Компонент отображения постов */}
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
