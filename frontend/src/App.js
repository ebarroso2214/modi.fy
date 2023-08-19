import './App.css';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Pages/Home'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Profile from './Components/Pages/Profile';
import Feed from './Components/Pages/Feed';
import CreatePost from './Components/Pages/createPost';
import Post from './Components/Pages/Post'
import { AuthorUserContext } from './Components/Context/AuthorUserContext';
import EditPost from './Components/Pages/EditPost';



function App() {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])


//  Get user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser !== null) setUser(storedUser);
  }, []);
  
  //Fetching all posts
  useEffect(()=>{
    async function getPosts(){
      const response = await fetch('https://modifyi.onrender.com/posts')
      const data = await response.json()
      setPosts(data.posts)
      setUsers(data.users)
      
    }
    getPosts();
  }, []);
  
 


  const addPost = async (newPost) =>  {
    const response = await fetch('http://https://modifyi.onrender.com/posts',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      body: JSON.stringify(newPost)
    });

    const data = await response.json()
    setPosts([data, ...posts]);
    console.log(data)
    console.log(data._id)
    return data._id
  }

  const deletePost = async (id) => {
    const response = await fetch(`https://modifyi.onrender.com/posts/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    if (data.message) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

 

  return (
    <div className="App">
      <Router>
        <AuthorUserContext.Provider value={{user, setUser}}>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/feed" element={<Feed posts={posts}/>}/>
            <Route path= "/posts/:id" element={<Post user={user._id} deletePost={deletePost}/>}/>
            {/* <Route path="/posts/:id/edit" element = {<EditPost />}/> */}
            <Route path= "/post" element={<CreatePost addPost={addPost}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/users/profile" element={<Profile />}/>
          </Routes>
        </AuthorUserContext.Provider>
      </Router>
      
      
    </div>
  );
}

export default App;
