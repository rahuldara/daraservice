import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Home */}
      <div className="app__home">
        {/* Product */}
        <Product
          id="1"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />

        <Product
          id="2"
          title="AmazonBasics High-Speed HDMI Cable, 6 Feet, 1-Pack"
          price={6.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71fSvF-ha9L._AC_SX425_.jpg"
        />
      </div>
    </div>
  );
}

export default App;
