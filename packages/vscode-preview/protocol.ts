import type {
  AutoLayoutDirection,
  DiagramView,
  ElementShape,
  Fqn,
  NonEmptyArray,
  RelationID,
  ThemeColor,
  ViewID,
  ViewRuleAutoLayout
} from '@likec4/core'
import type { NotificationType, RequestType } from 'vscode-messenger-common'

export namespace ExtensionToPanel {
  export const diagramUpdate: NotificationType<{ view: DiagramView }> = { method: 'diagramUpdate' }
  export const error: NotificationType<{ error: string }> = { method: 'error' }
  export const getHoveredElement: RequestType<never, { elementId: Fqn | null }> = {
    method: 'getHoveredElement'
  }
}

export namespace WebviewToExtension {
  export const imReady: NotificationType<never> = { method: 'imReady' }
  export const openView: NotificationType<{ viewId: ViewID }> = { method: 'openView' }
  export const closeMe: NotificationType<never> = { method: 'closeMe' }

  export namespace Changes {
    export interface ChangeColor {
      viewId: ViewID
      op: 'change-color'
      color: ThemeColor
      targets: NonEmptyArray<Fqn>
    }

    export interface ChangeShape {
      viewId: ViewID
      op: 'change-shape'
      shape: ElementShape
      targets: NonEmptyArray<Fqn>
    }

    export interface ChangeAutoLayout {
      viewId: ViewID
      op: 'change-autolayout'
      layout: AutoLayoutDirection
    }
  }

  export type ChangeCommand =
    | Changes.ChangeColor
    | Changes.ChangeShape
    | Changes.ChangeAutoLayout

  export const onChange: NotificationType<{ change: ChangeCommand }> = { method: 'onChange' }

  export type LocateParams =
    | {
      element: Fqn
      relation?: never
      view?: never
    }
    | {
      relation: RelationID
      element?: never
      view?: never
    }
    | {
      view: ViewID
      relation?: never
      element?: never
    }
  export const locate: NotificationType<LocateParams> = { method: 'locate' }
}
