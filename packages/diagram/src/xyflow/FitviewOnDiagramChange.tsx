import { useDebouncedEffect } from '@react-hookz/web'
import { shallowEqual } from 'fast-equals'
import { useRef, useState } from 'react'
import { type DiagramState, type DiagramStoreApi, useDiagramState, useDiagramStoreApi } from '../hooks/useDiagramState'
import { useXYStore } from '../hooks/useXYFlow'

function selectXYFlowSize(state: { width: number; height: number }): string {
  return `${Math.round(state.width)}:${Math.round(state.height)}`
}

function selectDiagramsize({ view, fitViewPadding }: DiagramState) {
  return [
    view.bounds.x,
    view.bounds.y,
    view.bounds.width,
    view.bounds.height,
    fitViewPadding
  ].map(Math.round).join(':')
}

function FitViewOnViewportResize({ diagramApi }: {
  diagramApi: DiagramStoreApi
}) {
  const xyflowsize = useXYStore(selectXYFlowSize)
  const viewsize = useDiagramState(selectDiagramsize)
  const dimensions = xyflowsize + viewsize
  const prevDimensionsRef = useRef(dimensions)

  useDebouncedEffect(
    () => {
      const { focusedNodeId, fitDiagram } = diagramApi.getState()
      if (focusedNodeId || prevDimensionsRef.current === dimensions) {
        return
      }
      prevDimensionsRef.current = dimensions
      fitDiagram(250)
    },
    [dimensions, diagramApi],
    250
  )

  return null
}

function selector({ view, activeWalkthrough, viewportChanged, fitViewPadding }: DiagramState) {
  return {
    layoutId: view.id + '_' + view.autoLayout + '_' + fitViewPadding,
    isActiveWalkthrough: !!activeWalkthrough,
    viewportNotMoved: !viewportChanged
  }
}

/**
 * Fits the view when diagram changes
 */
export function FitViewOnDiagramChange() {
  const {
    layoutId,
    isActiveWalkthrough,
    viewportNotMoved
  } = useDiagramState(selector, shallowEqual)
  const diagramApi = useDiagramStoreApi()
  const [currentLayoutId, setCurrent] = useState(layoutId)

  const requiresFit = layoutId !== currentLayoutId

  useDebouncedEffect(
    () => {
      if (layoutId === currentLayoutId) {
        return
      }
      setCurrent(layoutId)
      diagramApi.getState().fitDiagram(450)
    },
    [requiresFit, diagramApi],
    50
  )

  if (viewportNotMoved && !isActiveWalkthrough && !requiresFit) {
    return <FitViewOnViewportResize diagramApi={diagramApi} />
  }
  return null
}
