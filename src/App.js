import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlertState from './context/alerts/alertState';

import AuthState from './context/autentication/authState';
import BookState from './context/books/bookState';

import tokenAuth from './config/token';
import PrivateRoutes from './components/routes/PrivateRoutes';

// General
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NewAccount';
import Home from './components/home/home';
import NotFound from './components/layout/NotFound';

// Alumnos
import HomeBook1 from './components/books/book_1/HomeBook1';
import Notas from './components/alumnos/Notas';


// Admin
import AlumnosAdmin from './components/admin/AlumnosAdmin';
import ColegiosAdmin from './components/admin/colegios/ColegiosAdmin';
import BookSoyVidaAdmin from './components/admin/BookSoyVidaAdmin'
import BooksAdmin from './components/admin/BooksAdmin';
import BooksNotas from './components/admin/BooksNotas';



// Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}



function App(props) {
  return (
        <AuthState>
          <BookState>
            <AlertState>

              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  
                  <PrivateRoutes userlevel={'admin'} exact path="/home" component={Home} {...props} />
                  <PrivateRoutes userlevel={'admin'} exact path="/usuarios" component={NuevaCuenta} />
                  {/* <PrivateRoutes exact path="/nueva-cuenta" component={NuevaCuenta} /> */}
                  <PrivateRoutes userlevel={'admin'} exact path="/colegios" component={ColegiosAdmin} />
                  <PrivateRoutes userlevel={'admin'} exact path="/libros" component={BookSoyVidaAdmin} />
                  <PrivateRoutes userlevel={'admin'} exact path="/usuariolibro" component={BooksAdmin} />
                  <PrivateRoutes userlevel={'user'} exact path="/usuarionotas" component={BooksNotas} />
                  <PrivateRoutes userlevel={'user'} exact path="/notas" component={Notas} />
                  <PrivateRoutes userlevel={'user'} exact path="/estadisticas" component={Notas} />

                  <PrivateRoutes userlevel={'user'} exact path="/primero" component={HomeBook1} />
                  
                  <Route path="*" component={NotFound} />
                </Switch>
              </Router>

            </AlertState>
          </BookState>
        </AuthState>
  );
}

export default App;
