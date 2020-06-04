import React from "react";
import img from "../../assets/images/tmp/c1.jpg";

function TableCart({product}) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <tr>
            <td>
              <div className="cart-single-block">
                <div className="csb-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </td>
            <td>
              <div className="csb-info">
                <div className="csb-link">A.Kjrbede</div>
                <div className="csb-subtitle">
                  WIVI - Sonnenbrille - gold-coloured/pink
                </div>
                <div className="csb-info-list">
                  <div className="csb-text">Farbe: gold</div>
                  <div className="csb-text">Grobe: One Size </div>
                </div>
                <div className="csb-bottom">
                  <a href="#" className="delete">
                    <i className="fa fa-trash-o" aria-hidden="true"></i> Удалить
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" aria-hidden="true"></i> В избранное
                  </a>
                </div>
              </div>
            </td>
            <td>
              <div className="cart-counts">
                <select name="" id="" className="sel">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
                <div className="csb-price">29,95 $</div>
              </div>
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
}

export default TableCart;
