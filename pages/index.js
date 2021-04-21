import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col, Button } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";
import { SocialIcon } from 'react-social-icons';

const ROLES = [
  "Exterior Washing",
  "Interior Wipe Down",
  "Interior Vaccum",
  "Tar Removal"
];

const Index = () => {
  const { data, error, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading} className="cover">
      <div className="main-section">
        <Container>
          <Row>
            {/* <Col
              md="5"
              className="hero-welcome-wrapper d-flex justify-content-end"
            >
              <img
                className="mx-5 justify-content-end"
                src="/images/device2.png"
              />
            </Col> */}
            <Col
              md="7"
              className="hero-welcome-wrapper d-flex align-items-center justify-content-start"
            >
              <div className="hero-welcome-main">
                <div className="hero-welcome-text">
                  <h2 className="display-4 text-white">
                    Black Diamond Fleet Washing
                  </h2>
                  <p className="lead text-white font-weight-light">
                    {" "}
                    <span>
                     <br></br> <Typed
                        loop
                        strings={ROLES}
                        typeSpeed={50}
                        backSpeed={80}
                        backDelay={3000}
                        loopCout={0}
                        showCursor
                        className="self-typed"
                        cursorChar="|"
                      ></Typed>{" "}
                      {" "}
                    </span>
                    <br></br>
                  </p>
                </div>
                <a href="/quote">
                <Button color="primary" size="lg">
                Schedule a Demo
                </Button></a>{" "}
                <div className="hero-welcome-bio">
                  <p className="mb-2 text-white">
                  </p>
                  <div className="socialIcons">
                    <p className="followustext">Follow Us</p>
        <SocialIcon url="https://www.facebook.com/Marin-County-Cooperation-Teams-110632247349694/" network="facebook" bgColor="#438DCD" />
        <SocialIcon url="https://instagram.com/marincountycooperationteam?igshid=1aqmiwepeowdr" network="instagram" bgColor="#438DCD" />


        </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
 
      </div>
    </BaseLayout>
  );
};

export default Index;
