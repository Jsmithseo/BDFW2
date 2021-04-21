import React from "react";
import { useGetUser } from "@/actions/user";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import HubspotForm from 'react-hubspot-form'



import {
  Row,
  Col,
  Container,
} from "reactstrap";


const Contact = () => {
  const { data, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <Container>
            <Row>
              <Col md="6">
              <h4>We Provide Services 7 Days a Week!
Office Hours:
Mon – Fri 8:00 am to 4:00 pm</h4>
<p>1-855-60BLACK - Main Line</p>
<p>(510) 344-2549 - Direct Line</p>

              </Col>

              <Col md="6">
                <HubspotForm
   portalId='19901556'
   formId='e36a688-b3e4-4d69-a8e7-939f4b9e13e8'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />
              </Col>
            </Row>
          </Container>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Contact;
