import React, { Component } from 'react';
import './index.scss';
import startBackgroundImg from '../../assets/images/bg.jpeg';

class App extends Component {
  render() {
    return (
      <div className="page page-landing">

        <header>
          <nav id="main-nav"
            class="navbar navbar-dark fixed-top navbar-expand-md headspace headspace--fixed">
            <button type="button" aria-label="Toggle navigation" aria-controls="nav_collapse" aria-expanded="false" class="navbar-toggler">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a aria-label="Yasio" href="#start" target="_self" class="navbar-brand">
              logo
            </a>
            <div id="nav_collapse" class="navbar-collapse collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a href="#start" target="_self" class="nav-link active">
                    Start
          <span>/&gt;</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#work" target="_self" class="nav-link">
                    Work
          <span>/&gt;</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#lab" target="_self" class="nav-link">
                    Lab
          <span>/&gt;</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#about" target="_self" class="nav-link">
                    About
          <span>/&gt;</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#contact" target="_self" class="nav-link">
                    Contact
           <span>/&gt;</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="start" class="navbar-offset-top min100vh d-flex top-jumbotron pr container-fluid" style={{ backgroundImage: `url(${startBackgroundImg})` }}>
          <div className="container-fluid">
            <div className="row align-self-center align-items-center justify-content-center">
              <div className="col-sm-7 col-md-7 col-9">
                <div class="timeline">
                  <div class="bullet"></div>
                  <a href="#work" aria-label="Go to next section" class="scroll-bottom scale-hover">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18 30" >
                      <path fill="#988E9F" d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4	c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z" class="st0">
                      </path>
                    </svg>
                    <br />
                    <span>SCROLL</span>
                  </a>
                </div>
                <div>
                <small id="first-element" class="block-reveal__text section-title mb-3 pb-3">Start /&gt;</small>
                </div>
                
                <h1 className="title">
                  Hi, my name is
                  <strong className="purple"> Prakash Naidu</strong>
                </h1>
                <h2 className="subtitle">
                  I Develop Websites, Webapps & Mobile apps.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;