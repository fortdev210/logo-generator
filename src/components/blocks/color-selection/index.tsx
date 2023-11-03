import { Typography } from "@/components/base-ui/typography";
import { useOnboardingStore } from "@/store/onboardingStore";
import ColorSelectionPad from "./color-pad";
import ColorPreview from "./color-preview";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)] pt-[100px]",
};

export default function ColorSelection() {
  const { selectedColor, addColor } = useOnboardingStore();

  return (
    <div className={styles.base}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto'>
        <Typography
          variant='h1'
          text='Select Your Business Primary Color'
          className='mb-4'
        />
        <Typography
          variant='body1'
          text='Select the color you want to use to represent your business:'
          className='mb-4'
        />
        <div className='flex gap-10'>
          <ColorSelectionPad />
          <ColorPreview />
        </div>
      </div>
    </div>
  );
}
