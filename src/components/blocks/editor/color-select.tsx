import { AVALIABLE_COLORS, ONBOARDING_STEP_ENUM } from "@/utils/contants";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const styles = {
  base: "w-1/2 grid grid-cols-4 gap-2 h-full overflow-y-scroll pr-3 ",
  colorCard:
    "rounded border border-gray flex items-center justify-center aspect-square w-full cursor-pointer ",
};

interface ColorSelectProps {
  /**
   * Classname
   */
  className?: string;
}

export default function ColorSelect({ className }: ColorSelectProps) {
  return (
    <div className={clsx(styles.base, className)}>
      {AVALIABLE_COLORS.map((color, index) => (
        <div
          className={styles.colorCard}
          key={index}
          style={{ background: color }}
        />
      ))}
    </div>
  );
}
