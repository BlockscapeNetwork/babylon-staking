import { Heading, Loader, Text } from "@babylonlabs-io/bbn-core-ui";
import { useState } from "react";

import { StatusView } from "@/app/components/Staking/FinalityProviders/FinalityProviderTableStatusView";
import apiNotAvailable from "@/app/components/Staking/Form/States/api-not-available.svg";
import { Message } from "@/app/components/Staking/Form/States/Message";
import stakingNotStartedIcon from "@/app/components/Staking/Form/States/staking-not-started.svg";
import walletIcon from "@/app/components/Staking/Form/States/wallet-icon.svg";
import { WalletNotConnected } from "@/app/components/Staking/Form/States/WalletNotConnected";
import { AuthGuard } from "@/components/common/AuthGuard";

import { AmountField } from "./components/AmountField";
import { FeeAmountField } from "./components/FeeAmountField";
import { FeeInfo } from "./components/FeeInfo";
import { FeeRateField } from "./components/FeeRateField";
import { FeeSection } from "./components/FeeSection";
import { InfoAlert } from "./components/InfoAlert";
import { FormOverlay } from "./components/Overlay";
import { SubmitButton } from "./components/SubmitButton";
import { TermField } from "./components/TermField";

interface DelegationFormProps {
  loading?: boolean;
  blocked?: boolean;
  available?: boolean;
  hasError?: boolean;
  error?: string;
  stakingInfo?: {
    minFeeRate: number;
    maxFeeRate: number;
    defaultFeeRate: number;
    minStakingTimeBlocks: number;
    maxStakingTimeBlocks: number;
    minStakingAmountSat: number;
    maxStakingAmountSat: number;
    defaultStakingTimeBlocks?: number;
  };
}

export function DelegationForm({
  loading,
  blocked,
  available,
  hasError,
  error,
  stakingInfo,
}: DelegationFormProps) {
  const [isCustomFee, setIsCustomFee] = useState(false);

  if (loading) {
    return (
      <StatusView
        className="flex-1 h-auto"
        icon={<Loader />}
        title="Please wait..."
      />
    );
  }

  if (blocked) {
    return (
      <Message
        icon={walletIcon}
        title="Unavailable in Your Region"
        message={error ?? ""}
      />
    );
  }

  if (!available) {
    return (
      <Message
        title="Staking Temporarily Unavailable"
        message="Staking is not enabled at this time. Please check back later."
        icon={stakingNotStartedIcon}
      />
    );
  }

  if (hasError) {
    return (
      <Message
        icon={apiNotAvailable}
        title="Staking is not available"
        message={error ?? ""}
      />
    );
  }

  return (
    <AuthGuard fallback={<WalletNotConnected />}>
      <div className="relative flex flex-1 flex-col gap-4">
        <Heading variant="h5" className="text-primary-dark">
          Step 2
        </Heading>

        <Text variant="body1" className="text-primary-light">
          Set Staking Amount
        </Text>

        <InfoAlert />

        <div className="flex flex-1 flex-col">
          <FormOverlay>
            <TermField
              defaultValue={stakingInfo?.defaultStakingTimeBlocks}
              min={stakingInfo?.minStakingTimeBlocks}
              max={stakingInfo?.maxStakingTimeBlocks}
            />

            <AmountField
              min={stakingInfo?.minStakingAmountSat}
              max={stakingInfo?.maxStakingAmountSat}
            />

            <FeeSection>
              <FeeInfo custom={isCustomFee} />

              <FeeRateField
                expanded={isCustomFee}
                defaultRate={stakingInfo?.defaultFeeRate}
                min={stakingInfo?.minFeeRate}
                max={stakingInfo?.maxFeeRate}
                onExpand={() => void setIsCustomFee(true)}
              />

              <FeeAmountField />
            </FeeSection>
          </FormOverlay>

          <SubmitButton />
        </div>
      </div>
    </AuthGuard>
  );
}
