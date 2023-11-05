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
  base: "flex items-center justify-center relative rounded-lg bg-white overflow-hidden cursor-pointer text-[50px] xl:text-[100px] bg-white shadow w-[180px] h-[180px]  xl:w-[230px] xl:h-[230px] ",
};

export default function FontCard(props: FontCardProps) {
  const { className, font, onSelect, selected } = props;

  return (
    <div
      className={clsx(styles.base, className)}
      onClick={() => onSelect(font)}
    >
      <input
        className='absolute right-3 top-3 w-8 h-8 '
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
