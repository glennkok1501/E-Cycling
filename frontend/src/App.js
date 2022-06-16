import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import AuthRoute from './Components/Auth/AuthRoute';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
