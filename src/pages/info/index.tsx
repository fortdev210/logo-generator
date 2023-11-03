// import OnboardingLayout from "@/components/layout/onboarding-layout";
import dynamic from "next/dynamic";
import BussinessInfo from "@/components/blocks/business-info";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function OnboardingInfo() {
  return (
    <OnboardingLayout>
      <BussinessInfo />
    </OnboardingLayout>
  );
}
