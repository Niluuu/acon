import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuLinks from "./menuLinks";

export default class Sidebar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <MenuLinks/>
      </Menu>
    );
  }
}
