import React from "react";
import CatalogSlider from "./catalogSlider";
import NameWithLink from "../index/nameWithLink";
import img from "../../assets/images/tmp/p1.jpg";
import WishedSlider from "./wishedSlider";
import SimpleProduct from "../common/simpleProduct";
import Sale from "./sale";
import Product from "../common/product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeaderBottom from "./headerBottom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Content extends React.Component {
  render() {
    return (
      <div className="content index_page">
        <HeaderBottom />
        <Tabs defaultActiveKey="женщинам" id="controlled-tab-example">
          <Tab eventKey="женщинам" title="женщинам">
            <div className="container">
              <div className="catalog-container">
                <h3>Каталог</h3>
                <CatalogSlider />
              </div>
              <div className="block-container mb-35px">
                <NameWithLink name={"Пуховики и зимние куртки"} link={"#"} />
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <div className="block-container">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
              <div className="block-container mb-35px">
                <h3>Еще больше товаров!</h3>
                <h5>Самые низкие цены на товар</h5>
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <WishedSlider />
              <div className="block-container mb-50px">
                <h3 className="mb-25px">Bleib auf dem Laufen</h3>
                <div className="row">
                  <SimpleProduct product={this.props.data[1]} />
                </div>
              </div>
              <Sale />
              <div className="block-container mb-65px">
                <NameWithLink name={"Платья"} link={"#"} />
                <div className="row">
                  <Product product={this.props.data[2]} />
                </div>
              </div>
              <div className="block-container mb-65px">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
            </div>
          </Tab>
          <Tab eventKey="МУЖЧИНАМ" title="МУЖЧИНАМ">
            <div className="container">
              <div className="catalog-container">
                <h3 className="mb-35px">Каталог</h3>
                <CatalogSlider />
              </div>
              <div className="block-container mb-35px">
                <NameWithLink name={"Пуховики и зимние куртки"} link={"#"} />
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <div className="block-container">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
              <div className="block-container mb-35px">
                <h3>Еще больше товаров!</h3>
                <h5>Самые низкие цены на товар</h5>
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <WishedSlider />
              <div className="block-container mb-50px">
                <h3 className="mb-25px">Bleib auf dem Laufen</h3>
                <div className="row">
                  <SimpleProduct product={this.props.data[1]} />
                </div>
              </div>
              <Sale />
              <div className="block-container mb-65px">
                <NameWithLink name={"Платья"} link={"#"} />
                <div className="row">
                  <Product product={this.props.data[2]} />
                </div>
              </div>
              <div className="block-container mb-65px">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
            </div>
          </Tab>
          <Tab eventKey="ДЕТЯМ" title="ДЕТЯМ">
            <div className="container">
              <div className="catalog-container">
                <h3 className="mb-35px">Каталог</h3>
                <CatalogSlider />
              </div>
              <div className="block-container mb-35px">
                <NameWithLink name={"Пуховики и зимние куртки"} link={"#"} />
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <div className="block-container">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
              <div className="block-container mb-35px">
                <h3>Еще больше товаров!</h3>
                <h5>Самые низкие цены на товар</h5>
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <WishedSlider />
              <div className="block-container mb-50px">
                <h3 className="mb-25px">Bleib auf dem Laufen</h3>
                <div className="row">
                  <SimpleProduct product={this.props.data[1]} />
                </div>
              </div>
              <Sale />
              <div className="block-container mb-65px">
                <NameWithLink name={"Платья"} link={"#"} />
                <div className="row">
                  <Product product={this.props.data[2]} />
                </div>
              </div>
              <div className="block-container mb-65px">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
            </div>
          </Tab>
          <Tab eventKey="БРЕНДЫ" title="БРЕНДЫ">
            <div className="container">
              <div className="catalog-container">
                <h3 className="mb-35px">Каталог</h3>
                <CatalogSlider />
              </div>
              <div className="block-container mb-35px">
                <NameWithLink name={"Пуховики и зимние куртки"} link={"#"} />
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <div className="block-container">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
              <div className="block-container mb-35px">
                <h3>Еще больше товаров!</h3>
                <h5>Самые низкие цены на товар</h5>
                <Link to="/category" className="big-image">
                  <LazyLoadImage src={img} className="img-fluid" />
                </Link>
              </div>
              <WishedSlider />
              <div className="block-container mb-50px">
                <h3 className="mb-25px">Bleib auf dem Laufen</h3>
                <div className="row">
                  <SimpleProduct product={this.props.data[1]} />
                </div>
              </div>
              <Sale />
              <div className="block-container mb-65px">
                <NameWithLink name={"Платья"} link={"#"} />
                <div className="row">
                  <Product product={this.props.data[2]} />
                </div>
              </div>
              <div className="block-container mb-65px">
                <NameWithLink name={"Сникерсы"} link={"#"} />
                <WishedSlider />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Content);
