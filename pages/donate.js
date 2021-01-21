import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";

const Donate = () => {
  const { data, error, loading } = useGetUser();

  return (
    <>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>This is the Donate page</h1>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Donate;
