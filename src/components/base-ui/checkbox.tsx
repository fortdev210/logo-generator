import clsx from "clsx";
import type { InputHTMLAttributes } from "react";
import { useEffect, useRef } from "react";

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
  label?: string | React.ReactNode;
}

const CheckBox = ({
  label,
  className,
  indeterminate,
  ...props
}: CheckBoxProps) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef?.current && indeterminate)
      checkboxRef.current.indeterminate = true;
  }, [indeterminate]);

  return (
    <div className='flex items-center gap-2'>
      <input
        type={"checkbox"}
        ref={checkboxRef}
        className={clsx(
          " peer h-4 w-4 rounded-full border-2   outline-none focus:ring-0 focus:ring-transparent",
          className,
          props.disabled
            ? "border-primary bg-tertiary text-tertiary"
            : "border-tertiary text-accent"
        )}
        {...props}
      />
      {label && (
        <label
          htmlFor={props.id}
          className='text-150 peer-disabled:text-tertiary'
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
