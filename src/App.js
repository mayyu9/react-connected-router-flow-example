import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Link, Switch } from 'react-router-dom';
import store, { history } from './store/store';
// import logo from './logo.svg';
import './App.css';
import topRoutes from './routes/appRoutes';

const PageRoutes = topRoutes.map(route => (
  <Route exact={route.isExact} path={route.path} key={route.path} component={route.component} />
));

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
    <div className="App">
      <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      </header>
      <main>
      <Switch>{PageRoutes}</Switch>
      </main>
    </div>
    </ConnectedRouter>
    </Provider>
  );
}

export default App;
