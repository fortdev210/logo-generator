import Button from "@/components/base-ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ONBOARDING_STEP_ENUM } from "@/utils/contants";
import { useRouter } from "next/router";

import SideBar from "../blocks/side-bar";
import MaterialIcon from "../icons/material-icon";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout(props: OnboardingLayoutProps) {
  const { children } = props;
  const router = useRouter();
  const {
    currentStep,
    setCurrentStep,
    businessInfo,
    setStepsFinished,
    selectedIcon,
    selectedFont,
    selectedColor,
    selectedLogo,
    selectedLayout,
  } = useOnboardingStore();

  const onNext = () => {
    switch (currentStep) {
      case ONBOARDING_STEP_ENUM.BUSINESS_INFO:
        if (businessInfo.name && businessInfo.industry) {
          setCurrentStep(ONBOARDING_STEP_ENUM.ICON);
          setStepsFinished(ONBOARDING_STEP_ENUM.BUSINESS_INFO, true);
          router.push("/icon-selection");
        }
        break;
      case ONBOARDING_STEP_ENUM.ICON:
        if (selectedIcon) {
          setCurrentStep(ONBOARDING_STEP_ENUM.FONT);
          setStepsFinished(ONBOARDING_STEP_ENUM.ICON, true);
          router.push("/font-selection");
        }
        break;
      case ONBOARDING_STEP_ENUM.FONT:
        if (selectedFont) {
          setCurrentStep(ONBOARDING_STEP_ENUM.COLOR);
          setStepsFinished(ONBOARDING_STEP_ENUM.FONT, true);
          router.push("/color-selection");
        }
        break;
      case ONBOARDING_STEP_ENUM.COLOR:
        if (selectedColor) {
          setCurrentStep(ONBOARDING_STEP_ENUM.LOGO);
          setStepsFinished(ONBOARDING_STEP_ENUM.COLOR, true);
          router.push("/logo-selection");
        }
        break;
      case ONBOARDING_STEP_ENUM.LOGO:
        if (selectedLogo) {
          setCurrentStep(ONBOARDING_STEP_ENUM.BRAND_KIT);
          setStepsFinished(ONBOARDING_STEP_ENUM.LOGO, true);
          router.push("/editor");
        }
        break;
      case ONBOARDING_STEP_ENUM.BRAND_KIT:
        if (selectedLayout) {
          setStepsFinished(ONBOARDING_STEP_ENUM.BRAND_KIT, true);
          router.push("/final");
        }
        break;
      default:
        break;
    }
  };

  const onBack = () => {
    switch (currentStep) {
      case ONBOARDING_STEP_ENUM.ICON:
        setCurrentStep(ONBOARDING_STEP_ENUM.BUSINESS_INFO);
        router.push("/info");
        break;
      case ONBOARDING_STEP_ENUM.FONT:
        setCurrentStep(ONBOARDING_STEP_ENUM.ICON);
        router.push("/icon-selection");
        break;
      case ONBOARDING_STEP_ENUM.COLOR:
        setCurrentStep(ONBOARDING_STEP_ENUM.FONT);
        router.push("/font-selection");
        break;
      case ONBOARDING_STEP_ENUM.LOGO:
        setCurrentStep(ONBOARDING_STEP_ENUM.COLOR);
        router.push("/color-selection");
        break;
      case ONBOARDING_STEP_ENUM.BRAND_KIT:
        setCurrentStep(ONBOARDING_STEP_ENUM.LOGO);
        router.push("/logo-selection");
        break;
      default:
        break;
    }
  };

  return (
    <div className='w-full flex h-screen'>
      <SideBar />
      <div className='flex-1 overflow-scroll relative'>
        {children}
        <div className='bottom-0 fixed gap-2 z-10 w-full md:w-[calc(100vw-300px)] h-20 flex items-center bg-[#eaf0f6] pr-10 justify-end '>
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
