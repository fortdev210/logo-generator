import { Typography } from "@/components/base-ui/typography";
import clsx from "clsx";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)] pt-[100px]",
};

export default function LogoSelection() {
  return (
    <div className={styles.base}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto w-full px-2'>
        <Typography variant='h1' text='Select Your Logo' className='mb-4' />
        <Typography
          variant='body1'
          text='Pick the log you like the most:'
          className='mb-4'
        />
      </div>
    </div>
  );
}
