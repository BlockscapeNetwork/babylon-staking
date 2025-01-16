"use client";

import { initBTCCurve } from "@babylonlabs-io/btc-staking-ts";
import { useEffect, useState } from "react";

import { StakingForm } from "@/app/components/Staking/StakingForm";
import FooterBlockscape from "@/blockscape/Footer";
import { Header } from "@/blockscape/Header";

import { Banner } from "./components/Banner/Banner";
import { Container } from "./components/Container/Container";
import { Activity } from "./components/Delegations/Activity";
import { FAQ } from "./components/FAQ/FAQ";
import { PersonalBalance } from "./components/PersonalBalance/PersonalBalance";

const Home = () => {
  useEffect(() => {
    initBTCCurve();
  }, []);

  const [showPhase2HereModal, setShowPhase2HereModal] = useState(true);

  return (
    <>
      <Banner />
      <Header />

      <Container as="main" className="mt-6 flex flex-col gap-8 md:gap-12">
        <StakingForm />
        <PersonalBalance />

        {/* <Stats /> */}
        <Activity />
        <FAQ />
        <br />
      </Container>

      <FooterBlockscape />
      {/* <Phase2HereModal
        open={showPhase2HereModal}
        onClose={() => setShowPhase2HereModal(false)}
      /> */}
    </>
  );
};

export default Home;
