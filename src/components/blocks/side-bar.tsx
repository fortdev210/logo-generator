import { useRouter } from "next/router";
import { ONBOARDING_STEP_ENUM, STEP_INFO, TOTAL_STEPS } from "@/utils/contants";
import Radio from "../base-ui/radio";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Typography } from "../base-ui/typography";

const styles = {
  base: "w-[300px] h-full  z-10 text-white bg-[#213343] px-6 pt-[100px] hidden md:block",
  step: "text-white font-semibold text-xl mb-4",
  description: "text-white text-base",
  item: "flex items-center justify-between text-white pb-4 border-b border-tertiary mb-3 cursor-pointer",
};

interface SideBarProps {
  className?: string;
}

const StepItems = [
  {
    title: "Enter your Business information",
    link: "/info",
    step: ONBOARDING_STEP_ENUM.BUSINESS_INFO,
  },
  {
    title: "Select your icon",
    link: "/icon-selection",
    step: ONBOARDING_STEP_ENUM.ICON,
  },
  {
    title: "Select your font",
    link: "/font-selection",
    step: ONBOARDING_STEP_ENUM.FONT,
  },
  {
    title: "Select your primary color",
    link: "/color-selection",
    step: ONBOARDING_STEP_ENUM.COLOR,
  },
  {
    title: "Select your logo",
    link: "/logo-selection",
    step: ONBOARDING_STEP_ENUM.LOGO,
  },
  {
    title: "Customize your brand kit",
    link: "/editor",
    step: ONBOARDING_STEP_ENUM.BRAND_KIT,
  },
];

export default function SideBar(props: SideBarProps) {
  const { currentStep, stepsFinished, setCurrentStep } = useOnboardingStore();
  const router = useRouter();

  const onClickItem = (index: number) => {
    if (stepsFinished[index]) {
      setCurrentStep(StepItems[index].step);
      router.push(StepItems[index].link);
    }
  };

  return (
    <div className={styles.base}>
      <Typography
        variant='cta'
        text={`Step ${currentStep + 1}/${TOTAL_STEPS}`}
        className={styles.step}
      />
      <Typography
        variant='body'
        className={styles.description}
        text={STEP_INFO[currentStep]}
      />
      <div className='mt-20'>
        {StepItems.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => onClickItem(index)}
          >
            <p className='text-sm'>{item.title}</p>
            <Radio
              variant={
                currentStep === index
                  ? "updating"
                  : stepsFinished && stepsFinished[index]
                  ? "done"
                  : "pending"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
