import React from "react";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Container, Row, Col, Button } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";
import { SocialIcon } from "react-social-icons";

const ROLES = [
  "Exterior Washing",
  "Interior Wipe Down",
  "Interior Vaccum",
  "Tar Removal",
];

const Index = () => {
  return (
    <BaseLayout>
    <BasePage>
    </BasePage>
  </BaseLayout>
   
  );
};

export default Index;
