import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
 import GlobalStyle from './globalStyle';
 import Firebase, { FirebaseContext } from './Firebase'; 



ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}> 
    <App />
    <GlobalStyle /> 
    </FirebaseContext.Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


