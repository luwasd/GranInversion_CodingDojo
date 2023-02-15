import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonCard from './components/PersonCard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard firstName="Lucas" lastName="Duarte" age={29} hairColor="Negro"/>
    <PersonCard firstName="Guillermo" lastName="Bernal" age={26} hairColor="Negro"/>
    <PersonCard firstName="Isaac" lastName="Vera" age={23} hairColor="Rubio"/>
    <PersonCard firstName="Marcos" lastName="Saldivar" age={31} hairColor="Pelirrojo"/>
  </React.StrictMode>
);

