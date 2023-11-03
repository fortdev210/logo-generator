import dynamic from "next/dynamic";
import ColorSelection from "@/components/blocks/color-selection";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingInfo() {
  return (
    <OnboardingLayout>
      <ColorSelection />
    </OnboardingLayout>
  );
}
