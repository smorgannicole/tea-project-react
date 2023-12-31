import "./css/App.scss";
import React from 'react';
import "./App.css";
import MainWrapper from './components/MainWrapper';
import Main from './components/Main';
import FavoriteTeasContainer from './components/Main/components/FavoriteTeasContainer';

function App() {
  return (
    <div className="app-wrapper">
      <MainWrapper>
        <Main />
        <FavoriteTeasContainer />
      </MainWrapper>
    </div>
  );
}

export default App;
