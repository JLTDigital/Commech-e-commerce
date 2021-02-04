import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import LatestProducts from './screens/LatestProducts'
import CompLapScreen from './screens/CompLapScreen'
import RetroScreen from './screens/RetroScreen'
import SmartphoneScreen from './screens/SmartphonesScreen'
import VRScreen from './screens/VirtualRealityScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/latest/products' component={LatestProducts} exact />
          <Route path='/retro' component={RetroScreen} exact />
          <Route path='/computers-laptops' component={CompLapScreen} exact />
          <Route path='/smartphones' component={SmartphoneScreen} exact />
          <Route path='/vr' component={VRScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
