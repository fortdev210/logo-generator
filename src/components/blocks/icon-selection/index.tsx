import { getBusinessLogos, getHubspotIcons } from "@/api/get-icons";
import Input from "@/components/base-ui/input";
import { Typography } from "@/components/base-ui/typography";
import MaterialIcon from "@/components/icons/material-icon";
import { IHubspotIcon } from "@/utils/types";
import React, { useEffect, useState } from "react";

import IconCard from "./icon-card";
import Button from "@/components/base-ui/button";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[#eaf0f6] pt-[100px] ",
  title: "text-3xl font-semibold mb-4",
};

export default function IconSelection() {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const res = getBusinessLogos("restaurants");
    setIcons(res);
  }, []);

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
          <IconCard key={index} iconSrc={icon} />
        ))}
      </div>
      <Button variant='tertiary' className='mt-10 mb-[100px]'>
        + Load More
      </Button>
    </div>
  );
}
