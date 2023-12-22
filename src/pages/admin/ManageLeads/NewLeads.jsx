import React from "react";
import { PageHeader, PageWrapper } from "../../../components";

function NewLeads() {
  return (
    <PageWrapper>
      <PageHeader
        title={"Manage leads"}
        slugTitle1={"new leads"}
        slugTitle2={"new leads list"}
        buttonClassName={"hidden"}
      />

      <section>
        <button>Active Leads</button>
        <button>Inactive Leads</button>
      </section>
    </PageWrapper>
  );
}

export default NewLeads;
