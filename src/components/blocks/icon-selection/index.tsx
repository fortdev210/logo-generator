import { getBusinessIcons } from "@/api/get-icons";
import Button from "@/components/base-ui/button";
import Input from "@/components/base-ui/input";
import { Typography } from "@/components/base-ui/typography";
import MaterialIcon from "@/components/icons/material-icon";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ONBOARDING_STEP_ENUM } from "@/utils/contants";
import React, { useEffect, useState } from "react";

import IconCard from "./icon-card";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[#eaf0f6] p-10  md:pt-[100px]  ",
  title: "text-3xl font-semibold mb-4",
};

export default function IconSelection() {
  const [icons, setIcons] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const { selectedIcon, addIcon, setStepsFinished, businessInfo } =
    useOnboardingStore();

  useEffect(() => {
    const res = getBusinessIcons(businessInfo.name);
    if (res) {
      setIcons(res);
    }
  }, []);

  const onLoadMore = () => {
    const res = getBusinessIcons(businessInfo.name);
    if (res) {
      setIcons([...icons, ...res]);
    }
  };

  const onSelectIcon = (logo: string) => {
    addIcon(logo);
    setStepsFinished(ONBOARDING_STEP_ENUM.ICON, true);
  };

  const onSearch = (search: string) => {
    const res = getBusinessIcons(search);
    if (res) {
      setIcons(res);
    }
  };

  return (
    <div className={styles.base}>
      <div className='flex items-center justify-between m-auto w-full md:w-2/3 flex-col md:flex-row'>
        <div>
          <Typography
            text='Select Your Business Logo Mark'
            variant='h1'
            className='hidden md:block'
          />
          <Typography
            text='Select or search for the icon that better your business'
            variant='body1'
            className='mt-3 mb-5 md:mb-0'
          />
        </div>
        <Input
          placeholder='Search over icons'
          onChange={(e) => setSearch(e.target.value)}
          iconR={
            <MaterialIcon
              name='search'
              size={24}
              onClick={() => onSearch(search)}
            />
          }
        />
      </div>
      <div className='w-full md:w-2/3 grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
        {icons.map((icon, index) => (
          <IconCard
            key={index}
            iconSrc={icon}
            selected={icon === selectedIcon}
            onSelect={onSelectIcon}
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
