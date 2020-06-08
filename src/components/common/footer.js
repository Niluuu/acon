import React from "react";
import FooterCollapse from "./footerCollapse";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="d-md-none d-block">
        <FooterCollapse />
        <p className="footer-text">
          Официальный сайт MOD. ‘MOD’ и логотип ‘MOD’ являются торговыми марками
          Farfetch UK Limited и зарегистрированы в многочисленных юрисдикционных
          системах по всему миру. © Copyright 2020 MOD UK Limited. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
