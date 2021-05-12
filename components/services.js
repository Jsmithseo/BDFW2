import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Services = () => {
  return (
    <>
      <Row className="servicesRow">
        <Col xs="6" sm="3">
          <Card>
            <CardImg
              top
              width="100%"
              src="/images/spray1.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Exterior Washing</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="3">
          <Card>
            <CardImg
              top
              width="100%"
              src="/images/interior1.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Interior Vaccum</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardImg
              top
              width="100%"
              src="/images/wipe.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Interior Wipe Down</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
            <CardImg
              top
              width="100%"
              src="/images/tar.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Tar Removal</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Services;
