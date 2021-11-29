import './App.css';

import React, { useContext, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import { AuthContextProvider } from './context/authenticate/context';
import reducer from './context/authenticate/reducer';
import { InitailUserState } from './context/initialState/auth';
import routes from './routes/index';

function App() {

  const [ authState, authDispatch ] = useReducer(reducer,InitailUserState)

  const AuthContextValue = {
    authState,
    authDispatch
  }

  console.log(authState)

  return (
    <AuthContextProvider value = { AuthContextValue }>
      <BrowserRouter>
        <Routes>
          { routes.map( (val) => {
            return (
              <Route path = { val.path } element = { <val.element /> } />
            )
          } ) }
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
