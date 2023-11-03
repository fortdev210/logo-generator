import { Typography } from "@/components/base-ui/typography";
import FontCard from "./font-card";

import { useOnboardingStore } from "@/store/onboardingStore";

const styles = {
  base: "w-full flex items-center justify-center flex-col bg-[rgb(234 240 246)] pt-[100px]",
};

export default function FontSelection() {
  const fonts = [
    "font-sans",
    "font-noto",
    "font-italic",
    "font-serif",
    "font-bold",
    "font-mono",
    "font-courier",
  ];

  const { selectedFont, addFont } = useOnboardingStore();

  return (
    <div className={styles.base}>
      <div className='max-w-[1200px] xl:max-w-[1000px] m-auto'>
        <Typography
          variant='h1'
          text='Select Your Business Primary Font'
          className='mb-4'
        />
        <Typography
          variant='body1'
          text='Select the font you want to use to represent your business:'
          className='mb-4'
        />
        <div className='w-full grid grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
          {fonts.map((font, index) => (
            <FontCard
              key={index}
              font={font}
              selected={font === selectedFont}
              onSelect={() => addFont(font)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
