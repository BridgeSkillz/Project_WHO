import React from 'react';
import Home from './components/home';
import Logo from './components/atoms/logo.js';
import Option from './components/option';
import Footer from './components/footer.js';


function App() {
  return (
     <div className='land-page'>
      <Logo />
      <Home/>
      <Option />
      <Footer/>
     </div>
  );
};

export default App;
