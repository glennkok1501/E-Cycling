import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import AuthRoute from './Components/Auth/AuthRoute';
import Account from './Pages/Account/Account';
import Pickup from './Pages/Pickup/Pickup';
import History from './Pages/History/History';
import NoticeBoard from './Pages/NoticeBoard/NoticeBoard';
import Guidelines from './Pages/Guidelines/Guidelines';
import Announcement from './Pages/Announcement/Announcement';
import ReportForm from './Pages/Form/ReportForm';
import RewardsPage from './Pages/Rewards/RewardsPage';
import KidsAreaPage from './Pages/KidsArea/KidsAreaPage';
import InfoPage from './Pages/Info/InfoPage';
import ContactPage from './Pages/Contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute path="/account/:id" component={Account}/>
        <ProtectedRoute path="/pickup" component={Pickup}/>
        <ProtectedRoute path="/history" component={History}/>
        <ProtectedRoute path="/rewards" component={RewardsPage}/>

        <Route path="/info">
          <InfoPage />
        </Route>

        <Route path="/kidsarea">
          <KidsAreaPage />
        </Route>

        <Route path="/noticeboard/:id">
          <Announcement />
        </Route>

        <Route path="/noticeboard">
          <NoticeBoard />
        </Route>

        <Route path="/guidelines">
          <Guidelines />
        </Route>

        <Route path="/report">
          <ReportForm />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
