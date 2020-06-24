import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import right from "../../assets/images/right.png";
import { LazyLoadImage } from "react-lazy-load-image-component";


function FooterCustomToggle({ children, eventKey }) {
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
      <LazyLoadImage 
        src={right}
        alt=""
        className={
          isCurrentEventKey && accordionIsExpanded
            ? "down_icon_btn  icon_rotated"
            : "down_icon_btn"
        }
      />
    </div>
  );
}

export default FooterCustomToggle;
