import React, { useContext } from "react";
import { FarzaaContext } from "../../context/FarzaaContext";

const MobileMenuSection = ({ navigate }) => {
  const { isDropdownOpen, handleDropdownToggle } = useContext(FarzaaContext);
  return (
    <div className="mean-bar">
      <a href="#nav" className="meanmenu-reveal">
        <span>
          <span>
            <span></span>
          </span>
        </span>
      </a>
      <nav className="mobile-mean-nav">
        <div className="mobile-menu-list-items">
          <div className="fz-dropdown fz-nav-item">
            <a role="button" className="fz-nav-link">
              <span>Home</span>
               
            </a>
 
          </div>
           
          <div className="fz-dropdown fz-nav-item">
            <a role="button" className="fz-nav-link">
              <span>Products</span>
         
            </a>

            
               
          </div>
          <div className="fz-dropdown fz-nav-item">
            <a role="button" className="fz-nav-link">
              <span>Customized Products</span>
        
            </a>

            
          </div>
          <div className="fz-nav-item mean-last">
            <a
              role="button"
              onClick={() => navigate("/contact")}
              className="fz-nav-link"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuSection;
