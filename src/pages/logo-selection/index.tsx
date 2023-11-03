import dynamic from "next/dynamic";
import LogoSelection from "@/components/blocks/logo-selection";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingInfo() {
  return (
    <OnboardingLayout>
      <LogoSelection />
    </OnboardingLayout>
  );
}
