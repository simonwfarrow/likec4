import type { SVGProps } from 'react'
const SvgCloudMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} {...props}>
    <defs>
      <linearGradient id="Cloud-Map_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Cloud-Map_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M37.929 48.883h5.074v-5.059H37.93zm6.074-7.082h-7.074c-.553 0-1 .453-1 1.012v7.082c0 .558.447 1.011 1 1.011h7.074c.553 0 1-.453 1-1.011v-7.082c0-.559-.447-1.012-1-1.012m13.926 15.176-7.927-.009v-11.12h15.803c.124.62.195 1.292.195 2.023 0 7.912-7.354 9.018-8.07 9.106m-36.12-.3 9.196-8.53v8.801l-7.955-.009a11 11 0 0 1-1.24-.263m-7.807-9.142.005-.273c0-4.541 2.063-7.399 6.127-8.496h10.87v1.564L16.353 53.304c-1.355-1.553-2.221-3.463-2.347-5.498-.008-.122-.005-.188-.003-.27m14.823-23.483a12.7 12.7 0 0 1 2.18-.705v7.325h-8.71c1.4-2.898 3.802-5.451 6.53-6.62m9.179 29.89h5v3.018l-5-.005zm22.325-16.618-.656 1.912c1.678.59 4.157 1.89 5.456 4.588H49.002c-.552 0-1 .454-1 1.012v12.13l-3-.004V52.93c0-.559-.446-1.012-.999-1.012h-7c-.551 0-.999.453-.999 1.012v4.023l-3-.003V45.848c0-.4-.234-.765-.596-.927a.99.99 0 0 0-1.08.181L19.703 55.886a11 11 0 0 1-1.882-1.194L32.662 41.55a1 1 0 0 0 .342-.76v-3.036c0-.558-.447-1.012-1-1.012H20.987l.006-.232c.007-.222.014-.44.014-.64 0-1.042.184-2.115.502-3.174h10.497c.552 0 1-.454 1-1.012v-8.621c1.005-.059 2.01.01 3 .203v16.511c0 .559.447 1.012.999 1.012h6.999c.553 0 1-.453 1-1.012v-6.07h-2v5.059h-5V23.832c1.892.71 3.691 1.882 5.292 3.508l1.416-1.429c-4.713-4.784-10.944-6.175-16.666-3.722-5.068 2.172-9.039 8.182-9.039 13.681 0 .178-.007.373-.013.57q-.01.279-.015.56c-2.908.96-6.97 3.511-6.97 10.262l-.005.21a5 5 0 0 0 .006.462c.34 5.468 4.996 10.205 10.834 11.02q.067.009.136.009l13.916.015c.037.004.07.022.109.022h6.999c.026 0 .047-.013.073-.015l13.91.015q.05 0 .101-.005c.1-.01 9.913-1.138 9.913-11.124 0-7.086-5.364-9.737-7.671-10.547m-9.327-7.664c0-1.002 1.01-2.023 2-2.023s2 1.02 2 2.023-1.01 2.024-2 2.024-2-1.021-2-2.024m6 0c0-2.117-1.906-4.046-4-4.046s-4 1.929-4 4.046 1.906 4.047 4 4.047 4-1.93 4-4.047m-4-5.058c2.85 0 5 2.174 5 5.058 0 2.21-3.1 7.424-5 10.337-1.9-2.912-5-8.125-5-10.337 0-2.884 2.15-5.058 5-5.058m0 18.21a1 1 0 0 0 .82-.431C54.454 41.465 60 33.329 60 29.66c0-4.038-3.01-7.083-7-7.083-3.989 0-6.998 3.045-6.998 7.082 0 3.669 5.547 11.805 6.18 12.72.186.27.493.433.819.433"
      />
    </g>
  </svg>
)
export default SvgCloudMap
