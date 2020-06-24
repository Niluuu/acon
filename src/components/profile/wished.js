import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { useState, useEffect } from "react";
import address from "../../assets/images/profile/heart.png";
import close from "../../assets/images/profile/close.png";
import product from "../../assets/images/profile/product.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";

const products = [
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
];

function Wished() {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(products);
  }, []);

  return (
    <div className="orders_page wished">
      <div className="profile_child">
        <Link to="/profile">
          <LazyLoadImage  src={back} alt="" className="back_to" />
        </Link>
        <p className="title">ИЗБРАННОЕ</p>
      </div>
      <div className="content">
        {state === null ? (
          <div className="empty_row">
            <LazyLoadImage  src={address} alt="" />
            <p className="title">Здесь пока пусто</p>
            <p className="under_title">
              Вы пока ничего не добавили в избранное{" "}
            </p>
            <button className="light_button">
              <Link to="/category"> ПЕРЕЙТИ В КАТАЛОГ</Link>
            </button>
          </div>
        ) : null}

        {state && (
          <div className="product">
            <Container>
              {state.map((p) => {
                return (
                  <Row>
                    <Col>
                      <div className="items">
                        <div className="item_top">
                          <div className="close">
                            <LazyLoadImage  src={close} alt="" />
                          </div>
                          <LazyLoadImage  src={product} alt="" className="product_img" />
                          <div className="d_flex">
                            <span className="sale">50%</span>
                            <span className="type">Premium</span>
                          </div>
                        </div>
                        <div className="item_bottom">
                          <div className="d_flex">
                            <p className="price">$ 25,00</p>
                            <p className="old">$ 5,00</p>
                          </div>
                          <p className="name">ROY JAMES SA - Chinosasdsad </p>
                          <p className="brand">Jack & Jones</p>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="items">
                        <div className="item_top">
                          <div className="close">
                            <LazyLoadImage  src={close} alt="" />
                          </div>
                          <LazyLoadImage  src={product} alt="" className="product_img" />
                          <div className="d_flex">
                            <span className="sale">50%</span>
                            <span className="type">Premium</span>
                          </div>
                        </div>
                        <div className="item_bottom">
                          <div className="d_flex">
                            <p className="price">$ 25,00</p>
                            <p className="old">$ 5,00</p>
                          </div>
                          <p className="name">ROY JAMES SA - Chinosasdsad </p>
                          <p className="brand">Jack & Jones</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wished;
