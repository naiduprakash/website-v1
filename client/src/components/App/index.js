import React, { Component } from 'react';
import './index.scss';
import startBackgroundImg from '../../assets/images/bg.jpeg';
import projectImg from '../../assets/images/projectImg.jpg';

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
              <span className="skyblue">&lt; </span>
              John
              <span className="skyblue"> /&gt;</span>
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

        <div id="start" class="navbar-offset-top min100vh d-flex background-center" style={{ backgroundImage: `url(${startBackgroundImg})` }}>
          <div className="container-fluid">
            <div className="row height100 align-self-center align-items-center justify-content-center">
              <div className="col-sm-7 col-md-7 col-9">
                <div className="wrapper">
                  <h1 className="title">
                    lorem ipsum some df
                  <strong className="skyblue"> John Doe</strong>
                  </h1>
                  <h2 className="subtitle font-secondary">
                    lorem ipsum some dummy, text, dfvddfg.
                </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="work" class="min100vh container-fluid">
          <div className="container-fluid">
            <div className="timeline">
              <div className="project">
                <div className="project-index">00</div>
                <div className="project-name">what is lorem ipsum</div>
                <div className="project-image" style={{ backgroundImage: `url(${projectImg})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;