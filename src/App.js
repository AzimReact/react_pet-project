import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }


  return (
    <div className="App">
        <PostForm />
        <PostList posts={posts} title='Posts about JS'/>
    </div>
  );
}

export default App;
