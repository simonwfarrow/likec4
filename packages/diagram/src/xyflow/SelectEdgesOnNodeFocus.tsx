import { nonNullable } from '@likec4/core'
import { useHotkeys } from '@mantine/hooks'
import type { EdgeChange, NodeChange } from '@xyflow/react'
import { getBoundsOfRects, getViewportForBounds } from '@xyflow/system'
import { useUpdateEffect } from '../hooks'
import { useDiagramState, useDiagramStoreApi } from '../hooks/useDiagramState'
import type { XYFlowEdge, XYFlowNode } from './types'
import { nodeToRect } from './utils'

export function SelectEdgesOnNodeFocus() {
  const diagramStore = useDiagramStoreApi()
  const focusedNodeId = useDiagramState(s => s.focusedNodeId)

  useUpdateEffect(() => {
    if (!focusedNodeId) {
      diagramStore.getState().xystore.getState().resetSelectedElements()
      return
    }
    const container = diagramStore.getState().getContainer()
    if (!container) {
      return
    }
    const { width, height } = container.getBoundingClientRect()

    const edgeChanges = [] as EdgeChange<XYFlowEdge>[]
    const nodeChanges = [] as NodeChange<XYFlowNode>[]
    const {
      edgeLookup,
      nodeLookup,
      panZoom,
      transform,
      triggerNodeChanges,
      triggerEdgeChanges
    } = diagramStore.getState().xystore.getState()

    let focusBounds = nodeToRect(nonNullable(nodeLookup.get(focusedNodeId)))

    for (const [, edge] of edgeLookup) {
      if (edge.source === focusedNodeId || edge.target === focusedNodeId) {
        const anotherNodeId = edge.source === focusedNodeId ? edge.target : edge.source
        const nd = nonNullable(nodeLookup.get(anotherNodeId))
        focusBounds = getBoundsOfRects(focusBounds, nodeToRect(nd))
      }
      if (edge.selected) {
        edgeChanges.push({
          id: edge.id,
          type: 'select',
          selected: false
        })
      }
    }
    for (const [, node] of nodeLookup) {
      if (node.selected && node.id !== focusedNodeId) {
        nodeChanges.push({
          id: node.id,
          type: 'select',
          selected: false
        })
      }
    }
    nodeChanges.push({
      id: focusedNodeId,
      type: 'select',
      selected: true
    })
    if (edgeChanges.length > 0) {
      triggerEdgeChanges(edgeChanges)
    }
    triggerNodeChanges(nodeChanges)

    const maxZoom = Math.max(1, transform[2])
    const viewport = getViewportForBounds(
      {
        x: focusBounds.x - 16,
        y: focusBounds.y - 16,
        width: focusBounds.width + 32,
        height: focusBounds.height + 32
      },
      width,
      height,
      0.1,
      maxZoom,
      0
    )
    panZoom?.setViewport(viewport, {
      duration: 350
    })
  }, [focusedNodeId])

  useHotkeys(
    focusedNodeId !== null
      ? [
        ['Escape', (e) => {
          e.stopImmediatePropagation()
          const { xystore, fitDiagram } = diagramStore.getState()
          fitDiagram()
          xystore.getState().resetSelectedElements()
        }, { preventDefault: true }]
      ]
      : []
  )

  return null
}
