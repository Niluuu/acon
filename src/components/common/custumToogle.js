import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import down from "../../assets/images/down.png";

function CustomToggle({ children, eventKey }) {
  const currentEventKey = useContext(AccordionContext);
  const accordionIsExpanded = currentEventKey > 0;
  const decoratedOnClick = useAccordionToggle(eventKey, () => eventKey);
  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <div
      onClick={decoratedOnClick}
      className={
        isCurrentEventKey && accordionIsExpanded
          ? "my_accordion_btn_cont border-none"
          : "my_accordion_btn_cont"
      }
    >
      {children}
      <img
        src={down}
        alt=""
        className={
          isCurrentEventKey && accordionIsExpanded
            ? "down_icon_btn"
            : "down_icon_btn icon_rotated"
        }
      />
    </div>
  );
}

export default CustomToggle;
