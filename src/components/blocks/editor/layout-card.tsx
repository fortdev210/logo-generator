import clsx from "clsx";
import MaterialIcon from "@/components/icons/material-icon";
import React from "react";

interface LayoutCardProps {
  /**
   * Classname
   */
  className?: string;

  /**
   * Icon name
   */
  icon: string;

  /**
   * Text
   */
  text: string;

  /**
   * Font style
   */
  font: string;

  /**
   * Color selected
   */
  color: string;
}

const styles = {
  base: "flex items-center justify-center w-full h-full  cursor-pointer ",
};

export const HorizontalLayoutCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <MaterialIcon name={icon} size={50} style={{ color: color }} />
      <span className='text-xl' style={{ fontFamily: font, color: color }}>
        {text}
      </span>
    </div>
  );
};

export const VerticalLayoutCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " flex-col ", className)}>
      <MaterialIcon name={icon} size={50} style={{ color: color }} />
      <span className='text-xl' style={{ fontFamily: font, color: color }}>
        {text}
      </span>
    </div>
  );
};

export const RightTextLayoutCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <span className='text-xl' style={{ fontFamily: font, color: color }}>
        {text}
      </span>
      <MaterialIcon name={icon} size={50} style={{ color: color }} />
    </div>
  );
};

export const TextOnlyCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <span className='text-xl' style={{ fontFamily: font, color: color }}>
        {text}
      </span>
    </div>
  );
};

export const TextInCircleCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " py-4 ", className)}>
      <div
        className='h-full  aspect-square border-2 rounded-full items-center flex justify-center max-h-[200px] flex-col'
        style={{ borderColor: color }}
      >
        <MaterialIcon name={icon} style={{ color: color }} />
        <span className='text-xl' style={{ fontFamily: font, color: color }}>
          {text}
        </span>
      </div>
    </div>
  );
};

export const TextInSquareCard = ({
  className,
  icon,
  text,
  font,
  color,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " py-4 ", className)}>
      <div
        className='h-full  aspect-square border-2 items-center flex justify-center max-h-[200px] flex-col '
        style={{ borderColor: color }}
      >
        <MaterialIcon name={icon} style={{ color: color }} />
        <span className='text-xl' style={{ fontFamily: font, color: color }}>
          {text}
        </span>
      </div>
    </div>
  );
};

export const AVAILABLE_LAYOUT_CARDS = [
  {
    value: "horizontal",
    Component: HorizontalLayoutCard,
  },
  {
    value: "vertical",
    Component: VerticalLayoutCard,
  },
  {
    value: "right-text",
    Component: RightTextLayoutCard,
  },
  {
    value: "text-only",
    Component: TextOnlyCard,
  },
  {
    value: "circle",
    Component: TextInCircleCard,
  },
  {
    value: "square",
    Component: TextInSquareCard,
  },
];
