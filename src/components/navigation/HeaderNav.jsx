import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = ({ position, downArrow }) => {
  return (
    <nav className="fz-header-nav">
      <ul className={`align-items-center ${position}`}>
        <li className="fz-dropdown fz-nav-item">
          <a role="button" className="fz-nav-link">
            <span>home</span>{" "}
            
          </a>

           
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a role="button" className="fz-nav-link">
            <span>Products</span>{" "}
             
          </a>

          
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a role="button" className="fz-nav-link">
            <span>Customized Products</span>{" "}
            
          </a>

          
        </li>
        
      </ul>
    </nav>
  );
};

export default HeaderNav;