import { useWalletConnect } from "@babylonlabs-io/bbn-wallet-connect";

import { Container } from "@/app/components/Container/Container";
import { Connect } from "@/app/components/Wallet/Connect";
import { useAppState } from "@/app/state";
import { Logo } from "@/blockscape/Logo";

export const Header = () => {
  const { open } = useWalletConnect();
  const { isLoading: loading } = useAppState();

  return (
    <header className="bg-primary h-[8.75rem] mb-20">
      <Container className="h-20 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Connect loading={loading} onConnect={open} />
        </div>
      </Container>
    </header>
  );
};
