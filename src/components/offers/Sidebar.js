import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = ({ offerings, sidebarClass, titleClass, listItemClass }) => {
  return (
    <div className={sidebarClass}>
      <h5 className={titleClass}>Offerings</h5>
      <ListGroup variant="flush">
        {offerings.map((item, index) => (
          <ListGroup.Item key={index} className={listItemClass}>
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
