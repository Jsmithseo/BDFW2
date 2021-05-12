import React from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";

const DuelForm = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "19901556",
    formId: "b551232b-e779-4ffe-9e4a-306277f5f29b",
    target: "#my-hubspot-form",
  });
  return (
    <div>
      <Row>
        <Col>
        <h1 className="free">Schedule a FREE Demo</h1>
      <p>Fill-out the form below to schedule your free demo. You must have a minimum of 5 vehicles to qualify. A free quote will be provided at time of demo.</p>
      <div id="my-hubspot-form"></div>
        </Col>
        <Col>
       <p className="week"> We Provide Services 7 Days a Week!</p> 
       <p>Office Hours:
Mon – Fri 8:00 am to 4:00 pm</p>
        </Col>

      </Row>

    </div>
  );
};
export default DuelForm;
