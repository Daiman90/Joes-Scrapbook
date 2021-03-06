import React, { Component } from "react";

import StartButton from "../assets/images/buttons_icons/win95_start_button.gif";
import StartButtonDown from "../assets/images/buttons_icons/win95_start_button_down.gif";
import ClockBg from "../assets/images/buttons_icons/clock_bg.gif";
import AboutButton from "../assets/images/buttons_icons/about_start_button.png";
import WindowButton from "../assets/images/buttons_icons/window_button.png";
import WindowButtonDown from "../assets/images/buttons_icons/window_button_down.png";

class StartBar extends Component {
  constructor() {
    super();
    this.state = {
      hours: 10,
      minutes: 10,
      seconds: 10,
      amPm: "am",
      startButtonImg: StartButton
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.clock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  clock() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 12) this.setState({ amPm: "am" });
    else {
      this.setState({ amPm: "pm" });
    }
    hours = hours % 12;
    if (hours === 0) hours = "12";
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = this.checkTime(hours);
    minutes = this.checkTime(minutes);
    seconds = this.checkTime(seconds);
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }
  checkTime(time) {
    if (time < 10) time = "0" + time;
    return time;
  }

  onFocus() {
    this.setState({ startButtonImg: StartButtonDown });
    document.getElementById("startMenu").classList.toggle("show");
  }
  onBlur() {
    this.setState({ startButtonImg: StartButton });
    var dropdowns = document.getElementsByClassName("startMenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  click(windowName) {
    var ele = document.getElementsByClassName("windowButton");
    for (var i = 0; i < ele.length; i++) {
      ele[i].style["background-image"] = "url(" + WindowButton + ")";
    }
    document.getElementById(windowName).style.backgroundImage =
      "url(" + WindowButtonDown + ")";
    if (windowName === "video") windowName = "video";
    else if (windowName === "photo") windowName = "photo";
    else if (windowName === "About") windowName = "about";
    this.props.changeZ(windowName);
  }

  converter(windowName) {
    if (windowName === "about") return "About";
  }

  render() {
    var renderWindowButton = this.props.sbList.map(item => (
      <div
        key={item}
        id={item}
        className="windowButton"
        onMouseDown={this.click.bind(this, item)}
      >
        {" "}
        {item}{" "}
      </div>
    ));

    return (
      <div className="StartBar">
        <input
          id="start_button"
          type="image"
          alt="Start Button"
          src={this.state.startButtonImg}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          height="35"
          width="80"
        />
        <div id="startMenu" className="startMenu-content">
          <input
            id="about_button"
            type="image"
            alt="about Button"
            src={AboutButton}
            height="50"
            width="200"
            onMouseDown={this.props.openWindow.bind(this, "about")}
          />
        </div>
        {renderWindowButton}
        <img id="clockbg" src={ClockBg} height="35" width="90" alt="Clock" />
        <span id="clock">
          {" "}
          {this.state.hours}:{this.state.minutes} {this.state.amPm}{" "}
        </span>
      </div>
    );
  }
}
export default StartBar;
