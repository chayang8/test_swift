import React from 'react';
import Main from './components/select_action/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layoutstyle from './components/select_action/LayoutStyle';
import FormCRUD from './components/select_action/FormCRUD';
import { Provider } from 'react-redux';
import {store} from './store/Store'
import './App.css';
import HeaderLayout from './components/other_component/HeaderLayout';
import { useTranslation } from 'react-i18next';
import i18n from './components/select_action/ChangeLanguage';
function App() {
  const { t } = useTranslation();
  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  return (
      <Provider store={store}>
      <Router>
        <HeaderLayout />
        <Routes>
        <Route path='/'   element={<Main t={t}/>} />
        <Route path='/LayoutStyle'   element={<Layoutstyle t={t}/>} />
        <Route path='/FormCRUD'   element={<FormCRUD t={t}/>} />
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;
