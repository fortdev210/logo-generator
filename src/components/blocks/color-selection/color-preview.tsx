import clsx from "clsx";
import Image from "next/image";
import { Typography } from "@/components/base-ui/typography";
import { useOnboardingStore } from "@/store/onboardingStore";
import MaterialIcon from "@/components/icons/material-icon";

const styles = {
  base: "w-full hidden md:block",
  preview:
    "flex items-center justify-center rounded-lg shadow bg-white h-[500px] max-w-[450px] flex-col relative bg-[#f6f9fc]",
  mark: "w-9 h-9 rounded-full text-white flex items-center justify-center ",
  iconWrapper:
    "w-9 h-9 rounded-full bg-white flex items-center justify-center ",
};

export default function ColorPreview() {
  const { selectedColor, businessInfo, selectedIcon } = useOnboardingStore();

  return (
    <div className={clsx(styles.base)}>
      <Typography
        variant='caption'
        text='PREVIEW'
        className='mb-4 text-center '
      />
      <div className={styles.preview}>
        <div className='flex items-center gap-3 absolute top-10 left-3'>
          <div
            className={clsx(styles.mark)}
            style={{ backgroundColor: selectedColor }}
          >
            A
          </div>
          <div>
            <Typography variant='body' text='Header' />
            <Typography variant='caption' text='Subheader' />
          </div>
        </div>
        <div className='flex gap-2 items-center h-1/2 bg-white w-full justify-center'>
          <MaterialIcon
            name={selectedIcon}
            size={150}
            style={{ color: selectedColor }}
          />
          <Typography
            variant='h1'
            text={businessInfo.name}
            className='text-[70px]'
            style={{ color: selectedColor }}
          />
        </div>
        <div className='flex gap-2 items-center mt-5'>
          <div className={styles.iconWrapper}>
            <MaterialIcon
              name='favorite'
              style={{ color: selectedColor }}
              type='filled'
              size={18}
            />
          </div>
          <div className={styles.iconWrapper}>
            <MaterialIcon
              name='forum'
              style={{ color: selectedColor }}
              type='filled'
              size={18}
            />
          </div>
          <div className={styles.iconWrapper}>
            <MaterialIcon
              name='send'
              style={{ color: selectedColor }}
              type='filled'
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
