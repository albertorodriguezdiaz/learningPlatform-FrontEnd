import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NewAccount';
import Home from './components/home/home';
import AlertState from './context/alerts/alertState';
import AuthState from './context/autentication/authState';
import tokenAuth from './config/token';
import PrivateRoutes from './components/routes/PrivateRoutes';


// Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}



function App() {
  return (
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <PrivateRoutes exact path="/home" component={Home} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
  );
}

export default App;
