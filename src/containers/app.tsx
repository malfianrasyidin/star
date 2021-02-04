import 'assets/scss/index.scss';
import ROUTES from 'configs/routes';
import { Theme, useTheme } from 'paramex';
import { useEffect, useState } from 'react';
import { BbentoPage, DefaultPage, UobMsigPage } from 'pages';
import {
  Route as RouterRoute,
  Switch,
  BrowserRouter as Router,
  RouteProps,
} from 'react-router-dom';

const Route = ({ children, location, ...rest }: RouteProps) => {
  const [loading, setLoading] = useState(true);

  const getTheme = () => {
    if (location?.pathname.startsWith(ROUTES.BBENTO)) {
      return Theme.Bbento;
    }

    if (location?.pathname.startsWith(ROUTES.UOB_MSIG)) {
      return Theme.UobMsig;
    }

    return Theme.Bbento;
  };

  useEffect(() => setLoading(false), [loading]);

  useTheme(getTheme());

  return loading ? (
    <div>Loading...</div>
  ) : (
    <RouterRoute {...rest}>{children}</RouterRoute>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.ROOT} exact>
        <DefaultPage />
      </Route>
      <Route path={ROUTES.BBENTO} exact>
        <BbentoPage />
      </Route>
      <Route path={ROUTES.UOB_MSIG} exact>
        <UobMsigPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
