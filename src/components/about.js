import React, { Component } from "react";

// Images
import MainJoe from "../assets/photo/joe1.jpg";

class Contact extends Component {
  render() {
    return (
      <span className="aboutWindow">
        <div className="aboutImages">
          <img src={MainJoe} alt="Joe" />
        </div>
        <div className="aboutText">
          <p>
            <h1>Hi,</h1> <h4>This is Joe.</h4> He is my 3 year old pet rabbit.
          </p>
          <p>
            I saved him from a nearby pet store that had locked him away from
            customers and had no intention of selling him.
          </p>
          <p>
            He loves carrots and running around the house. Even though he was
            much older when we first got him, he has been very lovable and
            became part of the family instantly.
          </p>
          <p>
            Joe has an eye disease which means he cannot see very well and he
            tears up often but he doesn't let these things bother him and runs
            around constantly.
          </p>
        </div>
      </span>
    );
  }
}

export default Contact;
