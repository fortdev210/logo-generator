import { cva } from "class-variance-authority";
import clsx from "clsx";
import MaterialIcon from "../icons/material-icon";

interface RadioProps {
  label?: string;
  className?: string;
  variant: "done" | "pending" | "updating";
}

const styles = {
  base: "w-4 h-4 rounded-full border-2  flex items-center justify-center",
};

const radio = cva(styles.base, {
  variants: {
    variant: {
      done: "bg-[#4fb06d] border-[#4fb06d] ",
      pending: "bg-[#2e475d] border-[#2e475d]  ",
      updating: "bg-white ",
    },
  },
});

export default function Radio(props: RadioProps) {
  const { label, className, variant } = props;

  return (
    <div className={radio({ variant, className: clsx(className) })}>
      {variant === "done" && (
        <MaterialIcon name='check' color='text-primary' size={10} />
      )}
      {variant === "pending" && (
        <MaterialIcon name='close' color='text-black' size={10} />
      )}
      {variant === "updating" && (
        <MaterialIcon name='noise_control_off' color='text-black' size={10} />
      )}
    </div>
  );
}
