import React from "react";
import { useRouter } from "next/router";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Typography } from "@/components/base-ui/typography";
import { AVAILABLE_LAYOUT_CARDS } from "../editor/layout-card";
import Button from "@/components/base-ui/button";

const styles = {
  base: "w-screen h-screen  ",
};

export default function FinalLogo() {
  const {
    selectedLayout,
    selectedIcon,
    selectedFont,
    selectedColor,
    selectedBgColor,
    businessInfo,
  } = useOnboardingStore();
  const router = useRouter();

  const selectedLayoutComponent =
    AVAILABLE_LAYOUT_CARDS.find((el) => el.value === selectedLayout) ||
    AVAILABLE_LAYOUT_CARDS[0];

  const onEdit = () => {
    router.push("/editor");
  };

  return (
    <div className={styles.base}>
      <div className="bg-[url('https://www.hubspot.com/hubfs/brand-kit-generator/section-1.webp')] flex w-full justify-between p-20">
        <div>
          <Button variant='primary' onClick={onEdit}>
            Edit Your Brand Kit
          </Button>

          <Typography
            variant='h1'
            text='Your Brand Kit'
            className='mt-10 mb-5 text-white'
          />
          <Typography
            variant='body1'
            text='Here is your brand kit, so you can see how your business will be seen by the world.'
            className='text-white mb-3'
          />
          <Typography
            variant='body1'
            text='From here you can download you assets, share a direct link with team members, colleagues, and providers, or simpley go back to the editor to improve your current kit'
            className='text-white'
          />
        </div>
      </div>
      <div className='w-full pt-10'>
        <Typography variant='h3' text='The logo' className='text-center' />
        <div
          className='mt-5 w-2/3 mx-auto h-[240px]'
          style={{ backgroundColor: selectedBgColor }}
        >
          <selectedLayoutComponent.Component
            icon={selectedIcon}
            font={selectedFont}
            color={selectedColor}
            text={businessInfo.name}
          />
        </div>
      </div>
    </div>
  );
}
