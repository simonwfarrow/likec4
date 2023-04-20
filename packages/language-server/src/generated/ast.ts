/******************************************************************************
 * This file was generated by langium-cli 1.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import { AstNode, AbstractAstReflection, Reference, ReferenceInfo, TypeMetaData } from 'langium';

export type AnyStringProperty = ElementStringProperty | RelationStringProperty | ViewProperty;

export const AnyStringProperty = 'AnyStringProperty';

export function isAnyStringProperty(item: unknown): item is AnyStringProperty {
    return reflection.isInstance(item, AnyStringProperty);
}

export type AStyleProperty = ColorProperty | ShapeProperty;

export const AStyleProperty = 'AStyleProperty';

export function isAStyleProperty(item: unknown): item is AStyleProperty {
    return reflection.isInstance(item, AStyleProperty);
}

export type ElementExpression = ElementRefExpression | WildcardExpression;

export const ElementExpression = 'ElementExpression';

export function isElementExpression(item: unknown): item is ElementExpression {
    return reflection.isInstance(item, ElementExpression);
}

export type ElementProperty = ElementStringProperty | ElementStyleProperty;

export const ElementProperty = 'ElementProperty';

export function isElementProperty(item: unknown): item is ElementProperty {
    return reflection.isInstance(item, ElementProperty);
}

export type ElementShape = 'browser' | 'cylinder' | 'person' | 'queue' | 'rectangle' | 'storage';

export type Expression = ElementExpression | InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression;

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export type Name = 'element' | 'model' | ElementShape | ThemeColor | string;

export type ThemeColor = 'muted' | 'primary' | 'secondary';

export type View = ElementView;

export const View = 'View';

export function isView(item: unknown): item is View {
    return reflection.isInstance(item, View);
}

export type ViewRule = ViewRuleAutoLayout | ViewRuleExpression | ViewRuleStyle;

export const ViewRule = 'ViewRule';

export function isViewRule(item: unknown): item is ViewRule {
    return reflection.isInstance(item, ViewRule);
}

export type ViewRuleLayoutDirection = 'BottomTop' | 'LeftRight' | 'RightLeft' | 'TopBottom';

export interface ColorProperty extends AstNode {
    readonly $container: ElementStyleProperty | SpecificationElementKindStyle | ViewRuleStyle;
    readonly $type: 'ColorProperty';
    key: 'color'
    value: ThemeColor
}

export const ColorProperty = 'ColorProperty';

export function isColorProperty(item: unknown): item is ColorProperty {
    return reflection.isInstance(item, ColorProperty);
}

export interface Element extends AstNode {
    readonly $container: ElementBody | ExtendElementBody | Model;
    readonly $type: 'Element';
    body?: ElementBody
    kind: Reference<ElementKind>
    name: Name
    props: Array<string>
}

export const Element = 'Element';

export function isElement(item: unknown): item is Element {
    return reflection.isInstance(item, Element);
}

export interface ElementBody extends AstNode {
    readonly $container: Element;
    readonly $type: 'ElementBody';
    elements: Array<Element | Relation>
    props: Array<ElementProperty>
    tags?: Tags
}

export const ElementBody = 'ElementBody';

export function isElementBody(item: unknown): item is ElementBody {
    return reflection.isInstance(item, ElementBody);
}

export interface ElementKind extends AstNode {
    readonly $container: SpecificationElementKind;
    readonly $type: 'ElementKind';
    name: Name
}

export const ElementKind = 'ElementKind';

export function isElementKind(item: unknown): item is ElementKind {
    return reflection.isInstance(item, ElementKind);
}

export interface ElementRef extends AstNode {
    readonly $container: ElementRef | ElementRefExpression | ElementView | Relation | RelationWithSource;
    readonly $type: 'ElementRef';
    el: Reference<Element>
    next?: ElementRef
}

export const ElementRef = 'ElementRef';

export function isElementRef(item: unknown): item is ElementRef {
    return reflection.isInstance(item, ElementRef);
}

export interface ElementRefExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'ElementRefExpression';
    id: ElementRef
    isDescedants: boolean
}

export const ElementRefExpression = 'ElementRefExpression';

export function isElementRefExpression(item: unknown): item is ElementRefExpression {
    return reflection.isInstance(item, ElementRefExpression);
}

export interface ElementStringProperty extends AstNode {
    readonly $container: ElementBody | ElementView | RelationBody;
    readonly $type: 'ElementStringProperty';
    key: 'description' | 'technology' | 'title'
    value: string
}

export const ElementStringProperty = 'ElementStringProperty';

export function isElementStringProperty(item: unknown): item is ElementStringProperty {
    return reflection.isInstance(item, ElementStringProperty);
}

export interface ElementStyleProperty extends AstNode {
    readonly $container: ElementBody | ElementView | RelationBody;
    readonly $type: 'ElementStyleProperty';
    key: 'style'
    props: Array<ColorProperty | ShapeProperty>
}

export const ElementStyleProperty = 'ElementStyleProperty';

export function isElementStyleProperty(item: unknown): item is ElementStyleProperty {
    return reflection.isInstance(item, ElementStyleProperty);
}

export interface ElementView extends AstNode {
    readonly $container: ModelViews;
    readonly $type: 'ElementView';
    name?: Name
    properties: Array<ViewProperty>
    rules: Array<ViewRuleAutoLayout | ViewRuleExpression | ViewRuleStyle>
    viewOf?: ElementRef
}

export const ElementView = 'ElementView';

export function isElementView(item: unknown): item is ElementView {
    return reflection.isInstance(item, ElementView);
}

export interface ExtendElement extends AstNode {
    readonly $container: Model;
    readonly $type: 'ExtendElement';
    body: ExtendElementBody
    element: StrictElementRef
}

export const ExtendElement = 'ExtendElement';

export function isExtendElement(item: unknown): item is ExtendElement {
    return reflection.isInstance(item, ExtendElement);
}

export interface ExtendElementBody extends AstNode {
    readonly $container: ExtendElement;
    readonly $type: 'ExtendElementBody';
    elements: Array<Element | RelationWithSource>
}

export const ExtendElementBody = 'ExtendElementBody';

export function isExtendElementBody(item: unknown): item is ExtendElementBody {
    return reflection.isInstance(item, ExtendElementBody);
}

export interface IncomingExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'IncomingExpression';
    target: ElementExpression
}

export const IncomingExpression = 'IncomingExpression';

export function isIncomingExpression(item: unknown): item is IncomingExpression {
    return reflection.isInstance(item, IncomingExpression);
}

export interface InOutExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'InOutExpression';
    inout: IncomingExpression
}

export const InOutExpression = 'InOutExpression';

export function isInOutExpression(item: unknown): item is InOutExpression {
    return reflection.isInstance(item, InOutExpression);
}

export interface LikeC4Document extends AstNode {
    readonly $type: 'LikeC4Document';
    model?: Model
    specification?: SpecificationRule
    views?: ModelViews
}

export const LikeC4Document = 'LikeC4Document';

export function isLikeC4Document(item: unknown): item is LikeC4Document {
    return reflection.isInstance(item, LikeC4Document);
}

export interface Model extends AstNode {
    readonly $container: LikeC4Document;
    readonly $type: 'Model';
    elements: Array<Element | ExtendElement | RelationWithSource>
    name: 'model'
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface ModelViews extends AstNode {
    readonly $container: LikeC4Document;
    readonly $type: 'ModelViews';
    name: 'views'
    views: Array<View>
}

export const ModelViews = 'ModelViews';

export function isModelViews(item: unknown): item is ModelViews {
    return reflection.isInstance(item, ModelViews);
}

export interface OutgoingExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'OutgoingExpression';
    source: ElementExpression
}

export const OutgoingExpression = 'OutgoingExpression';

export function isOutgoingExpression(item: unknown): item is OutgoingExpression {
    return reflection.isInstance(item, OutgoingExpression);
}

export interface Relation extends AstNode {
    readonly $container: ElementBody | ExtendElementBody | Model;
    readonly $type: 'Relation' | 'RelationWithSource';
    definition?: RelationBody
    target: ElementRef
    title?: string
}

export const Relation = 'Relation';

export function isRelation(item: unknown): item is Relation {
    return reflection.isInstance(item, Relation);
}

export interface RelationBody extends AstNode {
    readonly $container: Relation | RelationWithSource;
    readonly $type: 'RelationBody';
    props: Array<RelationStringProperty>
    tags?: Tags
}

export const RelationBody = 'RelationBody';

export function isRelationBody(item: unknown): item is RelationBody {
    return reflection.isInstance(item, RelationBody);
}

export interface RelationExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'RelationExpression';
    source: ElementExpression
    target: ElementExpression
}

export const RelationExpression = 'RelationExpression';

export function isRelationExpression(item: unknown): item is RelationExpression {
    return reflection.isInstance(item, RelationExpression);
}

export interface RelationStringProperty extends AstNode {
    readonly $container: ElementBody | ElementView | RelationBody;
    readonly $type: 'RelationStringProperty';
    key: 'title'
    value: string
}

export const RelationStringProperty = 'RelationStringProperty';

export function isRelationStringProperty(item: unknown): item is RelationStringProperty {
    return reflection.isInstance(item, RelationStringProperty);
}

export interface ShapeProperty extends AstNode {
    readonly $container: ElementStyleProperty | SpecificationElementKindStyle | ViewRuleStyle;
    readonly $type: 'ShapeProperty';
    key: 'shape'
    value: ElementShape
}

export const ShapeProperty = 'ShapeProperty';

export function isShapeProperty(item: unknown): item is ShapeProperty {
    return reflection.isInstance(item, ShapeProperty);
}

export interface SpecificationElementKind extends AstNode {
    readonly $container: SpecificationRule;
    readonly $type: 'SpecificationElementKind';
    kind: ElementKind
    style?: SpecificationElementKindStyle
}

export const SpecificationElementKind = 'SpecificationElementKind';

export function isSpecificationElementKind(item: unknown): item is SpecificationElementKind {
    return reflection.isInstance(item, SpecificationElementKind);
}

export interface SpecificationElementKindStyle extends AstNode {
    readonly $container: SpecificationElementKind;
    readonly $type: 'SpecificationElementKindStyle';
    props: Array<ColorProperty | ShapeProperty>
}

export const SpecificationElementKindStyle = 'SpecificationElementKindStyle';

export function isSpecificationElementKindStyle(item: unknown): item is SpecificationElementKindStyle {
    return reflection.isInstance(item, SpecificationElementKindStyle);
}

export interface SpecificationRule extends AstNode {
    readonly $container: LikeC4Document;
    readonly $type: 'SpecificationRule';
    elementKinds: Array<SpecificationElementKind>
    name: 'specification'
    tags: Array<SpecificationTag>
}

export const SpecificationRule = 'SpecificationRule';

export function isSpecificationRule(item: unknown): item is SpecificationRule {
    return reflection.isInstance(item, SpecificationRule);
}

export interface SpecificationTag extends AstNode {
    readonly $container: SpecificationRule;
    readonly $type: 'SpecificationTag';
    tag: Tag
}

export const SpecificationTag = 'SpecificationTag';

export function isSpecificationTag(item: unknown): item is SpecificationTag {
    return reflection.isInstance(item, SpecificationTag);
}

export interface StrictElementRef extends AstNode {
    readonly $container: ExtendElement | StrictElementRef;
    readonly $type: 'StrictElementRef';
    el: Reference<Element>
    next?: StrictElementRef
}

export const StrictElementRef = 'StrictElementRef';

export function isStrictElementRef(item: unknown): item is StrictElementRef {
    return reflection.isInstance(item, StrictElementRef);
}

export interface Tag extends AstNode {
    readonly $container: SpecificationTag;
    readonly $type: 'Tag';
    name: Name
}

export const Tag = 'Tag';

export function isTag(item: unknown): item is Tag {
    return reflection.isInstance(item, Tag);
}

export interface Tags extends AstNode {
    readonly $container: ElementBody | RelationBody;
    readonly $type: 'Tags';
    value: Array<Reference<Tag>>
}

export const Tags = 'Tags';

export function isTags(item: unknown): item is Tags {
    return reflection.isInstance(item, Tags);
}

export interface ViewProperty extends AstNode {
    readonly $container: ElementBody | ElementView | RelationBody;
    readonly $type: 'ViewProperty';
    key: 'description' | 'title'
    value: string
}

export const ViewProperty = 'ViewProperty';

export function isViewProperty(item: unknown): item is ViewProperty {
    return reflection.isInstance(item, ViewProperty);
}

export interface ViewRuleAutoLayout extends AstNode {
    readonly $container: ElementView;
    readonly $type: 'ViewRuleAutoLayout';
    direction: ViewRuleLayoutDirection
}

export const ViewRuleAutoLayout = 'ViewRuleAutoLayout';

export function isViewRuleAutoLayout(item: unknown): item is ViewRuleAutoLayout {
    return reflection.isInstance(item, ViewRuleAutoLayout);
}

export interface ViewRuleExpression extends AstNode {
    readonly $container: ElementView;
    readonly $type: 'ViewRuleExpression';
    expressions: Array<Expression>
    isInclude: boolean
}

export const ViewRuleExpression = 'ViewRuleExpression';

export function isViewRuleExpression(item: unknown): item is ViewRuleExpression {
    return reflection.isInstance(item, ViewRuleExpression);
}

export interface ViewRuleStyle extends AstNode {
    readonly $container: ElementView;
    readonly $type: 'ViewRuleStyle';
    props: Array<ColorProperty | ShapeProperty>
    targets: Array<ElementExpression>
}

export const ViewRuleStyle = 'ViewRuleStyle';

export function isViewRuleStyle(item: unknown): item is ViewRuleStyle {
    return reflection.isInstance(item, ViewRuleStyle);
}

export interface WildcardExpression extends AstNode {
    readonly $container: InOutExpression | IncomingExpression | OutgoingExpression | RelationExpression | ViewRuleExpression | ViewRuleStyle;
    readonly $type: 'WildcardExpression';
    isWildcard: boolean
}

export const WildcardExpression = 'WildcardExpression';

export function isWildcardExpression(item: unknown): item is WildcardExpression {
    return reflection.isInstance(item, WildcardExpression);
}

export interface RelationWithSource extends Relation {
    readonly $container: ElementBody | ExtendElementBody | Model;
    readonly $type: 'RelationWithSource';
    definition?: RelationBody
    source: ElementRef
    target: ElementRef
    title?: string
}

export const RelationWithSource = 'RelationWithSource';

export function isRelationWithSource(item: unknown): item is RelationWithSource {
    return reflection.isInstance(item, RelationWithSource);
}

export interface LikeC4AstType {
    AStyleProperty: AStyleProperty
    AnyStringProperty: AnyStringProperty
    ColorProperty: ColorProperty
    Element: Element
    ElementBody: ElementBody
    ElementExpression: ElementExpression
    ElementKind: ElementKind
    ElementProperty: ElementProperty
    ElementRef: ElementRef
    ElementRefExpression: ElementRefExpression
    ElementStringProperty: ElementStringProperty
    ElementStyleProperty: ElementStyleProperty
    ElementView: ElementView
    Expression: Expression
    ExtendElement: ExtendElement
    ExtendElementBody: ExtendElementBody
    InOutExpression: InOutExpression
    IncomingExpression: IncomingExpression
    LikeC4Document: LikeC4Document
    Model: Model
    ModelViews: ModelViews
    OutgoingExpression: OutgoingExpression
    Relation: Relation
    RelationBody: RelationBody
    RelationExpression: RelationExpression
    RelationStringProperty: RelationStringProperty
    RelationWithSource: RelationWithSource
    ShapeProperty: ShapeProperty
    SpecificationElementKind: SpecificationElementKind
    SpecificationElementKindStyle: SpecificationElementKindStyle
    SpecificationRule: SpecificationRule
    SpecificationTag: SpecificationTag
    StrictElementRef: StrictElementRef
    Tag: Tag
    Tags: Tags
    View: View
    ViewProperty: ViewProperty
    ViewRule: ViewRule
    ViewRuleAutoLayout: ViewRuleAutoLayout
    ViewRuleExpression: ViewRuleExpression
    ViewRuleStyle: ViewRuleStyle
    WildcardExpression: WildcardExpression
}

export class LikeC4AstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['AStyleProperty', 'AnyStringProperty', 'ColorProperty', 'Element', 'ElementBody', 'ElementExpression', 'ElementKind', 'ElementProperty', 'ElementRef', 'ElementRefExpression', 'ElementStringProperty', 'ElementStyleProperty', 'ElementView', 'Expression', 'ExtendElement', 'ExtendElementBody', 'InOutExpression', 'IncomingExpression', 'LikeC4Document', 'Model', 'ModelViews', 'OutgoingExpression', 'Relation', 'RelationBody', 'RelationExpression', 'RelationStringProperty', 'RelationWithSource', 'ShapeProperty', 'SpecificationElementKind', 'SpecificationElementKindStyle', 'SpecificationRule', 'SpecificationTag', 'StrictElementRef', 'Tag', 'Tags', 'View', 'ViewProperty', 'ViewRule', 'ViewRuleAutoLayout', 'ViewRuleExpression', 'ViewRuleStyle', 'WildcardExpression'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case ColorProperty:
            case ShapeProperty: {
                return this.isSubtype(AStyleProperty, supertype);
            }
            case ElementExpression:
            case IncomingExpression:
            case InOutExpression:
            case OutgoingExpression:
            case RelationExpression: {
                return this.isSubtype(Expression, supertype);
            }
            case ElementRefExpression:
            case WildcardExpression: {
                return this.isSubtype(ElementExpression, supertype);
            }
            case ElementStringProperty: {
                return this.isSubtype(AnyStringProperty, supertype) || this.isSubtype(ElementProperty, supertype);
            }
            case ElementStyleProperty: {
                return this.isSubtype(ElementProperty, supertype);
            }
            case ElementView: {
                return this.isSubtype(View, supertype);
            }
            case RelationStringProperty:
            case ViewProperty: {
                return this.isSubtype(AnyStringProperty, supertype);
            }
            case RelationWithSource: {
                return this.isSubtype(Relation, supertype);
            }
            case ViewRuleAutoLayout:
            case ViewRuleExpression:
            case ViewRuleStyle: {
                return this.isSubtype(ViewRule, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Element:kind': {
                return ElementKind;
            }
            case 'ElementRef:el':
            case 'StrictElementRef:el': {
                return Element;
            }
            case 'Tags:value': {
                return Tag;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'Element': {
                return {
                    name: 'Element',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'ElementBody': {
                return {
                    name: 'ElementBody',
                    mandatory: [
                        { name: 'elements', type: 'array' },
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'ElementRefExpression': {
                return {
                    name: 'ElementRefExpression',
                    mandatory: [
                        { name: 'isDescedants', type: 'boolean' }
                    ]
                };
            }
            case 'ElementStyleProperty': {
                return {
                    name: 'ElementStyleProperty',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'ElementView': {
                return {
                    name: 'ElementView',
                    mandatory: [
                        { name: 'properties', type: 'array' },
                        { name: 'rules', type: 'array' }
                    ]
                };
            }
            case 'ExtendElementBody': {
                return {
                    name: 'ExtendElementBody',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'Model': {
                return {
                    name: 'Model',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'ModelViews': {
                return {
                    name: 'ModelViews',
                    mandatory: [
                        { name: 'views', type: 'array' }
                    ]
                };
            }
            case 'RelationBody': {
                return {
                    name: 'RelationBody',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'SpecificationElementKindStyle': {
                return {
                    name: 'SpecificationElementKindStyle',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'SpecificationRule': {
                return {
                    name: 'SpecificationRule',
                    mandatory: [
                        { name: 'elementKinds', type: 'array' },
                        { name: 'tags', type: 'array' }
                    ]
                };
            }
            case 'Tags': {
                return {
                    name: 'Tags',
                    mandatory: [
                        { name: 'value', type: 'array' }
                    ]
                };
            }
            case 'ViewRuleExpression': {
                return {
                    name: 'ViewRuleExpression',
                    mandatory: [
                        { name: 'expressions', type: 'array' },
                        { name: 'isInclude', type: 'boolean' }
                    ]
                };
            }
            case 'ViewRuleStyle': {
                return {
                    name: 'ViewRuleStyle',
                    mandatory: [
                        { name: 'props', type: 'array' },
                        { name: 'targets', type: 'array' }
                    ]
                };
            }
            case 'WildcardExpression': {
                return {
                    name: 'WildcardExpression',
                    mandatory: [
                        { name: 'isWildcard', type: 'boolean' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new LikeC4AstReflection();
