import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import React from "react";

const input = cva(
  "rounded-lg  border-1 text-150  outline-none focus:ring-2  ",
  {
    variants: {
      variant: {
        regular: "border-accent focus:ring-focus-ring focus:border-transparent",
        ternary:
          "border-transparent placeholder-secondary focus:ring-transparent ",
      },
      size: {
        regular: "p-2 w-64 h-14",
        fit: "w-fit p-2  h-14",
        full: "w-full p-2  h-14",
      },
      disabled: {
        true: " bg-quaternary border-secondary cursor-not-allowed text-tertiary",
      },
    },
    compoundVariants: [
      {
        variant: "regular",
        disabled: undefined,
        className:
          "placeholder-[#2B2B2BB8] border-accent bg-primary border-on-elevated shadow-elevation-small text-primary ",
      },
      {
        variant: "regular",
        disabled: true,
        className:
          "placeholder-[#999999] border-secondary bg-quaternary text-tertiary",
      },
    ],
    defaultVariants: {
      variant: "regular",
      size: "regular",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">,
    VariantProps<typeof input> {
  label?: string;
  containerClass?: string;
  iconL?: JSX.Element;
  iconR?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      iconL,
      iconR,
      disabled,
      size,
      variant,
      className,
      containerClass,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(containerClass, "space-y-1")}>
        {label && (
          <label className='block text-150 text-secondary' htmlFor={props.id}>
            {label}
          </label>
        )}
        <div className='relative'>
          <div className='absolute inset-y-2 ml-2'>{iconL}</div>
          <input
            ref={ref}
            className={input({
              disabled,
              size,
              variant,
              className: clsx(className, iconL && "pl-8"),
            })}
            disabled={disabled ?? false}
            {...props}
          />
          <div className='absolute inset-y-4 right-2 ml-2'>{iconR}</div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
