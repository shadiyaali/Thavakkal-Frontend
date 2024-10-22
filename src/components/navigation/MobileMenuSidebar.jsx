import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenuSidebar = () => {
  const [activeNav, setActiveNav] = useState("");
  const toggleNav = (nav) => {
    setActiveNav((prevNav) => {
      if (prevNav === nav) {
        return "";
      }
      return nav;
    });
  };
  return (
    <>
      <ul className="align-items-center fz-4-menu">
        <li className="fz-dropdown fz-nav-item">
          <a
            role="button"
            className="fz-nav-link"
            onClick={() => toggleNav("home")}
          >
            <span>home</span>
            <i className="fa-solid fa-angle-down"></i>
          </a>

          <ul
            className={`fz-submenu ${
              activeNav === "home" ? "d-block" : "d-none"
            }`}
          >
            <li>
              <Link to="/" className="fz-nav-link fz-submenu-nav-link">
                Door Shop
              </Link>
            </li>
            <li>
              <Link
                to="/jewellery-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Jewellery Shop
              </Link>
            </li>
            <li>
              <Link to="/cake-shop" className="fz-nav-link fz-submenu-nav-link">
                Cake Shop
              </Link>
            </li>
            <li>
              <Link
                to="/electric-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Electric Shop
              </Link>
            </li>
            <li>
              <Link
                to="/sunglass-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Sunglass Shop
              </Link>
            </li>
            <li>
              <Link
                to="/car-part-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Car Parts Shop
              </Link>
            </li>
            <li>
              <Link
                to="/watch-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Watch Shop
              </Link>
            </li>
            <li>
              <Link
                to="/cycle-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Cycle Shop
              </Link>
            </li>
            <li>
              <Link
                to="/kids-cloth-shop"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Kid's Cloth Shop
              </Link>
            </li>
            <li>
              <Link to="/bag-shop" className="fz-nav-link fz-submenu-nav-link">
                Bag Shop 01
              </Link>
            </li>
            <li>
              <Link to="/cctv-shop" className="fz-nav-link fz-submenu-nav-link">
                CCTV Shop
              </Link>
            </li>
            <li>
              <Link
                to="/bag-shop-2"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Bag Shop 02
              </Link>
            </li>
          </ul>
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a
            role="button"
            className="fz-nav-link"
            onClick={() => toggleNav("shop")}
          >
            <span>shop</span> <i className="fa-solid fa-angle-down"></i>
          </a>

          <ul
            className={`fz-submenu ${
              activeNav === "shop" ? "d-block" : "d-none"
            }`}
          >
            <li>
              <Link to="/shop" className="fz-nav-link fz-submenu-nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/shop-2" className="fz-nav-link fz-submenu-nav-link">
                Shop 02
              </Link>
            </li>
            <li>
              <Link
                to="/shopDetails"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Shop details
              </Link>
            </li>
          </ul>
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a
            role="button"
            className="fz-nav-link"
            onClick={() => toggleNav("pages")}
          >
            <span>pages</span> <i className="fa-solid fa-angle-down"></i>
          </a>

          <ul
            className={`fz-submenu ${
              activeNav === "pages" ? "d-block" : "d-none"
            }`}
          >
            <li>
              <Link to="/about" className="fz-nav-link fz-submenu-nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="fz-nav-link fz-submenu-nav-link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="fz-nav-link fz-submenu-nav-link">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="fz-nav-link fz-submenu-nav-link">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/account" className="fz-nav-link fz-submenu-nav-link">
                Account
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="fz-nav-link fz-submenu-nav-link">
                Checkout
              </Link>
            </li>
          </ul>
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a
            role="button"
            className="fz-nav-link"
            onClick={() => toggleNav("blog")}
          >
            blog <i className="fa-solid fa-angle-down"></i>
          </a>

          <ul
            className={`fz-submenu ${
              activeNav === "blog" ? "d-block" : "d-none"
            }`}
          >
            <li>
              <Link to="/blog" className="fz-nav-link fz-submenu-nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/blogDetails"
                className="fz-nav-link fz-submenu-nav-link"
              >
                Blog-details
              </Link>
            </li>
          </ul>
        </li>
        <li className="fz-nav-item">
          <Link to="/contact" className="fz-nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenuSidebar;
