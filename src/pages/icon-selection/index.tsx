import dynamic from "next/dynamic";
import IconSelection from "@/components/blocks/icon-selection";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingInfo() {
  return (
    <OnboardingLayout>
      <IconSelection />
    </OnboardingLayout>
  );
}
