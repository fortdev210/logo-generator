import SideBar from "../blocks/side-bar";
import Button from "@/components/base-ui/button";
import MaterialIcon from "../icons/material-icon";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout(props: OnboardingLayoutProps) {
  const { children } = props;

  return (
    <div className='w-full flex h-screen'>
      <SideBar step={1} />
      <div className='flex-1 overflow-scroll relative'>
        {children}
        <div className='bottom-0 fixed gap-2 z-10 w-[calc(100vw-300px)] h-20 flex items-center bg-[#eaf0f6] pr-10 justify-end '>
          <Button variant='secondary'>
            <MaterialIcon name='arrow_back_ios' size={15} />
            Back
          </Button>
          <Button variant='primary'>
            Continue
            <MaterialIcon name='arrow_forward_ios' size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
}
