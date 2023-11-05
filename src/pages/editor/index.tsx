import LogoEditor from "@/components/blocks/editor";
import dynamic from "next/dynamic";

const OnboardingLayout = dynamic(
  () => import("@/components/layout/onboarding-layout"),
  {
    ssr: false,
  }
);

export default function EditLogo() {
  return (
    <OnboardingLayout>
      <LogoEditor />
    </OnboardingLayout>
  );
}
