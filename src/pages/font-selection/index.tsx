import FontSelection from "@/components/blocks/font-selection";
import dynamic from "next/dynamic";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingFont() {
  return (
    <OnboardingLayout>
      <FontSelection />
    </OnboardingLayout>
  );
}
