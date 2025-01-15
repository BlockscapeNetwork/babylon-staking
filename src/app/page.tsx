"use client";

import { initBTCCurve } from "@babylonlabs-io/btc-staking-ts";
import { useEffect, useState } from "react";

import { StakingForm } from "@/app/components/Staking/StakingForm";
import FooterBlockscape from "@/blockscape/Footer";

import { Banner } from "./components/Banner/Banner";
import { Container } from "./components/Container/Container";
import { Activity } from "./components/Delegations/Activity";
import { FAQ } from "./components/FAQ/FAQ";
import { Header } from "./components/Header/Header";
import { PersonalBalance } from "./components/PersonalBalance/PersonalBalance";
import { Stats } from "./components/Stats/Stats";

const Home = () => {
  useEffect(() => {
    initBTCCurve();
  }, []);

  const [showPhase2HereModal, setShowPhase2HereModal] = useState(true);

  return (
    <>
      <Banner />
      <Header />

      <Container
        as="main"
        className="-mt-[10rem] md:-mt-[6.5rem] flex flex-col gap-12 md:gap-16 pb-16"
      >
        <Stats />
        <PersonalBalance />
        <StakingForm />
        <Activity />
        <FAQ />
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
