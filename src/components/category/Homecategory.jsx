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
    title: "diamonds",
    link: "#",
  },
  {
    img: svgNeckles,
    title: "necklaces",
    link: "#",
  },
  {
    img: svgWatch,
    title: "watches",
    link: "#",
  },
  {
    img: svgPearsing,
    title: "piercings",
    link: "#",
  },
  {
    img: svgTiara,
    title: "tiara",
    link: "#",
  },
  {
    img: svgEarings,
    title: "earrings",
    link: "#",
  },
  {
    img: svgLongEarings,
    title: " earrings",
    link: "#",
  },
];

const MasterCategory = ({ img, title, link }) => {
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
            <Row className="justify-content-center g-4"> {/* Center content and add gap */}
              {Data.map((data, i) => {
                return (
                  <Col key={i} xs="6" sm="6" md="4" lg="3" className="d-flex justify-content-center">
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
