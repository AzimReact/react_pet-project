import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])
    const [posts1, setPosts1] = useState([
        {id: 1, title: 'Python 1', body: 'Description'},
        {id: 2, title: 'Python 2', body: 'Description'},
        {id: 3, title: 'Python 3', body: 'Description'}
    ])

  return (
    <div className="App">
      <PostList posts={posts} title='Posts about JS'/>
      <PostList posts={posts1} title='Posts about Python'/>
    </div>
  );
}

export default App;
