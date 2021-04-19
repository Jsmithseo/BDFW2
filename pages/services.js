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
                  <p>
                  </p>
                </Col>
              </Row>
              <Row className="teamRow">
                <Col className="textCol" sm="12" md="6" lg="6">
                  <h3>Family Needs Team</h3>
                  <p>
                    The Family Needs Team is dedicated to assisting families in
                    need and can assist with transportation, food and clothing
                    and referrals to other teams as needed. They help families
                    apply to various programs, including daycare services for
                    working parents, Medi-Cal and other health coverage programs
                    as well as other community agencies. The team also provides
                    families with infant supplies (formula, diapers, etc.),
                    medication pick-up, and transportation to medical
                    appointments. The team also supports the special needs of
                    young families with infants, toddlers and expecting parents.
                    Team members help pregnant women register for prenatal care,
                    make home visits to provide health and nutrition education
                    and emotional support. The team promotes family engagement,
                    volunteer and community involvement, and faith and
                    community-based initiatives.
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
                  <h3>Educational Support Team</h3>
                  <p>
                    We have two Educational Support Teams, one supporting K-8
                    students and the other dedicated to assisting high school
                    students. The teams engage with the local school
                    districts—Sausalito Marin City School District (SMCSD) and
                    Tamalpais Unified School District (TUSD)—and advance their
                    academic missions. Teachers and staff may also perform
                    outreach teaching by extending the classroom beyond the
                    campus to engage their students through service learning.
                    The teams also assist with Wi-Fi connection, access to
                    technology and students’ individual needs to ensure that
                    every child has an equal opportunity to learn.
                  </p>
                </Col>
              </Row>

              <Row className="teamRow">
                <Col className="textCol" md="6">
                  <h3>Mental Health and Wellness Team</h3>
                  <p>
                    The Mental Health and Wellness Team is made up of licensed
                    professionals. Team member help equip individuals with
                    mindfulness strategies by providing reading materials,
                    virtual lead meditation, and one-on-one mental health
                    counseling. The team coordinates tasks designated to ensure
                    care coordination, treatment and follow-up care for
                    individuals dealing with mental health issues. Upon initial
                    contact with an individual, the team leader refers them to
                    an appropriate team member or the community mental health
                    agency for further assistance. Hotlines for mental health
                    resources and interventions are also available.
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
                    src="https://images.squarespace-cdn.com/content/v1/5ebaf8af593d7e00d9fda34c/1607420641235-NR2W92E2E13OWIWLIB2N/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/pexels-matthias-zomer-339620.jpg?format=500w"
                    alt=""
                  />
                </Col>
                <Col className="textCol" md="6">
                  <h3>Senior and Disability Support Team</h3>
                  <p>
                    The Senior and Disability Support Team provides access to
                    daily meals, medication pick-ups and transportation to
                    medical appointments. Team members arrange daily check-ins
                    with individuals (especially those who live alone) and
                    perform outreach activities to identify individuals in need
                    of services. The team has assembled vast resources and
                    established connections with various agencies and can help
                    seniors and disabled individuals get the services or
                    personal assistance they need.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="last_call">
            <Row>
              <Col sm="12" md="9">
                <h3>Let us take care of you!</h3>
                <p>
                  The Crisis Care Team is a collaboration between public and
                  private sectors to integrate services for people experiencing
                  homelessness, mental illness, substance abuse disorders and
                  domestic violence. Team members are available 24 hours a day.
                </p>
                <Button color="primary" size="lg">
                  Get Help Now
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
