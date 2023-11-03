import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Radio from "@/components/base-ui/radio";

interface IconCardProps {
  iconSrc: string;
  className?: string;
  onSelect: (logo: string) => void;
  selected?: boolean;
}

const styles = {
  base: "flex items-center justify-center relative rounded-lg bg-white w-full h-full overflow-hidden cursor-pointer ",
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
      <Image
        layout='responsive'
        width={200}
        height={200}
        src={iconSrc}
        alt='icon'
      />
    </div>
  );
}
