import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TOC from './TOC';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Story from './Story';
import { Helmet } from 'react-helmet';
import LottieAnimation from './LottieAnimation';
import './App.css';
import './print.css';

const App: React.FC = () => {
  return (
    <Router>
      <Helmet>
        <title>Steve Jobs - Frontend Engineer</title>
        <meta name='description' content='Steve Jobs, a passionate frontend engineer with experience in React, TypeScript, and more.' />
        <meta name='keywords' content='Steve Jobs, frontend engineer, web developer, React, TypeScript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <Header />
      <div className='App'>
        <TOC />
        <Switch>
  <Route path='/' component={Home} exact />
  <Route path='/toc' component={TOC} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
<Route path='/story' component={Story} />
        </Switch>
      </div>
      
    </Router>
  );
};

export default App;












