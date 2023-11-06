import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface FontCardProps {
  font: string;
  className?: string;
  onSelect: (logo: string) => void;
  selected?: boolean;
}

const styles = {
  base: "flex items-center justify-center relative rounded-lg bg-white overflow-hidden cursor-pointer  text-xl md:text-[50px]  xl:text-[100px] bg-white shadow w-full aspect-square ",
};

export default function FontCard(props: FontCardProps) {
  const { className, font, onSelect, selected } = props;

  return (
    <div
      className={clsx(styles.base, className)}
      onClick={() => onSelect(font)}
    >
      <input
        className='absolute right-3 top-3 w-4 md:w-8 h-4 md:h-8 '
        type='radio'
        checked={selected}
        readOnly
      />
      <div>
        <p style={{ fontFamily: font }}>Test</p>
      </div>
    </div>
  );
}
