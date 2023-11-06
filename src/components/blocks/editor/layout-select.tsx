import clsx from "clsx";

import { useOnboardingStore } from "@/store/onboardingStore";
import { AVAILABLE_LAYOUT_CARDS } from "./layout-card";

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

  /**
   * OnSelect
   */
  onSelect: (layout: string) => void;

  /**
   * Selected
   */
  selected: string;
}

export default function LayoutSelect({
  className,
  selected,
  onSelect,
}: LayoutSelectProps) {
  const { selectedIcon, businessInfo, selectedFont, selectedColor } =
    useOnboardingStore();

  return (
    <div className={clsx(styles.base, className)}>
      <ul>
        {AVAILABLE_LAYOUT_CARDS.map((layout) => (
          <div
            key={layout.value}
            className={clsx(
              "h-[120px]",
              layout.value === selected ? " bg-default" : ""
            )}
            onClick={() => onSelect(layout.value)}
          >
            <layout.Component
              icon={selectedIcon}
              text={businessInfo.name.slice(0, 4)}
              className='border border-[#eaf0f6] gap-3'
              font={selectedFont}
              color={selectedColor}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
