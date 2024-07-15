import type { SVGProps } from 'react'
const SvgSimpleStorageService = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} {...props}>
    <defs>
      <linearGradient id="Simple-Storage-Service_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Simple-Storage-Service_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m60.836 42.893.384-2.704c3.54 2.12 3.587 2.997 3.586 3.02-.006.006-.61.51-3.97-.316m-1.943-.54C52.773 40.5 44.25 36.59 40.8 34.96q.002-.02.004-.041a2.406 2.406 0 0 0-2.404-2.403 2.406 2.406 0 0 0-2.402 2.403 2.406 2.406 0 0 0 2.402 2.403c.582 0 1.11-.217 1.527-.562 4.058 1.92 12.515 5.774 18.68 7.594L56.17 61.56a1 1 0 0 0-.01.14c0 1.516-6.707 4.299-17.666 4.299-11.075 0-17.853-2.783-17.853-4.298q0-.069-.01-.136l-5.093-37.207c4.409 3.035 13.892 4.64 22.962 4.64 9.056 0 18.523-1.6 22.94-4.625zM15 20.478C15.072 19.162 22.634 14 38.5 14c15.864 0 23.427 5.16 23.5 6.478v.449C61.13 23.877 51.33 27 38.5 27c-12.852 0-22.657-3.132-23.5-6.087zm49 .022c0-3.465-9.934-8.5-25.5-8.5S13 17.035 13 20.5l.094.754 5.548 40.524C18.775 66.31 30.86 68 38.494 68c9.472 0 19.535-2.178 19.665-6.22l2.396-16.896c1.333.319 2.43.482 3.31.482 1.184 0 1.984-.29 2.469-.867a1.95 1.95 0 0 0 .436-1.66c-.26-1.383-1.902-2.875-5.248-4.784l2.376-16.762z"
      />
    </g>
  </svg>
)
export default SvgSimpleStorageService
