import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import { Loading } from "@/assets/svg";

const button = cva(
  "rounded-lg relative border  text-150 flex items-center gap-1 focus:ring-2 focus:ring-focus-ring outline-none shrink-0",
  {
    variants: {
      variant: {
        primary: " text-white border-transparent",
        secondary: "bg-secondary text-primary border-transparent",
        tertiary:
          "bg-white text-primary border-transparent hover:border-primary",
        negative: "bg-negative text-white border-transparent",
        "negative-light": "bg-negative-light text-negative border-transparent",
        positive: "bg-positive text-white border-transparent",
        "positive-light": "bg-positive-light text-positive border-transparent",
        gold: "bg-[#FBF6EA] text-[#A17305] border-transparent",
        pink: "bg-[#FEF1FE] text-[#D524D5]",
      },
      modifier: {
        plain: "border-transparent",
      },
      size: {
        small: " px-2 py-1 ",
        regular: "px-3 py-2",
        large: "p-4 gap-2",
      },
      disabled: {
        true: " text-tertiary border-transparent cursor-not-allowed",
        false: "",
      },
      reverse: {
        true: " flex-row-reverse",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: true,
        className: "bg-secondary",
      },
      {
        variant: "primary",
        disabled: false,
        className: "bg-accent",
      },
      {
        variant: "secondary",
        disabled: true,
        className: "bg-secondary",
      },
      {
        variant: "tertiary",
        disabled: true,
        className: "bg-white",
      },
      {
        variant: "pink",
        modifier: undefined,
        className: "border-[#FCD4FC]",
      },
    ],
    defaultVariants: {
      size: "regular",
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}
const Button = ({
  children,
  icon,
  variant,
  modifier,
  reverse,
  size,
  className,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={button({
        variant,
        modifier,
        size,
        reverse,
        disabled,
        className: clsx(
          className,
          loading && "border-transparent text-transparent"
        ),
      })}
      disabled={disabled || loading}
      {...props}
    >
      {icon}
      {children}

      {loading && (
        <span className=' absolute-center '>
          <Loading
            className={clsx(
              "animate-spin",
              variant === "primary" ? "text-white" : "text-primary"
            )}
          />
        </span>
      )}
    </button>
  );
};
export default Button;
