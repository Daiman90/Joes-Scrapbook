import React, { Component } from "react";
import Media from "./Media";

import joe2 from "../assets/photo/joe2.jpg";
import joe3 from "../assets/photo/joe3.jpg";
import joe4 from "../assets/photo/joe4.jpg";
import joe5 from "../assets/photo/joe5.jpg";
import joe6 from "../assets/photo/joe6.jpg";
import joe7 from "../assets/photo/joe7.jpg";
import joe8 from "../assets/photo/joe8.jpg";
import joe9 from "../assets/photo/joe9.jpg";
import joe10 from "../assets/photo/joe10.jpg";
import joe11 from "../assets/photo/joe11.jpg";
import joe12 from "../assets/photo/joe12.jpg";

class Photo extends Component {
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
          title: "Joe's photobook",
          description: <p>A collection of photos of Joe.</p>,
          images: [
            {
              image: joe2,
              imageAlt: "joe2",
              imageTitle: "joe2",
              description: "Joe"
            },
            {
              image: joe3,
              imageAlt: "joe3",
              imageTitle: "joe",
              description: "Joe"
            },
            {
              image: joe4,
              imageAlt: "joe4",
              imageTitle: "team4",
              description: "Joe"
            },
            {
              image: joe5,
              imageAlt: "joe4",
              imageTitle: "joe4",
              description: "Joe."
            },
            {
              image: joe5,
              imageAlt: "joe5",
              imageTitle: "joe5",
              description: "Joe."
            },
            {
              image: joe6,
              imageAlt: "joe6",
              imageTitle: "joe6",
              description: "Joe."
            },
            {
              image: joe7,
              imageAlt: "joe7",
              imageTitle: "joe7",
              description: "Joe."
            },
            {
              image: joe8,
              imageAlt: "joe8",
              imageTitle: "joe8",
              description: "Joe."
            },
            {
              image: joe9,
              imageAlt: "joe9",
              imageTitle: "joe9",
              description: "Joe."
            },
            {
              image: joe10,
              imageAlt: "joe10",
              imageTitle: "joe10",
              description: "Joe."
            },
            {
              image: joe11,
              imageAlt: "joe11",
              imageTitle: "joe11",
              description: "Joe."
            },
            {
              image: joe12,
              imageAlt: "joe12",
              imageTitle: "joe12",
              description: "Joe."
            }
          ]
        }
      ]
    });
  }

  changeZ() {
    this.props.changeZ("photo");
  }

  render() {
    let Medias;
    Medias = this.state.media.map(media => {
      return (
        <Media
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

export default Photo;
