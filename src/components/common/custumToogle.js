import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

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
      <span class="icon-arrow">
        <span
          className={
            isCurrentEventKey && accordionIsExpanded
              ? "arrow_left "
              : "arrow_left rotated_left"
          }
        ></span>
        <span
          className={
            isCurrentEventKey && accordionIsExpanded
              ? "arrow_right "
              : "arrow_right rotated_right"
          }
        ></span>
      </span>
    </div>
  );
}

export default CustomToggle;
