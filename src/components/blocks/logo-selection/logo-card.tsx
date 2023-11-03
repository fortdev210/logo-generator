import clsx from "clsx";
import MaterialIcon from "@/components/icons/material-icon";
import { Typography } from "@/components/base-ui/typography";

interface LogoCardProps {
  className?: string;
  selected?: boolean;
  text: string;
  icon: string;
  font: string;
  bgColor: string;
  selectedColor: string;
}

const styles = {
  base: "flex items-center justify-center relative rounded-lg bg-white w-[180px] h-[180px] overflow-hidden cursor-pointer shadow ",
};

export default function LogoCard(props: LogoCardProps) {
  const { text, selected, icon, bgColor, className, font, selectedColor } =
    props;

  return (
    <div
      className={clsx(styles.base, className)}
      style={{ background: bgColor }}
    >
      <input
        className='absolute right-3 top-3 w-8 h-8 '
        type='radio'
        checked={selected}
        readOnly
      />
      <MaterialIcon name={icon} size={100} style={{ color: selectedColor }} />
      <Typography
        variant='h1'
        text={text}
        className={`font-${font}`}
        style={{ color: selectedColor }}
      />
    </div>
  );
}
