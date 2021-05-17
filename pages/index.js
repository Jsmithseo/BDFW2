import React from "react";
import Services from "@/components/services";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import Typed from "react-typed";
import { SocialIcon } from "react-social-icons";
import DuelForm from "@/components/duelForms";

const ROLES = [
  "Exterior Washing",
  "Interior Wipe Down",
  "Interior Vaccum",
  "Tar Removal",
];

const Index = () => {
  return (
    <BaseLayout>
      <Jumbotron>
        <h2 className="lead">
          Wash, Maintenance & Disinfection
        </h2>
        <hr className="my-2" />
        <p className="Tagline">
          Our Bay Area company has helped many fleet managers keep their drivers
          happy and achieve top-notch fleet washing results. Just imagine what
          our proven services can do for your fleet.
        </p>
        <p className="serving">Serving Bay Area 7 Days a Week</p>
        <p className="lead">
          <Button color="primary">Schedule a Demo</Button>
        </p>
      </Jumbotron>
      <BasePage>
        <Row>
          <Col>
            <h3>What Our Customers Say?</h3>
            <p className = "review">
              "Black Diamond has been very efficient and thorough when taking
              care of our fleet of 45 company vans. They worked around our
              schedule whether it was early morning our late evening. They even
              traveled to my location to wash/detail my personal car. I learned
              of them through a referral and the information was accurate to a
              T. I would recommend this wash/detail to anyone looking for a
              complete efficient job for your buck."
            </p>
          </Col>
        </Row>
        <Services />
        <DuelForm />

      </BasePage>
    </BaseLayout>
  );
};

export default Index;
