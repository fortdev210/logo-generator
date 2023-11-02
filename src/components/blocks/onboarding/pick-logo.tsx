import Button from "@/components/base-ui/button";
import MaterialIcon from "@/components/icons/material-icon";
import LogoCard from "@/components/base-ui/logo-card";

import { faker } from "@faker-js/faker";

export default function PickLogo() {
  const logos = Array.from({ length: 12 }, () => faker.image.business());

  return (
    <div className='w-full h-full flex flex-col mt-[70px]'>
      <div className='w-full fixed top-[70px] shadow-sm z-10 logo-header'>
        <div className='w-10/12 flex items-center justify-between m-auto py-10 z-0 '>
          <div>
            <h3 className='text-xl font-medium mb-1'>
              Pick some logos you like
            </h3>
            <p className='text-[rgb(103,110,139)] text-base font-medium'>
              We&rsquo;ll use these as inspiration. These were all made with
              Looka.
            </p>
          </div>
          <Button variant='secondary' size='large'>
            Skip
            <MaterialIcon name='arrow_forward' />
          </Button>
        </div>
      </div>
      <div className='w-10/12 grid grid-cols-3  mx-auto gap-10 mt-[170px] z-0'>
        {logos.map((logo, index) => (
          <LogoCard key={index} logo={logo} />
        ))}
      </div>
    </div>
  );
}
