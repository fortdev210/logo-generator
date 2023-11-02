import type { SVGProps } from "react";

const Loading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M8 1.25A6.75 6.75 0 1 1 1.25 8'
        stroke='currentColor'
        strokeWidth={1.2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='currentColor' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default Loading;
