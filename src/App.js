import React from 'react';
import { HashRouter} from 'react-router-dom';
import './App.css';

import AppRouter from './AppRouter';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <HashRouter>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </HashRouter>
  );
}

export default App;
