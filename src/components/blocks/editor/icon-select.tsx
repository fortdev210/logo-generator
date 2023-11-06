import { getBusinessIcons } from "@/api/get-icons";
import MaterialIcon from "@/components/icons/material-icon";
import { useOnboardingStore } from "@/store/onboardingStore";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const styles = {
  base: "w-1/2 grid grid-cols-4 gap-2 h-full overflow-y-scroll pr-3 ",
  iconCard:
    "rounded border border-gray flex items-center justify-center aspect-square w-full cursor-pointer ",
};

interface IconSelectProps {
  /**
   * Classname
   */
  className?: string;

  /**
   * On select each item
   */
  onSelect: (icon: string) => void;

  /**
   * Selected
   */
  selectedIcon: string;
}

export default function IconSelect({
  className,
  onSelect,
  selectedIcon,
}: IconSelectProps) {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const res = getBusinessIcons("restaurants", 50);
    if (res) {
      setIcons(res);
    }
  }, []);

  return (
    <div className={clsx(styles.base, className)}>
      {icons.map((icon, index) => (
        <div
          className={clsx(
            styles.iconCard,
            selectedIcon === icon ? "bg-default" : ""
          )}
          key={index}
          onClick={() => onSelect(icon)}
        >
          <MaterialIcon
            name={icon}
            size={50}
            type='outlined'
            className='cursor-pointer '
          />
        </div>
      ))}
    </div>
  );
}
