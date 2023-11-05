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
}

const styles = {
  base: "flex items-center justify-center w-full h-full  cursor-pointer ",
};

export const HorizontalLayoutCard = ({
  className,
  icon,
  text,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <MaterialIcon name={icon} size={50} />
      <span className='text-xl'>{text}</span>
    </div>
  );
};

export const VerticalLayoutCard = ({
  className,
  icon,
  text,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " flex-col ", className)}>
      <MaterialIcon name={icon} size={50} />
      <span className='text-xl'>{text}</span>
    </div>
  );
};

export const RightTextLayoutCard = ({
  className,
  icon,
  text,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <span className='text-xl'>{text}</span>
      <MaterialIcon name={icon} size={50} />
    </div>
  );
};

export const TextOnlyCard = ({ className, icon, text }: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, className)}>
      <span className='text-xl'>{text}</span>
    </div>
  );
};

export const TextInCircleCard = ({
  className,
  icon,
  text,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " py-4 ", className)}>
      <div className='h-full aspect-square border-2 rounded-full items-center flex justify-center'>
        <span className='text-xl'>{text}</span>
      </div>
    </div>
  );
};

export const TextInSquareCard = ({
  className,
  icon,
  text,
}: LayoutCardProps) => {
  return (
    <div className={clsx(styles.base, " py-4 ", className)}>
      <div className='h-full  aspect-square border-2 items-center flex justify-center'>
        <span className='text-xl'>{text}</span>
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
