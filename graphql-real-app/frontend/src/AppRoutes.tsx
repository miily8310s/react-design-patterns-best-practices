import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { dashboard } from "./pages/dashboard";
import { error404 } from "./pages/error404";
import { home } from "./pages/home";
import { login } from "./pages/login";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/dashboard" component={dashboard} exact />
        <Route path="/login" component={login} exact />
        <Route component={error404} />
      </Switch>
    </Router>
  );
};
