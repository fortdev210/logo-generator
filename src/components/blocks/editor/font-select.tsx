import { Typography } from "@/components/base-ui/typography";
import { AVAILABLE_FONTS } from "@/utils/contants";
import clsx from "clsx";

const styles = {
  base: "rounded-sm border border-gray w-1/2 p-3 ",
  fontItem:
    "w-full cursor-pointer h-11 flex items-center hover:bg-[#eaf0f6] pl-4",
};

interface FontSelectProps {
  /**
   * Classname
   */
  className?: string;
}

export default function FontSelect({ className }: FontSelectProps) {
  return (
    <div className={clsx(styles.base, className)}>
      <ul>
        {AVAILABLE_FONTS.map((font, index) => (
          <li className={styles.fontItem} key={index}>
            <span style={{ fontFamily: font }}>{font}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
