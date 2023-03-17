import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [isPostLoading, setIsPostLoading] = useState(false)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts () {
        setIsPostLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostLoading(false)
        }, 500)


    }

    // Получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

  return (
    <div className="App">
        <button onClick={fetchPosts}>Get Posts</button>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Create user</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>

        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {isPostLoading
               ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50} }><Loader /></div>
               : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS'/>
        }
    </div>
  );
}

export default App;
