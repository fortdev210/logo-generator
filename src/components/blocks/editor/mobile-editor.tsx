import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useOnboardingStore } from "@/store/onboardingStore";
import MaterialIcon from "@/components/icons/material-icon";
import { Typography } from "@/components/base-ui/typography";
import { AVAILABLE_LAYOUT_CARDS } from "./layout-card";
import Button from "@/components/base-ui/button";
import { AVAILABLE_FONTS, AVALIABLE_COLORS } from "@/utils/contants";
import { getRandomElementFromList } from "@/utils/data-util";
import { getBusinessIcons } from "@/api/get-icons";

const styles = {
  base: "",
  itemCardBase:
    "w-16 aspect-square flex items-center justify-center flex-col shadow rounded bg-default",
  preview: "rounded bg-white my-5 w-full p-4 ",
  logoLayout: "rounded border border-[#eaf0f6] w-full h-[145px] ",
};

interface MobileEditorProps {
  className?: string;
}

export default function MobileEditor({ className }: MobileEditorProps) {
  const {
    selectedLayout,
    selectedFont,
    selectedIcon,
    selectedColor,
    businessInfo,
    addIcon,
    addFont,
    addColor,
    addLayout,
  } = useOnboardingStore();

  const [availableIcons, setAvailableIcons] = useState<string[]>([]);

  useEffect(() => {
    const res = getBusinessIcons("restaurants");
    if (res) {
      setAvailableIcons(res);
    }
  }, []);

  const selectedLayoutComponent =
    AVAILABLE_LAYOUT_CARDS.find((el) => el.value === selectedLayout) ||
    AVAILABLE_LAYOUT_CARDS[0];

  const onFontChange = () => {
    addFont(getRandomElementFromList(AVAILABLE_FONTS));
  };

  const onLayoutChange = () => {
    addLayout(getRandomElementFromList(AVAILABLE_LAYOUT_CARDS).value);
  };

  const onIconChange = () => {
    addIcon(getRandomElementFromList(availableIcons));
  };

  const onColorChange = () => {
    addColor(getRandomElementFromList(AVALIABLE_COLORS));
  };

  const onUndo = () => {
    const color =
      AVALIABLE_COLORS[Math.floor(Math.random() * AVALIABLE_COLORS.length)];
    addColor(color);
  };

  const onReset = () => {
    const color = AVALIABLE_COLORS[0];
    addColor(color);
    addFont(AVAILABLE_FONTS[0]);
    addLayout(AVAILABLE_LAYOUT_CARDS[0].value);
  };

  return (
    <div className={clsx(styles.base, className)}>
      <div className='w-full flex items-center justify-start gap-3 '>
        <div className={styles.itemCardBase} onClick={onFontChange}>
          <MaterialIcon name='text_format' />
          <Typography variant='body' text='Fonts' />
        </div>
        <div className={styles.itemCardBase} onClick={onLayoutChange}>
          <MaterialIcon name='rectangle' />
          <Typography variant='body' text='Layout' />
        </div>
        <div className={styles.itemCardBase} onClick={onIconChange}>
          <MaterialIcon name='star_border_purple500' />
          <Typography variant='body' text='Icon' />
        </div>
        <div className={styles.itemCardBase} onClick={onColorChange}>
          <MaterialIcon name='star_border_purple500' />
          <Typography variant='body' text='Color' />
        </div>
      </div>
      <div className={styles.preview}>
        <Typography
          text='Your Logo'
          variant='body1'
          className='font-medium mb-3'
        />
        <div className={styles.logoLayout}>
          {
            <selectedLayoutComponent.Component
              icon={selectedIcon}
              text={businessInfo.name}
              font={selectedFont}
              color={selectedColor}
            />
          }
        </div>
        <Typography
          text='Your Typo'
          variant='body1'
          className='font-medium my-3'
        />
        <Typography
          text='Inter is a variable font family carefully crafted & designed for computer screens. Inter feaures a tall x-height to adi in readability of mixed-case ...'
          variant='body'
          className='mb-3'
          style={{ fontFamily: selectedFont }}
        />
      </div>
      <div className='flex gap-2 items-center w-full justify-center'>
        <Button
          variant='secondary'
          icon={<MaterialIcon name='undo' />}
          onClick={onUndo}
        >
          Undo
        </Button>
        <Button
          variant='secondary'
          icon={<MaterialIcon name='cancel' type='outlined' />}
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
