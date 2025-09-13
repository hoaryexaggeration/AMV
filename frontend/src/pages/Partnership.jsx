import React from "react";
import PartnershipIntro from "../components/PartnershipIntro";
import CommissionModel from "../components/CommissionModel";
import PartnerSteps from "../components/PartnerSteps";

export default function Partnership() {
  return (
    <main className="container mx-auto px-6 space-y-16">
      <PartnershipIntro />
      <CommissionModel />
      <PartnerSteps />
    </main>
  );
}
