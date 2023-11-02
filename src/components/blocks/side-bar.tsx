import clsx from "clsx";
import { STEP_INFO, TOTAL_STEPS } from "@/utils/contants";
import Radio from "../base-ui/radio";

const styles = {
  base: "w-[300px] h-full  z-10 text-white bg-[#213343] px-6 pt-[100px]",
  step: "text-white font-semibold text-xl mb-4",
  description: "text-white text-base",
  item: "flex items-center justify-between text-white pb-4 border-b border-tertiary mb-3 cursor-pointer",
};

interface SideBarProps {
  /**
   * The current step of the onboarding process
   */
  step: number;
}

const StepItems = [
  {
    title: "Enter your Business information",
  },
  {
    title: "Select your icon",
  },
  {
    title: "Select your font",
  },
  {
    title: "Select your primary color",
  },
  {
    title: "Select your logo",
  },
  {
    title: "Customize your brand kit",
  },
];

export default function SideBar(props: SideBarProps) {
  const { step } = props;

  return (
    <div className={styles.base}>
      <p className={styles.step}>
        Step {step}/{TOTAL_STEPS}
      </p>
      <p className={styles.description}>{STEP_INFO[step - 1]}</p>
      <div className='mt-20'>
        {StepItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <p className='text-sm'>{item.title}</p>
            <Radio variant='pending' />
          </div>
        ))}
      </div>
    </div>
  );
}
