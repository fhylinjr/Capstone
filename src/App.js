import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Header2 from './components/Header2';

class App extends React.Component {
  render (){
  return (
    <div className="App">
      <Header2></Header2>
      <Footer></Footer>
    </div>
  );
}
}

export default App;
