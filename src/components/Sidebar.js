import React from "react";
import CustomScroll from "react-custom-scroll";

function Sidebar() {
  return (
    <div className="sidebar">
      <CustomScroll  heightRelativeToParent="calc(100% - 20px)">
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
      </CustomScroll>
    </div>
  );
}

export default Sidebar;
