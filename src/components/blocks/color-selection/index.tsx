import { Typography } from "@/components/base-ui/typography";
import ColorSelectionPad from "./color-pad";
import ColorPreview from "./color-preview";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)]  p-10 md:pt-[100px]",
};

export default function ColorSelection() {
  return (
    <div className={styles.base}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto w-full px-2'>
        <Typography
          variant='h1'
          text='Select Your Business Primary Color'
          className='mb-4 hidden md:block'
        />
        <Typography
          variant='body1'
          text='Select the color you want to use to represent your business:'
          className='mb-4'
        />
        <div className='w-full flex gap-10'>
          <ColorSelectionPad />
          <ColorPreview />
        </div>
      </div>
    </div>
  );
}
