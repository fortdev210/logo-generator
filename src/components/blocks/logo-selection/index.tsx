import Button from "@/components/base-ui/button";
import { Typography } from "@/components/base-ui/typography";
import { useOnboardingStore } from "@/store/onboardingStore";
import { AVALIABLE_COLORS, ONBOARDING_STEP_ENUM } from "@/utils/contants";
import React, { useState } from "react";

import LogoCard from "./logo-card";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[#eaf0f6] pt-[100px] ",
};

export default function LogoSelection() {
  const {
    selectedColor,
    selectedFont,
    selectedIcon,
    selectedLogo,
    businessInfo,
    addLogo,
    setStepsFinished,
  } = useOnboardingStore();

  const [loadingItems, setLoadingItems] = useState(16);

  const onLoadMore = () => {
    setLoadingItems((loadingItems) => loadingItems + 8);
  };

  const onSelectLogo = (logo: string) => {
    addLogo(logo);
    setStepsFinished(ONBOARDING_STEP_ENUM.LOGO, true);
  };

  return (
    <div className={styles.base}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto w-full px-2'>
        <Typography variant='h1' text='Select Your Logo' className='mb-4' />
        <Typography
          variant='body1'
          text='Pick the log you like the most:'
          className='mb-4'
        />
        <div className='w-fit '>
          <div className='w-full grid grid-cols-4 gap-3'>
            {AVALIABLE_COLORS.slice(0, loadingItems).map((color, index) => (
              <LogoCard
                selectedColor={selectedColor}
                icon={selectedIcon}
                text={businessInfo.name}
                font={selectedFont}
                key={index}
                bgColor={color}
                onSelect={onSelectLogo}
                selected={selectedLogo === color}
              />
            ))}
          </div>
          <Button
            variant='tertiary'
            className='mt-10 mb-[100px] mx-auto'
            onClick={onLoadMore}
          >
            + Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
