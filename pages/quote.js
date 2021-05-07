import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import DuelForm from "@/components/duelForms";

const Quote = () => {
  return (
    <>
      <BaseLayout>
        <BasePage>
          <DuelForm />
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Quote;
