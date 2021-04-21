import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";

const Services = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <section className="teams">
            <Container>
              <Row className="teamRow">
                <Col className="imgCol" md="6">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1607423988907-K7EX43PG4VIAOF0BBQHL/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/pexels-linkedin-sales-navigator-1251861.jpg?format=500w"
                    alt=""
                  />
                </Col>
                <Col className="textCol" md="6">
                  <h3>Exterior Washing</h3>
                  <br>
                  </br>

                  <p>
                   BLACK DIAMOND is the country's 
                    driving accomplice for portable armada cleaning COAST TO COAST! 
                    We have the administrations you need NOW—for one truck, or your whole armada. 
                    We'll get your trucks clean...at your area and on YOUR timetable.
                  </p>
                </Col>
              </Row>
              <Row className="teamRow">
                <Col className="textCol" sm="12" md="6" lg="6">
                  <h3>Interior Vaccum</h3>
                  <br>
                  </br>
                  <p>
                    Vacuum carpet and seats, clean or eliminate any difficult stains, 
                    Shampoo Carpet and Seat.
                  </p>
                </Col>
                <Col className="imgCol" xs="12" sm="12" md="6" lg="6">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1589319766383-G9CQR0CPG73YQPRHA6CW/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/image-asset.jpeg?format=500w"
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="teamRow">
                <Col className="imgCol" md="6">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1607423909811-00E2ITCCE064V4DAP7Y6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/pexels-pragyan-bezbaruah-1720186.jpg?format=500w"
                    alt=""
                  />
                </Col>
                <Col className="textCol" md="6">
                  <h3>Tar Removal</h3>
                  <br>
                  </br>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Col>
              </Row>

              <Row className="teamRow">
                <Col className="textCol" md="6">
                  <h3>Interior Wipe Down</h3>
                  <br>
                  </br>
                  <p>
                   Wipe down/dust inside including the driver position, 
                    clean windows inside and finish with deodorizer (new vehicle fragrance or other)
                  </p>
                </Col>
                <Col className="imgCol" md="6">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1607423596618-3OGCOTTI4EG74ROO7JMN/ke17ZwdGBToddI8pDm48kApm4bZ6Mn3TiUWou3kA3bp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZaykogqWzieOupsqeSuBYug-y5Ut2InYZT1FrJD3yL-rj95DA1mjJIBxXFGHkuyQ/pexels-nappy-935985.jpg?format=500w"
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="teamRow">
                <Col className="imgCol" md="6">
                  <img
                    alt=""
                  />
                </Col>
                
              </Row>
            </Container>
          </section>
          <section className="last_call">
            <Row>
              <Col sm="12" md="9">
                <h3>Let us take care of you!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit
                </p>
                <Button color="primary" size="lg">
                  Book Now
                </Button>
              </Col>
            </Row>
          </section>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Services;
