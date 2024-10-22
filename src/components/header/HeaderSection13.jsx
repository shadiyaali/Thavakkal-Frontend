import React, { useContext } from "react";
import { FarzaaContext } from "../../context/FarzaaContext";
import { Link } from "react-router-dom";
import WishlistModal from "../modal/WishlistModal";
import CartModal from "../modal/CartModal";
import RightSideBar from "../sidebar/RightSideBar";
import SearchModal from "../modal/SearchModal";

const HeaderSection13 = () => {
  const {
    isHeaderFixed,
    handleWishlistShow,
    handleCartShow,
    cartItemAmount,
    wishlist,
    cartItems,
    handleQuantityChange,
    handleRemoveItem,
    handleRemoveItemWishlist,
    handleSidebarOpen,
    toggleOpenSearch,
  } = useContext(FarzaaContext);
  return (
    <header className="fz-header-section fz-1-header-section fz-12-header">
      <div
        className={`fz-8-bottom-header to-be-fixed ${
          isHeaderFixed ? "fixed" : ""
        }`}
      >
        <div className="row g-0 align-items-center">
          <div className="col-4 d-none d-lg-block">
            <div className="fz-banner-search-btn">
              <a
                role="button"
                className="fz-header-search-btn fz-2-search-btn"
                onClick={toggleOpenSearch}
              >
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-9">
            <div className="fz-logo-container">
              <Link to="/">
                <img
                  src="assets/images/logo-10.png"
                  alt="logo"
                  className="fz-logo"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-3">
            <div className="fz-header-right-content">
              <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                <li>
                  <Link
                    to="/account"
                    className="fz-header-user-btn d-none d-lg-block"
                  >
                    <i className="fa-regular fa-user"></i>
                  </Link>
                </li>
                <li>
                  <a
                    role="button"
                    className="fz-header-wishlist-btn d-none d-lg-block"
                    onClick={handleWishlistShow}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    className="fz-header-cart-btn d-none d-lg-block"
                    onClick={handleCartShow}
                  >
                    <i className="fa-regular fa-shopping-bag"></i>
                    <span className="count">{cartItemAmount}</span>
                  </a>
                </li>
                <li className="d-block d-lg-none">
                  <a
                    role="button"
                    className="fz-hamburger"
                    onClick={handleSidebarOpen}
                  >
                    <i className="fa-light fa-bars-sort"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WishlistModal
        wishlistArray={wishlist}
        removeItem={handleRemoveItemWishlist}
      />
      <CartModal
        cartArray={cartItems}
        remove={handleRemoveItem}
        quantity={handleQuantityChange}
      />
      <RightSideBar />
      <SearchModal />
    </header>
  );
};

export default HeaderSection13;
