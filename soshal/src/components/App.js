import { Home } from '../pages';
import {Loader , Navbar} from './index';
import Login from '../pages/index';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { useAuth } from '../hooks';
import Signup from '../pages/Signup';

const Error = () => {
  return <h1>Error</h1>
}

function App() {
  const auth = useAuth();
  if(auth.loading){
    return <Loader/>
  }
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path='/register' element = {<Signup/>}></Route>
          <Route exact path = '*' element = {<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
