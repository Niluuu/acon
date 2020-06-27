import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import address from "../../assets/images/profile/heart.png";
import close from "../../assets/images/profile/close.png";
import product from "../../assets/images/profile/product.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { connect } from "react-redux";
import { getWished } from "../../redux/wishPage/getWished/action";
import { toggleWished } from "../../redux/wishPage/addWished/action";

class Wished extends React.Component {
  state = {
    state: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.dispatch(getWished());
  }

  remove(id) {
    this.props.dispatch(toggleWished(id));
    this.props.dispatch(getWished());
  }

  render() {
    const { data } = this.props;

    return (
      <div className="orders_page wished">
        <div className="profile_child">
          <Link to="/profile">
            <LazyLoadImage src={back} alt="" className="back_to" />
          </Link>
          <p className="title">ИЗБРАННОЕ</p>
        </div>
        <div className="content">
          {data && data.data === undefined && (
            <div className="empty_row">
              <LazyLoadImage src={address} alt="" />
              <p className="title">Здесь пока пусто</p>
              <p className="under_title">
                Вы пока ничего не добавили в избранное{" "}
              </p>
              <button className="light_button">
                <Link to="/category"> ПЕРЕЙТИ В КАТАЛОГ</Link>
              </button>
            </div>
          )}

          {data.data && (
            <div className="product">
              <Container>
                {data.data.map((p) => {
                  return (
                    <Row>
                      <Col>
                        <div className="items">
                          <div className="item_top">
                            <div
                              className="close"
                              onClick={() => this.remove(p.id)}
                            >
                              <LazyLoadImage src={close} alt="" />
                            </div>
                            <LazyLoadImage
                              src={p.image}
                              alt=""
                              className="product_img"
                            />
                            <div className="d_flex">
                              <span className="sale">50%</span>
                              <span className="type">Premium</span>
                            </div>
                          </div>
                          <div className="item_bottom">
                            <div className="d_flex">
                              <p className="price">$ {p.price}</p>
                              {p.old_price > 1 && (
                                <p className="old">$ {p.old_price}</p>
                              )}
                            </div>
                            <p className="name">{p.name} </p>
                            <p className="brand">{p.brand}</p>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="items">
                          <div className="item_top">
                            <div
                              className="close"
                              onClick={() => this.remove(p.id)}
                            >
                              <LazyLoadImage src={close} alt="" />
                            </div>
                            <LazyLoadImage
                              src={p.image}
                              alt=""
                              className="product_img"
                            />
                            <div className="d_flex">
                              <span className="sale">50%</span>
                              <span className="type">Premium</span>
                            </div>
                          </div>
                          <div className="item_bottom">
                            <div className="d_flex">
                              <p className="price">$ {p.price}</p>
                              {p.old_price > 1 && (
                                <p className="old">$ {p.old_price}</p>
                              )}{" "}
                            </div>
                            <p className="name">{p.name} </p>
                            <p className="brand">{p.brand}</p>
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
}

const mapStateToProps = (state) => {
  return state.wishedReducer;
};

export default connect(mapStateToProps)(Wished);
