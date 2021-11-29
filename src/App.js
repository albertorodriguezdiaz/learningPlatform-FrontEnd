import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlertState from './context/alerts/alertState';
import AuthState from './context/autentication/authState';
import tokenAuth from './config/token';
import PrivateRoutes from './components/routes/PrivateRoutes';

// General
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NewAccount';
import Home from './components/home/home';
import NotFound from './components/layout/NotFound';

// Alumnos

// Admin
import AlumnosAdmin from './components/admin/AlumnosAdmin';
import ColegiosAdmin from './components/admin/colegios/ColegiosAdmin';



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
                <PrivateRoutes userLevel={'admin'} exact path="/home" component={Home} />
                <PrivateRoutes userLevel={'admin'} exact path="/usuarios" component={AlumnosAdmin} />
                <PrivateRoutes exact path="/nueva-cuenta" component={NuevaCuenta} />
                <PrivateRoutes userLevel={'admin'} exact path="/colegios" component={ColegiosAdmin} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
  );
}

export default App;
