import React, { useEffect, useState } from "react";
import { Row, Col, Container, Carousel, } from "react-bootstrap";
import "../STYLES/intro_style.css";

// Import css files for Carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Images
import pic from "./choco.jpg";
import cday from "../Pics/img2.jfif";
import gifts from "../Pics/gifts.jfif";
import party from "../Pics/party.jfif";



const Introscreen = () => {

    var settings;
    const [slider, setslider] = useState(settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    })

    var width = window.innerWidth;

    useEffect(() => {
        console.log(width);
        if (width < 780) {     // <----- Responsive for VIEWPORT
            console.log("if cond working");
            setslider(settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
            })
        }
    }, [width]);

    return (
        <div className="main-cls">
            {/*   <Container >   border around
            <Link className="btn btn-danger my-3" to="/home" >  GO BACK  </Link>
            {{<div className="bubble" >
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                </div>}}
            </Container> */}

            {/*  <Link className="btn btn-danger my-3" to="/home">
                GO BACK{" "}
            </Link> */}

            {/* -----------  CAROUSEL  --------- */}
            <Carousel fade>
                <Carousel.Item className="mycarou">
                    <div className="overlay-image">
                        {" "}
                        {/* hazy in the background using OPACITY */}
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1526081715791-7c538f86060e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwZ2lmdCUyMGJveHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className="carou_center">
                        <h3 className="title">Chocolatey</h3>
                        <p className="subtitle">
                            ------- Made with Love Unique Chocolates for gourmet -------
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="mycarou">
                    <div className="overlay-image">
                        <img className="d-block w-100" src={cday} alt="Second slide" />
                    </div>
                    <Carousel.Caption className="carou_center">
                        <h3 className="subtitle">DARK CHOCOLATES</h3>
                        <p className="subtitle">
                            ------- A healthy alternatives for Chocolate Lovers -------{" "}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="mycarou">
                    <div className="overlay-image">{" "}
                        <img
                            className="d-block w-100 "
                            src="https://images.unsplash.com/photo-1526823127573-0fda76b6c24f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNob2NvbGF0ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption className="carou_center">
                        <h3 className="subtitle">DARK CHOCOLATES</h3>
                        <p className="subtitle">
                            ------- A healthy alternatives for Chocolate Lovers -------{" "}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Container className="container_self">
                <div className="minihead">
                    <h2 className="subheading">
                        {" "}
                        <span> Free Shipping</span>{" "}
                    </h2>
                </div>

                {/* -----------  CARD - SLIDDER   --------- */}
                <div>
                    <Slider {...slider}>
                        <div className="minislider">
                            <img
                                className="d-block w-100 htset "
                                src="http://design.dev.drcsystems.ooo:8084/themeforest/chocolate/assets/images/offer-img/img10.jpg"
                                alt="First slide"
                            />
                            <div className="minisli_box">
                                <h4>Birthday Day</h4>
                            </div>
                        </div>

                        <div className="minislider">
                            <img className="d-block w-100 htset" src={pic} alt="First slide" />
                            <div className="minisli_box">
                                <h4>Valentine's Day</h4>
                            </div>
                        </div>

                        <div className="minislider">
                            <img
                                className="d-block w-100 htset"
                                src={gifts}
                                alt="First slide"
                            />
                            <div className="minisli_box">
                                <h4>Gifts</h4>
                            </div>
                        </div>

                        <div className="minislider">
                            <img className="d-block w-100 htset" src={party} alt="First slide" />
                            <div className="minisli_box">
                                <h4>Party</h4>
                            </div>
                        </div>

                        <div className="minislider">
                            <img
                                className="d-block w-100 htset"
                                src="https://images.unsplash.com/photo-1548741487-18d363dc4469?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                alt="First slide"
                            />
                            <div className="minisli_box">
                                <h4>chocolatey</h4>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>


            <section id="parallax" className="parallax">
                <div className="container" data-aos="zoom-in">
                    <div className="text-center">
                        <h2>Valentines Day</h2>
                        <p>A brand new Valentines Day's Collection on your way ....</p>
                        <a className="parallax-btn" href="/home">
                            SHOP NOW
                         </a>
                    </div>
                </div>
            </section>


            <Container>
                {/* <div class="d-flex justify-content-around"> */}
                <Row>
                    <Col md={8} >
                        <img
                            src="http://crems.like-themes.com/wp-content/uploads/2020/07/section-about-bg.png"
                            alt="First slide"
                        />
                    </Col>

                    <Col md={4} >
                        <div id="item">
                            <h5 className="itemhead"><i class="fab fa-pagelines icoo"></i> Natural Organic Products</h5>
                            <p className="item_subhead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div id="item">
                            <h5 className="itemhead"> <i class="fas fa-gift icoo"></i>Designing</h5>
                            <p className="item_subhead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div id="item">
                            <h5 className="itemhead"><i class="fas fa-candy-cane icoo"></i>Best Quality Cocoa</h5>
                            <p className="item_subhead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis aute irure dolor in reprehenderit
                            </p>
                        </div>

                    </Col>
                </Row>
                {/* </div> */}
            </Container>


            <Container className="container_self">
                <div className="minihead">
                    <h2 className="subheading">
                        {" "}
                        <span>Trending Chocolates</span>{" "}
                    </h2>
                </div>
                <Row className="HOVER" >
                    <Col md={3} sm={6} xs={6} className="choco" >
                        <img className="choco_img" src="http://crems.like-themes.com/wp-content/uploads/2019/06/shop-04-800x800.png" alt="lost" />
                        <div className="choco_name" > <h4>Choco Vanilla Truffle</h4></div>
                    </Col>

                    <Col md={3} sm={6} xs={6} className="choco" >
                        <img className="choco_img" src="http://crems.like-themes.com/wp-content/uploads/2019/06/candies_prod.png" alt="lost" />
                        <div className="choco_name" > <h4>Ferrero Rocher</h4></div>
                    </Col>

                    <Col md={3} sm={6} xs={6} className="choco" >
                        <img className="choco_img" src="http://crems.like-themes.com/wp-content/uploads/2019/06/shop-05-768x768.png" alt="lost" />
                        <div className="choco_name" > <h4>Almond Dark Chocolate</h4></div>
                    </Col>

                    <Col md={3} sm={6} xs={6} className="choco" >
                        <img className="choco_img" src="http://crems.like-themes.com/wp-content/uploads/2019/06/choco_prod.png" alt="lost" />
                        <div className="choco_name" > <h4>Dark Chocolate</h4></div>
                    </Col>
                </Row>

                <Row>
                    <section className="my-3 Button" style={{ marginLeft: "3rem" }}>
                        <a className="Button-btn" href="/home"> SHOP NOW </a>
                    </section>
                </Row>

            </Container>


        </div >
    );
};

export default Introscreen;
