import Button from "@/components/base-ui/button";
import MaterialIcon from "@/components/icons/material-icon";
import clsx from "clsx";
import React, { useState } from "react";

import ColorSelect from "./color-select";
import FontSelect from "./font-select";
import IconSelect from "./icon-select";
import LayoutSelect from "./layout-select";
import Preview from "./preview";
import { AVAILABLE_FONTS, AVALIABLE_COLORS } from "@/utils/contants";
import { useOnboardingStore } from "@/store/onboardingStore";
import { negateColor } from "@/utils/color-util";
import { AVAILABLE_LAYOUT_CARDS } from "./layout-card";
interface EditorPanelProps {
  /**
   * Classname
   */
  className?: string;
}

const styles = {
  base: "rounded-lg bg-white border border-gray w-full  p-3 h-fit h-fit flex flex-col ",
};

export default function EditorPanel({ className }: EditorPanelProps) {
  const [editingItem, setEditingItem] = useState<
    "icon" | "color" | "font" | "layout"
  >("icon");

  const {
    selectedIcon,
    addIcon,
    selectedColor,
    addColor,
    selectedFont,
    addFont,
    selectedLayout,
    addLayout,
    businessInfo,
    selectedBgColor,
    addBgColor,
  } = useOnboardingStore();

  const onAddColor = (color: string) => {
    addColor(color);
    addBgColor(negateColor(color));
  };

  const onUndo = () => {
    const color =
      AVALIABLE_COLORS[Math.floor(Math.random() * AVALIABLE_COLORS.length)];
    addColor(color);
    addBgColor(negateColor(color));
  };

  const onReset = () => {
    const color = AVALIABLE_COLORS[0];
    addColor(color);
    addBgColor(negateColor(color));
    addFont(AVAILABLE_FONTS[0]);
    addLayout(AVAILABLE_LAYOUT_CARDS[0].value);
  };

  return (
    <div className={clsx(styles.base, className)}>
      <div className='flex justify-between items-center '>
        <div className='flex gap-2 items-center w-1/2'>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='star_border_purple500' />}
            onClick={() => setEditingItem("icon")}
          >
            Icon
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='format_color_fill' />}
            onClick={() => setEditingItem("color")}
          >
            Color
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='text_format' />}
            onClick={() => setEditingItem("font")}
          >
            Fonts
          </Button>
          <Button
            variant='secondary'
            icon={<MaterialIcon name='auto_awesome_mosaic' type='outlined' />}
            onClick={() => setEditingItem("layout")}
          >
            Layout
          </Button>
        </div>
        <div className='flex gap-2 items-center w-fit'>
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
      <div className='flex justify-between mt-3 h-[650px] py-3 '>
        {editingItem === "icon" && (
          <IconSelect selectedIcon={selectedIcon} onSelect={addIcon} />
        )}
        {editingItem === "color" && (
          <ColorSelect
            selectedColor={selectedColor}
            onSelect={onAddColor}
            selectedBgColor={selectedBgColor}
          />
        )}
        {editingItem === "font" && (
          <FontSelect selectedFont={selectedFont} onSelect={addFont} />
        )}
        {editingItem === "layout" && (
          <LayoutSelect selected={selectedLayout} onSelect={addLayout} />
        )}
        <Preview
          colors={AVALIABLE_COLORS.slice(0, 4)}
          selectedLayout={selectedLayout}
          icon={selectedIcon}
          font={selectedFont}
          color={selectedColor}
          text={businessInfo.name}
          bgColor={selectedBgColor}
        />
      </div>
    </div>
  );
}
