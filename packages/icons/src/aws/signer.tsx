import type { SVGProps } from 'react'
const SvgSigner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} {...props}>
    <defs>
      <linearGradient id="Signer_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Signer_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M44.836 51.639c.092.45.354.837.738 1.09.383.254.841.343 1.293.249.45-.092.837-.354 1.09-.737a1.7 1.7 0 0 0 .249-1.294 1.7 1.7 0 0 0-.738-1.09 1.7 1.7 0 0 0-1.293-.249c-.45.092-.837.354-1.09.738a1.7 1.7 0 0 0-.249 1.293m14.586-6.631L47.77 37.324 37 45.605v18.087l6.662-10.043a3.7 3.7 0 0 1-.786-1.608 3.7 3.7 0 0 1 .539-2.796 3.7 3.7 0 0 1 2.358-1.597 3.7 3.7 0 0 1 2.796.539 3.7 3.7 0 0 1 1.597 2.358 3.7 3.7 0 0 1-.539 2.796 3.7 3.7 0 0 1-2.358 1.597 3.7 3.7 0 0 1-.755.077 3.7 3.7 0 0 1-1.216-.215l-6.65 10.026 16.936-7.036zm2.064.276c-.021.026-.053.037-.077.061l-4.046 13.474a1 1 0 0 1-.574.636l-20.405 8.476a1 1 0 0 1-.384.077H12v-2h23V45.112c0-.31.145-.603.391-.793l11.666-8.97.007.01 6.509-12.81 1.784.906-6.272 12.34 11.413 7.526 5.941-7.392 1.558 1.252zm-.768-32.378L58.935 12l-4.429 8.714 1.783.906zM24.943 33.03za1 1 0 0 0 .724-.31l8.721-9.166-1.449-1.379-7.998 8.405-3.64-3.818-1.447 1.379 4.365 4.579c.188.198.45.31.723.31M14 27.508a2.35 2.35 0 0 0 1.884 2.299 1 1 0 0 1 .768.714c.249.901.607 1.763 1.062 2.561a1 1 0 0 1-.016 1.019 2.3 2.3 0 0 0-.352 1.215 2.35 2.35 0 0 0 2.346 2.346 2.3 2.3 0 0 0 1.216-.353 1 1 0 0 1 1.019-.015c.8.456 1.66.814 2.559 1.062.365.1.642.397.715.768a2.35 2.35 0 0 0 2.299 1.884 2.35 2.35 0 0 0 2.299-1.884 1 1 0 0 1 .715-.768 11.2 11.2 0 0 0 2.559-1.062 1 1 0 0 1 1.019.015 2.3 2.3 0 0 0 1.216.353 2.35 2.35 0 0 0 2.346-2.346 2.3 2.3 0 0 0-.352-1.215 1 1 0 0 1-.016-1.019c.455-.798.813-1.66 1.062-2.561a1 1 0 0 1 .768-.714A2.35 2.35 0 0 0 41 27.508a2.35 2.35 0 0 0-1.884-2.299 1 1 0 0 1-.768-.714c-.249-.9-.607-1.762-1.062-2.561a1 1 0 0 1 .016-1.019c.234-.38.352-.789.352-1.214a2.35 2.35 0 0 0-2.346-2.347 2.3 2.3 0 0 0-1.216.353c-.312.19-.701.196-1.019.015a11.2 11.2 0 0 0-2.559-1.062 1 1 0 0 1-.715-.768 2.35 2.35 0 0 0-2.299-1.884 2.35 2.35 0 0 0-2.299 1.884 1 1 0 0 1-.715.768 11.2 11.2 0 0 0-2.559 1.062 1 1 0 0 1-1.019-.015 2.3 2.3 0 0 0-1.216-.353 2.35 2.35 0 0 0-2.346 2.347c0 .425.118.834.352 1.214a1 1 0 0 1 .016 1.019 11.2 11.2 0 0 0-1.062 2.561 1 1 0 0 1-.768.714A2.35 2.35 0 0 0 14 27.508m-2 0a4.36 4.36 0 0 1 2.889-4.094q.333-1.03.825-1.985a4.3 4.3 0 0 1-.368-1.728 4.35 4.35 0 0 1 4.346-4.347c.592 0 1.18.126 1.728.368a13 13 0 0 1 1.987-.826 4.36 4.36 0 0 1 4.093-2.888 4.36 4.36 0 0 1 4.093 2.888q1.031.333 1.987.826a4.3 4.3 0 0 1 1.728-.368 4.35 4.35 0 0 1 4.346 4.347c0 .592-.126 1.18-.368 1.728q.492.954.825 1.985A4.36 4.36 0 0 1 43 27.508a4.36 4.36 0 0 1-2.889 4.094 13 13 0 0 1-.825 1.986c.242.548.368 1.135.368 1.728a4.35 4.35 0 0 1-4.346 4.346c-.592 0-1.18-.126-1.728-.368q-.956.492-1.987.826a4.36 4.36 0 0 1-4.093 2.888 4.36 4.36 0 0 1-4.093-2.888 13 13 0 0 1-1.987-.826 4.3 4.3 0 0 1-1.728.368 4.35 4.35 0 0 1-4.346-4.346c0-.593.126-1.18.368-1.728a13 13 0 0 1-.825-1.986A4.36 4.36 0 0 1 12 27.508m10 13.5v11.825l4.712-4.711a1 1 0 0 1 1.414-.001l4.921 4.914-1.414 1.416-4.214-4.208-5.712 5.711a1 1 0 0 1-1.09.217 1 1 0 0 1-.617-.924V41.008z"
      />
    </g>
  </svg>
)
export default SvgSigner
