import { useRouter } from "next/router";
import SideBar from "../blocks/side-bar";
import Button from "@/components/base-ui/button";
import MaterialIcon from "../icons/material-icon";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ONBOARDING_STEP_ENUM } from "@/utils/contants";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout(props: OnboardingLayoutProps) {
  const { children } = props;
  const router = useRouter();
  const { currentStep, setCurrentStep, businessInfo, setStepsFinished } =
    useOnboardingStore();

  const onNext = () => {
    if (currentStep === ONBOARDING_STEP_ENUM.BUSINESS_INFO) {
      if (businessInfo.name && businessInfo.industry) {
        setCurrentStep(ONBOARDING_STEP_ENUM.ICON);
        setStepsFinished(ONBOARDING_STEP_ENUM.BUSINESS_INFO, true);
        router.push("/icon-selection");
      }
    }
  };

  const onBack = () => {
    if (currentStep === ONBOARDING_STEP_ENUM.ICON) {
      setCurrentStep(ONBOARDING_STEP_ENUM.BUSINESS_INFO);
      router.push("/info");
    }
  };

  return (
    <div className='w-full flex h-screen'>
      <SideBar />
      <div className='flex-1 overflow-scroll relative'>
        {children}
        <div className='bottom-0 fixed gap-2 z-10 w-[calc(100vw-300px)] h-20 flex items-center bg-[#eaf0f6] pr-10 justify-end '>
          {currentStep > ONBOARDING_STEP_ENUM.BUSINESS_INFO ? (
            <Button variant='secondary' onClick={onBack}>
              <MaterialIcon name='arrow_back_ios' size={15} />
              Back
            </Button>
          ) : null}
          <Button variant='primary' onClick={onNext}>
            Continue
            <MaterialIcon name='arrow_forward_ios' size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
}
