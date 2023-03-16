import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'vaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'escription'},
        {id: 3, title: 'avaScript 3', body: 'scription'}
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('Function sortedPosts worked one more time')

        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }
  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value) } placeholder='Поиск...'/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
        {posts.length
            ? <PostList remove={removePost} posts={sortedPosts} title='Posts about JS'/>
            : <h1 style={{textAlign: "center"}}>Posts not found.</h1>
        }
    </div>
  );
}

export default App;
