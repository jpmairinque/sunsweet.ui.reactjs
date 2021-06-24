import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { BottomDiv } from "./pages/Home/styles";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Themes from "./pages/Themes/Themes";
import Privacy from "./pages/Privacy/Privacy";
import Acessibility from "./pages/Acessibility/Acessibility";
import Logout from "./pages/Logout/Logout";

const Routes = () => {
  return (
    <Router>

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route exact path="/logout" component={Logout} />
    
      <Route path="/home">
        <BottomDiv>
          <Navbar />
          <Route path="/home/profile" component={Profile} />
          <Route path="/home/themes" component={Themes} />
          <Route path="/home/privacy" component={Privacy} />
          <Route path="/home/acessibility" component={Acessibility} />
        </BottomDiv>
      </Route>

    </Router>
  );
};

export default Routes;
