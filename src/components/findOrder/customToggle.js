import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import right from "../../assets/images/right.png";
import white from "../../assets/images/order/white-arrow.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          ? "my_accordion_btn_cont bg_dark"
          : "my_accordion_btn_cont"
      }
    >
      <div
        className={
          isCurrentEventKey && accordionIsExpanded ? "left border-none" : "left"
        }
      >
        {children}
        <LazyLoadImage 
          src={isCurrentEventKey && accordionIsExpanded ? white : right}
          alt=""
          className={
            isCurrentEventKey && accordionIsExpanded
              ? "down_icon_btn icon_rotated"
              : "down_icon_btn icon_rotated"
          }
        />
      </div>
    </div>
  );
}

export default CustomToggle;
