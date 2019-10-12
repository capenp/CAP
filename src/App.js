import React from 'react';

import NavbarSection from './Sections/NavbarSection';
import FooterSection from './Sections/FooterSection';

import { HashRouter, Route , Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Actualite from './Pages/Actualite';
import Polymag from './Pages/Polymag';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Alumni from './Pages/Events/Alumni';
import Bal from './Pages/Events/Bal';
import Celebra from './Pages/Events/Celebra';
import Charity from './Pages/Events/Charity';
import Don from './Pages/Events/Don';
import Interspe from './Pages/Events/Interspe';
import Mun from './Pages/Events/Mun';
import Sms from './Pages/Events/Sms';
import Unleash from './Pages/Events/Unleash';
import Wikistage from './Pages/Events/Wikistage';

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <NavbarSection/>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/actualite" component={Actualite} />
            <Route path="/polymag" component={Polymag} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
            <Route path="/evenements/alumni" component={Alumni} />
            <Route path="/evenements/bal" component={Bal} />
            <Route path="/evenements/celebra" component={Celebra} />
            <Route path="/evenements/charity" component={Charity} />
            <Route path="/evenements/don-de-sang" component={Don} />
            <Route path="/evenements/interspe" component={Interspe} />
            <Route path="/evenements/mun" component={Mun} />
            <Route path="/evenements/sms" component={Sms} />
            <Route path="/evenements/unleash" component={Unleash} />
            <Route path="/evenements/wikistage" component={Wikistage} />
          </Switch>
          <FooterSection/>

        </HashRouter>
      );
  }
}

export default App;
