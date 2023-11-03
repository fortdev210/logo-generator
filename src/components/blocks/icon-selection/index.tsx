import { getBusinessLogos } from "@/api/get-icons";
import Input from "@/components/base-ui/input";
import { Typography } from "@/components/base-ui/typography";
import MaterialIcon from "@/components/icons/material-icon";
import React, { useEffect, useState } from "react";
import { useOnboardingStore } from "@/store/onboardingStore";
import IconCard from "./icon-card";
import Button from "@/components/base-ui/button";
import { ONBOARDING_STEP_ENUM } from "@/utils/contants";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[#eaf0f6] pt-[100px] ",
  title: "text-3xl font-semibold mb-4",
};

export default function IconSelection() {
  const [icons, setIcons] = useState<string[]>([]);

  const { selectedIcon, addIcon, setStepsFinished } = useOnboardingStore();

  useEffect(() => {
    const res = getBusinessLogos("restaurants");
    if (res) {
      setIcons(res);
    }
  }, []);

  const onLoadMore = () => {
    const res = getBusinessLogos("restaurants");
    if (res) {
      setIcons([...icons, ...res]);
    }
  };

  const onSelectLogo = (logo: string) => {
    addIcon(logo);
    setStepsFinished(ONBOARDING_STEP_ENUM.ICON, true);
  };

  return (
    <div className={styles.base}>
      <div className='flex items-center justify-between w-3/4 m-auto'>
        <div>
          <Typography text='Select Your Business Logo Mark' variant='h1' />
          <Typography
            text='Select or search for the icon that better your business'
            variant='body1'
            className='mt-3'
          />
        </div>
        <Input
          placeholder='Search over icons'
          iconR={<MaterialIcon name='search' size={24} />}
        />
      </div>
      <div className='w-3/4 grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
        {icons.map((icon, index) => (
          <IconCard
            key={index}
            iconSrc={icon}
            selected={icon === selectedIcon}
            onSelect={onSelectLogo}
          />
        ))}
      </div>
      <Button
        variant='tertiary'
        className='mt-10 mb-[100px]'
        onClick={onLoadMore}
      >
        + Load More
      </Button>
    </div>
  );
}
