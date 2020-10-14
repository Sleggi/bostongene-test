import React, { useState } from 'react';
import AddPost from './components/AddPost'
import Posts from './components/Posts'

function App() {

  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <AddPost posts={posts} setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
