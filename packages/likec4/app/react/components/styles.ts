import { createTheme, type MantineTheme } from '@mantine/core'
import { useColorScheme as usePreferredColorScheme } from '@mantine/hooks'
import { useIsomorphicLayoutEffect } from '@react-hookz/web'
import { useEffect, useState } from 'react'
import { isString } from 'remeda'
import fontCss from '../../webcomponent/font.css?inline'
import { cssRoot } from './styles.css'

// Also used by MantineProvider as cssVariablesSelector
export const ShadowRootCssSelector = `.${cssRoot}`

declare const __likec4styles: Map<string, string>
declare const __USE_SHADOW_STYLE__: boolean
declare const SHADOW_STYLE: string

const bundledStyles = () => {
  let BundledStyles
  if (__USE_SHADOW_STYLE__) {
    BundledStyles = SHADOW_STYLE
  } else {
    BundledStyles = [
      ...Array.from(__likec4styles.values()),
      // vanilla-extract in transform mode
      ...Array.from(document.querySelectorAll(`style[data-package="likec4"][data-file$=".css.ts"]`)).map((style) => {
        return style.textContent
      })
    ].filter(isString).join('\n')
  }
  // return BundledStyles
  return BundledStyles.replaceAll('body {', `${ShadowRootCssSelector}{`)
    .replaceAll('body{', `${ShadowRootCssSelector}{`)
    .replaceAll(':root', `${ShadowRootCssSelector}`)
}

const createStyleSheet = () => {
  const bundledCSS = new CSSStyleSheet()
  bundledCSS.replaceSync(bundledStyles())
  return bundledCSS
}

export const useCreateStyleSheet = (injectFontCss: boolean) => {
  useIsomorphicLayoutEffect(() => {
    if (injectFontCss && !document.querySelector(`style[data-likec4-font]`)) {
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      style.setAttribute('data-likec4-font', '')
      style.appendChild(document.createTextNode(fontCss))
      document.head.appendChild(style)
    }
  }, [injectFontCss])

  return createStyleSheet
}

const getComputedBodyColorScheme = (): ColorScheme | undefined => {
  try {
    const colorScheme = window.getComputedStyle(document.body).colorScheme
    if (colorScheme === 'light' || colorScheme === 'dark') {
      return colorScheme
    }
  } catch (_e) {
    // noop
  }
  return undefined
}

type ColorScheme = 'light' | 'dark'
export const useColorScheme = (explicit?: ColorScheme) => {
  const [current, setCurrent] = useState<ColorScheme | undefined>(explicit)
  useEffect(() => {
    if (explicit) {
      return
    }
    const computed = getComputedBodyColorScheme()
    if (computed && computed !== current) {
      setCurrent(computed)
    }
  })
  const preferred = usePreferredColorScheme(explicit, {
    getInitialValueInEffect: true
  })
  return explicit ?? current ?? preferred
}

export const theme = createTheme({
  primaryColor: 'indigo',
  cursorType: 'pointer',
  defaultRadius: 'sm',
  fontFamily: 'var(--likec4-default-font-family)',
  headings: {
    fontWeight: '500',
    sizes: {
      h1: {
        // fontSize: '2rem',
        fontWeight: '600'
      },
      h2: {
        fontWeight: '500'
        // fontSize: '1.85rem',
      }
    }
  }
}) as MantineTheme
