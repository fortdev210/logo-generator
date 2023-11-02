import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

import { ChevronDown } from "@/assets/svg";

type Option = {
  value: string;
  title: string;
};
interface InputProps {
  label: string;
  options: Option[];
  onOptionChange: (selectedOption: Option) => void;
  disabled?: boolean;
  className?: string;
  initialValue?: Option;
  optionClassName?: string;
  fullWidth?: boolean;
}

const Select = ({
  label,
  className,
  options,
  disabled,
  initialValue,
  optionClassName,
  onOptionChange,
  fullWidth,
}: InputProps) => {
  const [option, setOption] = useState(initialValue ?? options[0]);

  const handleOnSelect = (value: Option) => {
    setOption(value);
    onOptionChange(value);
  };
  return (
    <div
      className={
        fullWidth ? "relative w-full space-y-1" : "relative w-fit space-y-1"
      }
    >
      <label className='block text-150 text-secondary'>{label}</label>
      <Listbox
        as={"div"}
        value={option}
        onChange={handleOnSelect}
        className='relative mt-1'
      >
        <Listbox.Button
          className={clsx(
            "flex h-8 w-full shrink-0 gap-1 rounded-lg border-1 border-on-elevated p-2 text-150 shadow-elevation-small outline-none focus:ring-2 ",
            disabled && "border-primary bg-quaternary text-tertiary",
            className
          )}
        >
          <span className='block flex-1 truncate text-left'>
            {option?.title}
          </span>

          <ChevronDown aria-hidden='true' />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className={clsx(
              "absolute right-0  z-10 max-h-60 w-full min-w-fit overflow-auto rounded-lg bg-white  text-150 shadow-elevation-small ring-1 ring-focus-ring/5 focus:outline-none",
              optionClassName
            )}
          >
            {options.map((person) => (
              <Listbox.Option
                key={person.value}
                className='relative cursor-default select-none px-4 py-2 hover:bg-tertiary'
                value={person}
              >
                {({ selected }) => (
                  <span
                    className={clsx(
                      "block truncate",
                      selected && "text-accent"
                    )}
                  >
                    {person.title}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
export default Select;
