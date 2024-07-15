import type { SVGProps } from 'react'
const SvgRider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <linearGradient id="Rider_svg__a" x1={94.33} x2={20.33} y1={59.37} y2={16.91} gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#dd1265" />
      <stop offset={0.48} stopColor="#dd1265" />
      <stop offset={0.94} stopColor="#fdb60d" />
    </linearGradient>
    <linearGradient id="Rider_svg__b" x1={50.33} x2={79.66} y1={12.76} y2={93.76} gradientUnits="userSpaceOnUse">
      <stop offset={0.14} stopColor="#087cfa" />
      <stop offset={0.48} stopColor="#dd1265" />
      <stop offset={0.96} stopColor="#087cfa" />
    </linearGradient>
    <linearGradient id="Rider_svg__c" x1={28.36} x2={50.02} y1={15.26} y2={92.26} gradientUnits="userSpaceOnUse">
      <stop offset={0.28} stopColor="#dd1265" />
      <stop offset={0.97} stopColor="#fdb60d" />
    </linearGradient>
    <path fill="url(#Rider_svg__a)" d="M122.514 50.871 40.472 5.339l54.93 81.615 11.288-7.4z" />
    <path
      fill="url(#Rider_svg__b)"
      d="M89.783 32.305 79.506 7.18 56.771 29.562l9.301 81.213L88.1 122.368l34.414-20.102z"
    />
    <path fill="url(#Rider_svg__c)" d="M40.472 5.339 5.486 28.904l13.007 80.372 33.548 12.898 43.362-35.218z" />
    <path d="M27.429 27.429h73.143v73.143H27.429z" />
    <path
      fill="#fff"
      d="M36.547 86.747h27.429v4.571H36.547zm.024-50.273h12.556a10.97 10.97 0 0 1 8.009 2.792 8.63 8.63 0 0 1 2.365 6.29v.073a8.53 8.53 0 0 1-5.9 8.533l6.729 9.826h-7.083l-5.888-8.802h-4.692v8.802h-6.095zm12.19 13.41c2.95 0 4.645-1.573 4.645-3.889v-.073c0-2.597-1.804-3.938-4.754-3.938h-5.985v7.899zm15.762-13.41h10.728c8.643 0 14.629 5.937 14.629 13.678v.085c0 7.741-5.973 13.751-14.629 13.751H64.523zm6.095 5.461v16.579h4.681a7.84 7.84 0 0 0 8.29-8.216v-.073a7.91 7.91 0 0 0-8.29-8.302z"
    />
  </svg>
)
export default SvgRider
