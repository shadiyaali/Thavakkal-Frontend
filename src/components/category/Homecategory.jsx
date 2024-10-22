import React, { Fragment } from "react";
import {
  svgDiamond,
  svgEarings,
  svgLongEarings,
  svgNeckles,
  svgPearsing,
  svgRings,
  svgTiara,
  svgWatch,
} from "../services/script";
import './Category.css';
import { Container, Row, Col } from "reactstrap";

const Data = [
  {
    img: svgRings,
    title: "rings",
  
    link: "#",
  },
  {
    img: svgDiamond,
    title: "diamons",
 
    link: "#",
  },
  {
    img: svgNeckles,
    title: "neckles",
 
    link: "#",
  },
  {
    img: svgWatch,
    title: "watches",
 
    link: "#",
  },
  {
    img: svgPearsing,
    title: "pearsing",
 
    link: "#",
  },
  {
    img: svgTiara,
    title: "tiara",
  
    link: "#",
  },
  {
    img: svgEarings,
    title: "earings",
 
    link: "#",
  },
  {
    img: svgLongEarings,
    title: "long earings",
    
    link: "#",
  },
];

const MasterCategory = ({ img, title, desc, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image svg-image">
          <div dangerouslySetInnerHTML={{ __html: img }}></div>
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
        <h6>{desc}</h6>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <section className="bg-gry-1 p-top-20">
      <Fragment>
        <Container>
          <section className="section-b-space border-section border-top-0">
          <Row className="custom-row-gap">

              {Data.map((data, i) => {
                return (
                  <Col key={i} xs="6" md="4" lg="3">
                    <MasterCategory
                      img={data.img}
                      link={data.link}
                      title={data.title}
                     
                    />
                  </Col>
                );
              })}
            </Row>
          </section>
        </Container>
      </Fragment>
    </section>
  );
};

export default Category;
