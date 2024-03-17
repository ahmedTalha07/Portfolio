// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navigation';
import MainHeading from './mainheading';

const Home = () => <div>Home Page Content</div>;
const About = () => <div>About Page Content</div>;
const Projects = () => <div>Projects Page Content</div>;
const App = () => {
  return (
    <body>
     
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/about' component={<About/>} />
          <Route path='/projects' component={<Projects/>} />
        </Routes>
      </div>
    </Router>
      <header className='grid grid-cols-2 container mx-auto'>
        <div className='grid header-trans'>
          {/* <h1 className='text-xl mt-5 lobster-two-regular grid justify-center items-center'>👋 Hi there, I'm Talha Ahmed</h1> */}
          
          <p className='text-2xl font-pacifico-cursive'><span className='text-3xl'>👋</span> Hi there, I'm Talha Ahmed</p>
         <span className='mt-5 mb-8 migraine-x'>
          <MainHeading/>
          </span>  
          
          </div>
    </header>
    </body>
  );
};

export default App;
