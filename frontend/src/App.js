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
import Create from './Components/Pages/createPost';



function App() {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  
  //Fetching all posts
  useEffect(()=>{
    async function getPosts(){
      const response = await fetch("http://localhost:3001/posts")
      const data = await response.json()
      console.log(data.posts)
      console.log(data.users)
      setPosts(data.posts)
      setUsers(data.users)
      
    }
    getPosts();
  }, []);
  
  const addPost = async (newPost) =>  {

  }
 

  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/feed" element={<Feed posts={posts}/>}/>
          <Route path= "/post" element={<Create addPost={addPost}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
