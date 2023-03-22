import {useEffect, useState} from 'react';
import {getPosts} from '../api/index';
import { Home } from '../pages';
import {Loader , Navbar} from './index';
import Login from '../pages/index';
import Logout from '../pages/Logout';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
const About = ()=>{
  return <h1>About</h1>
}

const UserInfo = ()=>{
  return <h1>User Info</h1>
}
const Error = () => {
  return <h1>Error</h1>
}

function App() {
  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(true);  
  useEffect(() => {

    const fetchPosts = async () => {
      const response  = await getPosts();
      console.log(response);
      if(response.success){
        setPosts(response.data.posts);
      }
      setLoading(false);

    }
    fetchPosts();
  } , [])
  if(loading){
    return <Loader/>
  }
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home posts = {posts}/>}></Route>
          <Route exact path='/about' element = {<About/>}></Route>
          <Route exact path='/user/asdasd' element = {<UserInfo/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path = '*' element = {<Error/>}></Route>
          <Route exact path='/logout' element = {<Logout/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
