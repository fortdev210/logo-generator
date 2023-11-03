import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Radio from "@/components/base-ui/radio";

interface IconCardProps {
  iconSrc: string;
  className?: string;
}

const styles = {
  base: "flex items-center justify-center relative rounded-lg bg-white w-full h-full overflow-hidden ",
};

export default function IconCard(props: IconCardProps) {
  const { className, iconSrc } = props;

  return (
    <div className={clsx(styles.base, className)}>
      <Radio className='absolute right-3 top-3 ' variant='updating' />
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
