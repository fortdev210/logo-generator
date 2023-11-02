import type { SVGProps } from "react";

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m4 6 4 4 4-4'
      stroke='currentColor'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ChevronDown;
