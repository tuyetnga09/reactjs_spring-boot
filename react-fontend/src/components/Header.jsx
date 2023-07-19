import React, { Component } from "react";
import mapIcon from "./images/map-icon.png";
import call from "./images/call-icon.png";
import gmail from "./images/mail-icon.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="call_text">
                  <a href="https://nodejs.org/en">
                    <img src={`${mapIcon}`} alt="Map Icon" />
                    <span className="call_text_left">Locations</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="call_text">
                  <a href="https://nodejs.org/en">
                    <img src={`${call}`} alt="Call" />
                    <span className="call_text_left">0968081975</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="call_text">
                  <a href="https://nodejs.org/en">
                    <img src={`${gmail}`} alt="Call" />
                    <span className="call_text_left">ngaptt1409@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Header;
