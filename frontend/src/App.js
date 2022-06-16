import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
