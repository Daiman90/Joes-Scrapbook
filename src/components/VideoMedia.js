import React, { Component } from "react";
import classNames from "classnames";

var slideIndex = 1;
var slideName = "";
var slideDesc = "";
var dotClass = "";

class VideoMedia extends Component {
  getClassName() {
    return classNames("Media");
  }

  componentDidMount() {
    this.showDivs(slideIndex);
  }

  // Render video methods
  rendervideo(video, idx) {
    return (
      <video
        className={slideName}
        id={video.videoTitle}
        key={video.videoTitle}
        alt={video.videoAlt}
        src={video.video}
        autoPlay="true"
        loop="true"
        muted="true"
      />
    );
  }
  rendervideoDescription(video, idx) {
    return (
      <div className={slideDesc} id={video.videoTitle} key={video.videoTitle}>
        {video.description}
      </div>
    );
  }
  renderDots(video, idx) {
    return (
      <span
        key={idx}
        className={dotClass}
        onClick={this.currentDiv.bind(this, idx)}
      />
    );
  }

  // helper methods
  plusDivs(n) {
    slideIndex += 1;
    this.showDivs(slideIndex);
  }
  minusDivs() {
    slideIndex -= 1;
    this.showDivs(slideIndex);
  }
  currentDiv(n) {
    slideIndex = n + 1;
    this.showDivs(slideIndex);
  }

  // Show video in gallery
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName(
      "mySlides_" + this.props.media.title
    );
    var y = document.getElementsByClassName(
      "description_" + this.props.media.title
    );
    var dots = document.getElementsByClassName("dot_" + this.props.media.title);
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" fill", "");
    }
    x[slideIndex - 1].style.display = "block";
    y[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " fill";
  }

  render() {
    slideName = "videos mySlides_" + this.props.media.title;
    slideDesc = "video_description description_" + this.props.media.title;
    dotClass = "dot dot_" + this.props.media.title;

    return (
      <div className={this.getClassName()} onMouseDown={this.props.changeZ}>
        <div className="media_info" onMouseDown={this.props.changeZ}>
          <h2 className="media_title">{this.props.media.title}</h2>
          <p className="media_description">{this.props.media.description}</p>
        </div>
        <div className="media_gallery" onMouseDown={this.props.changeZ}>
          {this.props.media.videos.map(this.rendervideo.bind(this))}
          <div
            className="leftArrow"
            onClick={this.minusDivs.bind(this)}
            onMouseDown={this.props.changeZ}
          >
            <span className="arrow">&#10094;</span>
          </div>
          <div
            className="rightArrow"
            onClick={this.plusDivs.bind(this)}
            onMouseDown={this.props.changeZ}
          >
            <span className="arrow">&#10095;</span>
          </div>
          <div className="gallery_dots" onMouseDown={this.props.changeZ}>
            {this.props.media.videos.map(this.renderDots.bind(this))}
          </div>
        </div>
        <div onMouseDown={this.props.changeZ}>
          {this.props.media.videos.map(this.rendervideoDescription.bind(this))}
        </div>
      </div>
    );
  }
}

export default VideoMedia;
