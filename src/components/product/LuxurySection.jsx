import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import NewTabContent from "./NewTabContent";
import BestSellerTabContent from "./BestSellerTabContent";

const LuxurySection = () => {
  const [activeTab, setActiveTab] = useState("best-seller");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="fz-luxury-section bg-gry-1 ptop-50">
      <div className="container">
        <div className="fz-2-section-heading">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-md-12 tex-center">
              <h2 className="fz-section-title">Our Products</h2>
            </div>
           
          </div>
        </div>

        <BestSellerTabContent />
      </div>
    </section>
  );
};

export default LuxurySection;
