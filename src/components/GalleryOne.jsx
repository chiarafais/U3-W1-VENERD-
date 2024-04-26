import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import React from "react";
import Slider from "react-slick";
import netflixLogo from "../assets/netflix.svg";

class GalleryOne extends Component {
  state = {
    settings: {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    films: [],
  };
  fetchFilms = (props) => {
    fetch("http://www.omdbapi.com/?apikey=266a7ae8&s=" + this.props.filmName)
      .then((response) => {
        if (response.ok) {
          console.log("fetch conclusa");
          return response.json();
        } else {
          throw new Error("Errore nella richiesta delle prenotazioni al server");
        }
      })
      .then((films) => {
        this.setState({ films: films.Search });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <div className="bg-dark pt-3 pb-3">
        <h3 className="text-light px-4"> {this.props.galleryTitle}</h3>
        <div className="slider-container">
          <Slider {...this.state.settings}>
            {this.state.films.map((film) => {
              return (
                <Row key={film.imdbID}>
                  <Col className="p-0 position-relative">
                    <Image src={film.Poster} className="img-fluid imageFilmPoster" />
                    <span className="netflixLogo">
                      <Image src={netflixLogo}></Image>
                    </span>
                  </Col>
                </Row>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
export default GalleryOne;
