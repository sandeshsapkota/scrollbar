import React from "react";
import ReactScrollbar from "react-scrollbar";

function Sidebar() {
  return (
    <div className="sidebar">
        <ReactScrollbar
            speed={0.8}
            className="area"
            contentClassName="list"
            horizontal={false}
        >
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            first item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            second item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            third item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            fourth item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            fifeth item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            second item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            third item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            second item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            third item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            fourth item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            third item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            fourth item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            fifeth item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            second item
          </a>
          <a href="https://www.lonelyplanet.com" className="sidebar-item">
            third item
          </a>
        </ReactScrollbar>
    </div>
  );
}

export default Sidebar;