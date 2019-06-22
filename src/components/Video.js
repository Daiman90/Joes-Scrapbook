import React, { Component } from "react";
import VideoMedia from "./VideoMedia";

import joe1 from "../assets/video/joe1.mp4";
import joe2 from "../assets/video/joe2.mp4";
import joe3 from "../assets/video/joe3.mp4";
import joe4 from "../assets/video/joe4.mp4";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      media: []
    };
  }

  componentWillMount() {
    this.setState({
      media: [
        {
          title: "Video's of Joe",
          description: "Video's of Joe.",
          videos: [
            {
              video: joe1,
              videoTitle: "joe1",
              description: "joe"
            },
            {
              video: joe2,
              videoTitle: "joe2",
              description: "joe"
            },
            {
              video: joe3,
              videoTitle: "joe3",
              description: "joe"
            },
            {
              video: joe4,
              videoTitle: "joe4",
              description: "joe"
            }
          ]
        }
      ]
    });
  }

  changeZ() {
    this.props.changeZ("video");
  }

  render() {
    let Medias;
    Medias = this.state.media.map(media => {
      return (
        <VideoMedia
          key={media.title}
          media={media}
          changeZ={this.changeZ.bind(this)}
        />
      );
    });
    return (
      <div className="wrap media" onClick={this.changeZ.bind(this)}>
        {Medias}
      </div>
    );
  }
}

export default Video;
