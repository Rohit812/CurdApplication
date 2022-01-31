import Navbar from './components/NavBar';
import Home from './components/Home';
import Allusers from './components/Allusers';
import Adduser from './components/Adduser';
import EditUser from './components/EditUser';
import PageNotFount from './components/PageNotFound';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/user" component={Allusers}/>
      <Route exact path="/add" component={Adduser}/>
      <Route exact path="/edit/:id" component={EditUser}/>
      <Route component={PageNotFount}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
