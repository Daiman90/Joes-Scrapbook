//Deckard == photo
//video == video

import React, { Component } from "react";
import Rnd from "react-rnd";
import Photo from "./Photo";
import Video from "./Video";
import About from "./about";

// Icon Images
import folder_icon from "../assets/images/buttons_icons/folder_icon.png";
import resize from "../assets/images/buttons_icons/resize.png";
import WindowButton from "../assets/images/buttons_icons/window_button.png";
import WindowButtonDown from "../assets/images/buttons_icons/window_button_down.png";

// Window Z-Index counter
var zCounter = 10;

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      desktopStyle: {
        height: window.innerHeight - 42
      },
      photoRnd: {
        width: 200,
        height: 200,
        x: 100,
        y: 100,
        z: 1
      },
      videoRnd: {
        width: 200,
        height: 200,
        x: 125,
        y: 125,
        z: 2
      },
      aboutRnd: {
        width: 200,
        height: 200,
        x: 225,
        y: 225,
        z: 4
      },
      photoWindowStyle: {
        display: "none"
      },
      videoWindowStyle: {
        display: "none"
      },
      aboutWindowStyle: {
        display: "flex"
      },
      contactWindowStyle: {
        display: "none"
      }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow.bind(this));
  }

  resizeWindow() {
    this.setState({ desktopStyle: { height: window.innerHeight - 42 } });
  }

  openWindow(folderName) {
    if (folderName === "photo")
      this.setState({
        photoWindowStyle: { ...this.state.photoWindowStyle, display: "flex" }
      });
    else if (folderName === "video")
      this.setState({
        videoWindowStyle: { ...this.state.videoWindowStyle, display: "flex" }
      });
    else if (folderName === "about")
      this.setState({
        aboutWindowStyle: { ...this.state.aboutWindowStyle, display: "flex" }
      });
    this.changeZ(folderName);
    this.props.addToSBList(this.converter(folderName));
    this.windowButtonSelector(this.converter(folderName));
  }

  closeWindow(windowName) {
    if (windowName === "photo")
      this.setState({
        photoWindowStyle: { ...this.state.photoWindowStyle, display: "none" }
      });
    else if (windowName === "video")
      this.setState({
        videoWindowStyle: { ...this.state.videoWindowStyle, display: "none" }
      });
    else if (windowName === "about")
      this.setState({
        aboutWindowStyle: { ...this.state.aboutWindowStyle, display: "none" }
      });
    this.props.removeFromSBList(this.converter(windowName));
  }

  addToSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if (index === -1) {
      array.push(windowName);
    }
  }

  removeFromSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  changeZ(windowName) {
    switch (windowName) {
      case "photo":
        this.setState({ photoRnd: { ...this.state.photoRnd, z: zCounter } });
        break;
      case "video":
        this.setState({ videoRnd: { ...this.state.videoRnd, z: zCounter } });
        break;
      case "about":
        this.setState({ aboutRnd: { ...this.state.aboutRnd, z: zCounter } });
        break;
      case "contact":
        this.setState({
          contactRnd: { ...this.state.contactRnd, z: zCounter }
        });
        break;
      default:
    }
    zCounter++;
    this.windowButtonSelector(this.converter(windowName));
  }

  converter(windowName) {
    switch (windowName) {
      case "photo":
        return "Photo";
      case "video":
        return "Video";
      case "about":
        return "About";
      default:
    }
  }

  windowButtonSelector(windowName) {
    var ele = document.getElementsByClassName("windowButton");
    for (var i = 0; i < ele.length; i++)
      ele[i].style["background-image"] = "url(" + WindowButton + ")";
    ele = document.getElementById(windowName);
    if (ele) ele.style.backgroundImage = "url(" + WindowButtonDown + ")";
  }

  render() {
    return (
      <div className="Desktop" style={this.state.desktopStyle}>
        <div className="left">
          <div className="left icon">
            <input
              className="folder"
              id="photo"
              type="image"
              alt="Photo"
              src={folder_icon}
              height="50"
              width="50"
              onClick={this.openWindow.bind(this, "photo")}
            />
            <p>Photo</p>
          </div>
          <div className="left icon">
            <input
              className="folder"
              id="video"
              type="image"
              alt="Video"
              src={folder_icon}
              height="50"
              width="50"
              onClick={this.openWindow.bind(this, "video")}
            />
            <p>Video</p>
          </div>
        </div>

        <Rnd
          style={this.state.photoWindowStyle}
          size={{
            width: this.state.photoRnd.width,
            height: this.state.photoRnd.height
          }}
          z={this.state.photoRnd.z}
          dragHandleClassName=".photoHandle"
          position={{ x: this.state.photoRnd.x, y: this.state.photoRnd.y }}
          onDragStop={(e, d) => {
            this.setState({
              photoRnd: { ...this.state.photoRnd, x: d.x, y: d.y }
            });
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              photoRnd: {
                ...this.state.photoRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight
              }
            });
          }}
        >
          <div
            className="photoHandle handle"
            onMouseDown={this.changeZ.bind(this, "photo")}
          >
            <span className="handleTitle">Photo</span>
          </div>
          <button
            className="close"
            onClick={this.closeWindow.bind(this, "photo")}
          >
            x
          </button>
          <Photo changeZ={this.changeZ.bind(this)} />
          <div className="resize">
            <img src={resize} alt="Resize" />
          </div>
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "video")}
          style={this.state.videoWindowStyle}
          size={{
            width: this.state.videoRnd.width,
            height: this.state.videoRnd.height
          }}
          z={this.state.videoRnd.z}
          dragHandleClassName=".videoHandle"
          position={{ x: this.state.videoRnd.x, y: this.state.videoRnd.y }}
          onDragStop={(e, d) => {
            this.setState({
              videoRnd: { ...this.state.videoRnd, x: d.x, y: d.y }
            });
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              videoRnd: {
                ...this.state.videoRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight
              }
            });
          }}
        >
          <div
            className="videoHandle handle"
            onMouseDown={this.changeZ.bind(this, "video")}
          >
            <span className="handleTitle">Video</span>
          </div>
          <button
            className="close"
            onClick={this.closeWindow.bind(this, "video")}
          >
            x
          </button>
          <Video changeZ={this.changeZ.bind(this)} />
          <div className="resize">
            <img src={resize} alt="Resize" />
          </div>
        </Rnd>
        <Rnd
          onClick={this.changeZ.bind(this, "about")}
          className="about"
          style={this.state.aboutWindowStyle}
          size={{
            width: this.state.aboutRnd.width,
            height: this.state.aboutRnd.height
          }}
          z={this.state.aboutRnd.z}
          dragHandleClassName=".aboutHandle"
          position={{ x: this.state.aboutRnd.x, y: this.state.aboutRnd.y }}
          onDragStop={(e, d) => {
            this.setState({
              aboutRnd: { ...this.state.aboutRnd, x: d.x, y: d.y }
            });
          }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              aboutRnd: {
                ...this.state.aboutRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight
              }
            });
          }}
        >
          <div
            className="aboutHandle handle"
            onMouseDown={this.changeZ.bind(this, "about")}
          >
            <span className="handleTitle">About</span>
          </div>
          <button
            className="close"
            onClick={this.closeWindow.bind(this, "about")}
          >
            x
          </button>
          <div
            className="aboutContent content"
            onClick={this.changeZ.bind(this, "about")}
          >
            <About />
            <div className="resize">
              <img src={resize} alt="Resize" />
            </div>
          </div>
        </Rnd>
      </div>
    );
  }
}

export default Desktop;
