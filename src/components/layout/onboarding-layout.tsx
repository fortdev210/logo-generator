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
      <div className='flex-1 h-full relative'>
        {children}
        <div className='flex absolute bottom-5 right-10 gap-2'>
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
