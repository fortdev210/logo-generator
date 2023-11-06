import React from "react";
import clsx from "clsx";
import { Typography } from "@/components/base-ui/typography";
import MaterialIcon from "@/components/icons/material-icon";
import { AVAILABLE_LAYOUT_CARDS } from "./layout-card";

const styles = {
  base: "w-1/2 px-4 pb-3 h-full flex flex-col ",
  colorCard: "rounded w-6 h-6 ",
};

interface PreviewProps {
  className?: string;
  colors: string[];
  selectedLayout?: string;
  color: string;
  font: string;
  icon: string;
  text: string;
  bgColor: string;
}

export default function Preview({
  className,
  colors,
  selectedLayout,
  icon,
  color,
  bgColor,
  font,
  text,
}: PreviewProps) {
  const selectedLayoutComponent =
    AVAILABLE_LAYOUT_CARDS.find((el) => el.value === selectedLayout) ||
    AVAILABLE_LAYOUT_CARDS[0];

  return (
    <div className={clsx(styles.base, className)}>
      <Typography variant='body' text='PREVIEW' className='text-center pb-1 ' />
      <div
        className={clsx("w-full rounded border shadow border-[#f3f3f3] flex-1")}
        style={{ background: bgColor }}
      >
        <selectedLayoutComponent.Component
          icon={icon}
          text={text}
          font={font}
          color={color}
          bgColor={bgColor}
        />
      </div>
      <div className='flex gap-1 items-center pt-2'>
        {colors.map((color) => (
          <div
            key={color}
            className={styles.colorCard}
            style={{ background: color }}
          ></div>
        ))}
        <MaterialIcon
          name='format_color_fill'
          className={clsx("cursor-pointer ", `text-[${bgColor}]`)}
        />
      </div>
    </div>
  );
}
