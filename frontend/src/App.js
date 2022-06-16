import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import AuthRoute from './Components/Auth/AuthRoute';
import Account from './Pages/Account/Account';
import Pickup from './Pages/Pickup/Pickup';
import History from './Pages/History/History';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute path="/account/:id" component={Account}/>
        <ProtectedRoute path="/pickup" component={Pickup}/>
        <ProtectedRoute path="/history" component={History}/>

        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
