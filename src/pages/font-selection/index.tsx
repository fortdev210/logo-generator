import dynamic from "next/dynamic";
import FontSelection from "@/components/blocks/font-selection";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingInfo() {
  return (
    <OnboardingLayout>
      <FontSelection />
    </OnboardingLayout>
  );
}
