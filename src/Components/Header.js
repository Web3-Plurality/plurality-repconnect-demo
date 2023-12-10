import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import PluralityPopupWidget from 'plurality-repconnect-widget';

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = "Social Verse";
    const description = "A social media platform which enables you to bind your real world personality to your web3 account";

    const handleDataReturned = (data) => {
      console.log('Received data from widget:', data);
      // Handle the received data in the external webpage
      // ... (perform actions with the received data)
      const orbisProfile='https://app.orbis.club/profile/'+data.did.toLowerCase();
      console.log(orbisProfile);
      window.location.href = orbisProfile;
  };

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Connect
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Feed
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#docs">
                Friends
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Communities
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Chat
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <div className="social">
                <PluralityPopupWidget
                  options={{ apps: 'facebook,twitter' }}
                  onDataReturned={handleDataReturned}
                  customization={{ height: '80px', width: '500px'}}
                />
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a> */}
                {/* <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a> */}
              </div>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
