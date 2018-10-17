import React, { Component } from "react";

import "./Footer.css";
import Logo from "../../images/mf-logo-black.svg";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <hr className="contentBreak" />
          <img src={Logo} />
          <hr className="logoBreak" />
        </div>
        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h5 className="heading">Company</h5>
                <p>About</p>
                <p>Press</p>
                <p>Terms + Conditions</p>
              </div>
              <div className="col-5">
                <h5 className="heading">Categories</h5>
                <p>Seating</p>
                <p>Tables</p>
                <p>Misc</p>
              </div>
              <div className="col">
                <h5 className="heading social">Social</h5>
                <img
                  src="https://image.freepik.com/free-icon/instagram-social-network-logo-of-photo-camera_318-64651.jpg"
                  className="instagram"
                />
                <img
                  src="https://png2.kisspng.com/20180410/fve/kisspng-social-media-computer-icons-twitter-5acc9c7cc741e6.5739814015233588448162.png"
                  className="twitter"
                />
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_106006.png"
                  className="pinterest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
