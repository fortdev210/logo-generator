import clsx from "clsx";
import { AVALIABLE_COLORS } from "@/utils/contants";
import { useOnboardingStore } from "@/store/onboardingStore";
import MaterialIcon from "@/components/icons/material-icon";

const styles = {
  base: "pr-4 h-[650px] overflow-y-scroll ",
  card: "flex items-center justify-center rounded w-[90px] h-[90px] cursor-pointer  ",
};

interface ColorSelectionPadProps {
  className?: string;
}

export default function ColorSelectionPad(props: ColorSelectionPadProps) {
  const { className } = props;

  const { selectedColor, addColor } = useOnboardingStore();

  const onColorSelect = (color: string) => {
    addColor(color);
  };

  return (
    <div className={clsx(styles.base, className)}>
      <div className='w-full grid grid-cols-4 gap-2'>
        {AVALIABLE_COLORS.map((color) => (
          <div
            key={color}
            className={clsx(styles.card, `bg-[${color}]`)}
            onClick={() => onColorSelect(color)}
            style={{ backgroundColor: color }}
          >
            {selectedColor === color && (
              <MaterialIcon name='check' className='text-white' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
