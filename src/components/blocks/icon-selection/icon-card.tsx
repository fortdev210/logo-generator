import React from "react";
import clsx from "clsx";
import MaterialIcon from "@/components/icons/material-icon";

interface IconCardProps {
  iconSrc: string;
  className?: string;
  onSelect: (logo: string) => void;
  selected?: boolean;
}

const styles = {
  base: "flex items-center justify-center relative rounded-lg bg-white w-full aspect-square overflow-hidden cursor-pointer ",
};

export default function IconCard(props: IconCardProps) {
  const { className, iconSrc, onSelect, selected } = props;

  return (
    <div
      className={clsx(styles.base, className)}
      onClick={() => onSelect(iconSrc)}
    >
      <input
        className='absolute right-3 top-3 w-8 h-8 '
        type='radio'
        checked={selected}
        readOnly
      />
      <MaterialIcon name={iconSrc} size={100} />
    </div>
  );
}
