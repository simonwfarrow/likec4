import { fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { mantine } from '../../mantine.css'
import { vars } from '../../theme.css'

export const panel = style({
  top: fallbackVar(vars.navigationPanel.top, '1rem'),
  left: fallbackVar(vars.navigationPanel.left, '1rem'),
  margin: 0
})

globalStyle(`.likec4-top-left-panel .action-icon`, {
  vars: {
    ['--ai-size']: 'var(--ai-size-lg)'
  }
})
globalStyle(`.likec4-top-left-panel .action-icon .tabler-icon`, {
  width: '70%',
  height: '70%'
})

export const autolayoutIcon = style({})

globalStyle(`${autolayoutIcon} .tabler-icon`, {
  width: '75%',
  height: '75%'
})

export const autolayoutIndicator = style({
  background: mantine.colors.gray[2],
  borderRadius: mantine.radius.sm,
  border: `1px solid ${mantine.colors.gray[3]}`,
  selectors: {
    [`:where([data-mantine-color-scheme="dark"]) &`]: {
      background: mantine.colors.dark[5],
      border: `1px solid ${mantine.colors.dark[4]}`
    }
  }
})
