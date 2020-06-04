import React from "react";
import img from "../../assets/images/tmp/c1.jpg";

function TableCart({product}) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <tr>
            <td>
              <div class="cart-single-block">
                <div class="csb-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </td>
            <td>
              <div class="csb-info">
                <div class="csb-link">A.Kjrbede</div>
                <div class="csb-subtitle">
                  WIVI - Sonnenbrille - gold-coloured/pink
                </div>
                <div class="csb-info-list">
                  <div class="csb-text">Farbe: gold</div>
                  <div class="csb-text">Grobe: One Size </div>
                </div>
                <div class="csb-bottom">
                  <a href="#" class="delete">
                    <i class="fa fa-trash-o" aria-hidden="true"></i> Удалить
                  </a>
                  <a href="#">
                    <i class="fa fa-heart-o" aria-hidden="true"></i> В избранное
                  </a>
                </div>
              </div>
            </td>
            <td>
              <div class="cart-counts">
                <select name="" id="" class="sel">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
                <div class="csb-price">29,95 $</div>
              </div>
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
}

export default TableCart;
