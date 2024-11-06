import React, { useContext } from 'react'
 
import { FarzaaContext } from '../../context/FarzaaContext'
import { Link } from 'react-router-dom'
import img from '../../../public/assets/images/img.jpg'

const BannerSection2 = () => {
    const {handleVideoShow} = useContext(FarzaaContext)
  return (
    <section className="fz-2-banner-section">
        <div className="container position-relative">
            
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="fz-banner-txt">
                        <h1 className="fz-2-heading">Creative Jewelry Collection</h1>
                        <div className="fz-def_btn_wrapper">
                       
                            <Link to="/shop" className="fz-def-btn">
                                <span></span>
                               View Our Collections
                                <i className="fa-light fa-arrow-up-right ml-10"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="fz-banner-vid">
                        <img src={img} alt="background image" className="fz-banner-vid-img"/>
                        
                    

                        <div className="fz-banner-rounded-sticker">
                            <img className="fz-rotateText" src="assets/images/curved-txt.png" alt="rotate-text image"/>
                            <img className="fz-diamond-icon" src="assets/images/diamond.png" alt="diamond image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fz-cbsearchbar fz-cb-sidebar-area">
                <button className="fz-cbsearchbar__close"><i className="fa-light fa-xmark"></i></button>
                <div className="search-wrap text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 pt-100 pb-100">
                                <h2 className="fz-cbsearchbar__title">What Product Are You Looking For?</h2>
                                <div className="fz-cbsearchbar__form">
                                    <form action="#">
                                        <input type="search" name="s" placeholder="Search Product"/>
                                        <button className="fz-cbsearchbar__search-btn" type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fz-overlay"></div>
        </div>
 
    </section>
  )
}

export default BannerSection2