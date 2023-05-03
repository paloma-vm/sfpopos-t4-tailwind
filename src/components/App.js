import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Outlet } from 'react-router-dom';
const date_made = new Date();
const date_year = date_made.getFullYear();

function App() {
  return (
    <div className="App bg-lime-100">
      <div className='header-background bg-red-300'>
        <Header />
      </div>

      <main className='App-content'>
        <Outlet />
      </main>
      <Footer
        name="Paloma Valdez-Marsh"
        copyright_year={`copyright ${date_year}`}
      />
    </div>
  );
}

export default App;
