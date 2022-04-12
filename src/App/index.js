import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../navbar';
import Home from '../Home';
import Store from '../storepage';
import Booking from '../Calendar/bookingcalendar';
import Findus from '../findus';
import Error from '../errorpage';
import Confirmation from '../confirmation';
import Terms from '../termscondition';
import SignUp from '../SignUp';
import ProfilePage from '../account/profilePage';
import SignIn from '../account/signIn';
import PasswordForgetPage from '../PasswordForget';
import { withAuthentication } from '../Session';
import * as ROUTES from '../Constants/routes';
import useSticky from "../Hooks/useSticky.js";
import Footer from '../footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { isSticky, element } = useSticky();  //sticky navbar

  return (
    <Router>
      <div>
        <Navbar sticky={isSticky} />

        <Switch>
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path="/" render={(props) => <Home {...props} element={element} />} />
          <Route exact path={ROUTES.STORE} component={Store} />
          <Route exact path={ROUTES.BOOKING} component={Booking} />
          <Route exact path={ROUTES.FIND_US} component={Findus} />
          <Route exact path={ROUTES.CONFIRMATION} component={Confirmation} />
          <Route exact path={ROUTES.TERMS_AND_CONDITIONS} component={Terms} />
          <Route exact path={ROUTES.ACCOUNT} component={ProfilePage} />
          <Route component={Error} />
        </Switch>

        <Footer />
      </div >
    </Router>

  );
}

export default withAuthentication(App);
