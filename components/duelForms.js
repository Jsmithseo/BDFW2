import React from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const DuelForm = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "19901556",
    formId: "b551232b-e779-4ffe-9e4a-306277f5f29b",
    target: "#my-hubspot-form",
  });
  return (
    <div>
      <h1>Get A QUOTE</h1>
      <div id="my-hubspot-form"></div>
    </div>
  );
};
export default DuelForm;
