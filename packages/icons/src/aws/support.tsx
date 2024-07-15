import type { SVGProps } from 'react'
const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} {...props}>
    <defs>
      <linearGradient id="Support_svg__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#2E27AD" />
        <stop offset="100%" stopColor="#527FFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#Support_svg__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M56.5 59.453c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m0-9a5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.468 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.468-5.5-5.5-5.5m10.236 6.539-.833-.048a1.01 1.01 0 0 0-1.032.778 8.7 8.7 0 0 1-1.129 2.725 1 1 0 0 0 .18 1.279l.622.556-1.704 1.704-.552-.619a1 1 0 0 0-1.28-.18 8.7 8.7 0 0 1-2.727 1.13 1 1 0 0 0-.778 1.033l.047.827h-2.409l.047-.828a1 1 0 0 0-.778-1.033 8.7 8.7 0 0 1-2.725-1.131 1 1 0 0 0-1.281.18l-.553.621-1.705-1.704.621-.554a1 1 0 0 0 .179-1.28 8.7 8.7 0 0 1-1.128-2.725 1.03 1.03 0 0 0-1.032-.779l-.831.048v-2.411l.835.048c.465.015.924-.3 1.032-.777a8.7 8.7 0 0 1 1.13-2.721 1 1 0 0 0-.18-1.281l-.626-.559 1.705-1.704.558.626a1 1 0 0 0 1.279.179 8.7 8.7 0 0 1 2.722-1.126 1 1 0 0 0 .778-1.032l-.047-.838h2.41l-.048.839a1 1 0 0 0 .777 1.032c.965.218 1.88.597 2.721 1.127.41.26.954.186 1.279-.18l.56-.627 1.705 1.704-.625.558a1 1 0 0 0-.179 1.28c.53.838.909 1.754 1.128 2.721.108.478.562.794 1.032.779l.835-.048zm1.687-4.197a1 1 0 0 0-.743-.271l-1.08.062a10.7 10.7 0 0 0-.742-1.787l.808-.72a1 1 0 0 0 .041-1.453l-3.201-3.202a.95.95 0 0 0-.735-.292 1 1 0 0 0-.718.334l-.724.811a10.6 10.6 0 0 0-1.783-.74l.061-1.084a1 1 0 0 0-.998-1.057h-4.527a1 1 0 0 0-.998 1.057l.062 1.083q-.927.288-1.786.739l-.722-.81a1.005 1.005 0 0 0-1.453-.041l-3.202 3.202a1.002 1.002 0 0 0 .041 1.453l.81.722a10.7 10.7 0 0 0-.741 1.785l-1.081-.062a.98.98 0 0 0-.743.271 1 1 0 0 0-.314.727v4.528a1.002 1.002 0 0 0 1.057.999l1.076-.062q.288.928.741 1.79l-.805.717a1 1 0 0 0-.041 1.453l3.202 3.201c.194.195.475.303.735.293.275-.008.534-.129.718-.334l.717-.804q.862.453 1.79.742l-.061 1.075a1 1 0 0 0 .998 1.057h4.527a1.001 1.001 0 0 0 .998-1.058l-.061-1.072a10.7 10.7 0 0 0 1.791-.742l.716.802a1 1 0 0 0 .718.334.97.97 0 0 0 .735-.293l3.201-3.201a1 1 0 0 0-.041-1.453l-.806-.719q.452-.861.741-1.788l1.079.062a1 1 0 0 0 1.056-.999v-4.528a1 1 0 0 0-.313-.727M30.11 32.953c0-4.136 3.365-7.5 7.5-7.5 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-4.135 0-7.5-3.364-7.5-7.5m6.913 32.409-11.806-6.373.307.004c.121-9.264 5.586-16.521 12.444-16.521 2.573 0 5.046 1.086 7.152 3.14l1.397-1.432c-1.336-1.303-2.81-2.264-4.367-2.885a9.5 9.5 0 0 0 4.96-8.342c0-5.238-4.261-9.5-9.5-9.5s-9.5 4.262-9.5 9.5c0 3.712 2.146 6.925 5.256 8.487-5.473 2.347-9.427 8.786-9.798 16.659L14 52.933V26.427l23.6-12.164L60 26.412v14.936h2V25.222L37.623 12 12 25.208v28.919l24.977 13.482 5.46-2.655-.875-1.798z"
      />
    </g>
  </svg>
)
export default SvgSupport
