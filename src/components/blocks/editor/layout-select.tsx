import clsx from "clsx";
import { useOnboardingStore } from "@/store/onboardingStore";
import MaterialIcon from "@/components/icons/material-icon";
import { AVAILABLE_LAYOUT_CARDS } from "./layout-card";
import { Component } from "react";

const styles = {
  base: " w-1/2 overflow-y-scroll h-full ",
  cardBase:
    "flex items-center justify-center w-full h-[160px] border border-[#eaf0f6] gap-3 cursor-pointer ",
};

interface LayoutSelectProps {
  /**
   * Classname
   */
  className?: string;
}

export default function LayoutSelect({ className }: LayoutSelectProps) {
  const { selectedIcon, businessInfo } = useOnboardingStore();

  return (
    <div className={clsx(styles.base, className)}>
      <ul>
        {AVAILABLE_LAYOUT_CARDS.map((layout) => (
          <div key={layout.value} className='h-[120px]'>
            <layout.Component
              icon={selectedIcon}
              text={businessInfo.name.slice(0, 4)}
              className='border border-[#eaf0f6] gap-3'
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
