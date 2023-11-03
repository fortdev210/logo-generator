import React from "react";
import clsx from "clsx";

export const styles = {
  variant: {
    h1: "font-racife font-bold text-[34px] leading-[41px] tracking-tight ",
    h2: "font-racife font-bold text-[26px] leading-[31px] ",
    h3: "font-racife font-bold text-lg leading-[22px] ",
    body1: "font-gotham text-base leading-4 ",
    body: "font-gotham text-[15px] leading-[18px] ",
    caption1: "font-gotham text-sm leading-3 ",
    caption: "font-gotham text-[13px] leading-3 ",
    cta: "font-gotham text-[20px] font-medium  ",
    navbar: "font-gotham text-[11px] font-medium ",
  },
};

export interface TypographyProps {
  /**
   * Define variant of the typography.
   */
  variant: keyof typeof styles.variant;

  /**
   * Classname.
   */
  className?: string;

  /**
   * Text content.
   */
  text: string;

  style?: React.CSSProperties;
}

export const Typography = ({
  className,
  variant,
  text,
  style,
}: TypographyProps) => {
  const classes = clsx(styles.variant[variant], className);
  return (
    <p className={classes} style={style}>
      {text}
    </p>
  );
};
