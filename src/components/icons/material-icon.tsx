import clsx from "clsx";
import React, { CSSProperties, HTMLProps } from "react";

export interface IconProps extends HTMLProps<HTMLDivElement> {
  /**
   * Name of icon in material icons.
   */
  name: string;

  /**
   * Color of icon. Tailwind text color. text-gray-500
   */
  color?: string;

  /**
   * Classname.
   */
  className?: string;

  /**
   * Set material ui icon type. It can set the material ui icon type.
   */
  type?: "filled" | "outlined" | "round" | "sharp" | "twotone";

  /**
   * Icon size.
   */
  size?: number;

  style?: CSSProperties;
}

const styles = {
  base: "flex items-center ",
};

export const MaterialIcon: React.FC<IconProps> = (props: IconProps) => {
  const { type, name, color, size, onClick, className, ...rest } = props;

  let classNameForType = "material-icons";

  switch (type) {
    case "filled":
      classNameForType = "material-icons";
      break;
    case "outlined":
      classNameForType = "material-icons-outlined";
      break;
    case "round":
      classNameForType = "material-icons-round";
      break;
    case "sharp":
      classNameForType = "material-icons-sharp";
      break;
    case "twotone":
      classNameForType = "material-icons-two-tone";
      break;
  }

  const cursor =
    typeof onClick === "undefined" ? "cursor-default" : "cursor-pointer";

  return (
    <div
      data-testid={`icon-${name}`}
      className={clsx(styles.base, cursor, className)}
      onClick={onClick}
      {...rest}
    >
      <span
        className={clsx(classNameForType, color)}
        style={{ fontSize: `${size}px` }}
      >
        {name}
      </span>
    </div>
  );
};

export default MaterialIcon;
