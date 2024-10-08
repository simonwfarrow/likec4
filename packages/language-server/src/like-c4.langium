grammar LikeC4

entry LikeC4Grammar:
  (
    specifications+=SpecificationRule |
    models+=Model  |
    views+=ModelViews |
    likec4lib+=LikeC4Lib
  )*
;

// Lib -------------------------------------
LikeC4Lib:
  'likec4lib' '{'
    'icons' '{'
      (icons+=LibIcon)+
    '}'
  '}';

LibIcon:
  name=IconId;

// Specification -------------------------------------

ElementKind:
  name=Id;

Tag:
  name=Id;

RelationshipKind:
  name=Id;

CustomColor:
  name=CustomColorId;

SpecificationRule:
  name='specification' '{'
    (
      elements+=SpecificationElementKind |
      tags+=SpecificationTag |
      relationships+=SpecificationRelationshipKind |
      colors+=SpecificationColor
    )*
  '}';

SpecificationElementKind:
  'element' kind=ElementKind ('{'
    props+=(
      SpecificationElementStringProperty |
      ElementStyleProperty
    )*
  '}')?;

SpecificationElementStringProperty:
  key=('technology' | 'notation') ':'? value=String ';'?;

SpecificationTag:
  'tag' tag=Tag;

SpecificationColor:
  'color' name=CustomColor color=CustomColorValue;

SpecificationRelationshipKind:
  'relationship' kind=RelationshipKind ('{'
    props+=(
      RelationshipStyleProperty |
      SpecificationRelationshipStringProperty
    )*
  '}')?
;

SpecificationRelationshipStringProperty:
  key=('technology' | 'notation') ':'? value=String ';'?;

// Model -------------------------------------

Model:
  name='model' '{'
    elements+=(
      ExtendElement |
      Relation<true> |
      Element
    )*
  '}'
;

Element:
  (
    kind=[ElementKind] name=Id |
    name=Id Eq kind=[ElementKind]
  )
  (props+=String  // title
    (props+=String  // description
      (props+=String  // technology
        (props+=String)?   // tags
      )?
    )?
  )?
  body=ElementBody?
;

ElementBody: '{'
  tags=Tags?
  props+=ElementProperty*
  elements+=(
    Relation<false> |
    Element
  )*
'}'
;

ElementProperty:
  ElementStringProperty | ElementStyleProperty | LinkProperty | IconProperty | MetadataProperty;

ElementStringProperty:
  key=('title' | 'technology' | 'description') ':'? value=String ';'?;

ExtendElement:
  'extend' element=FqnElementRef body=ExtendElementBody
;

ExtendElementBody:  '{'
  elements+=(
    Relation<true> |
    Element
  )*
'}'
;

//
FqnElementRef:
  el=[Element:Id] ({infer FqnElementRef.parent=current} StickyDot el=[Element:Id])*;

ElementRef:
  el=[Element:Id] ({infer ElementRef.parent=current} StickyDot el=[Element:Id])*;

Tags:
  (values+=[Tag:TagId])+ ({infer Tags.prev=current} ',' (values+=[Tag:TagId])*)* ';'?
;

Relation<isExplicit>:
  (<isExplicit> source=ElementRef | <!isExplicit> source=ElementRef?)
  (
    kind=[RelationshipKind:DotId] |
    '-[' kind=[RelationshipKind] ']->' |
    '->'
  )
  target=ElementRef
  (
    title=String
    technology=String?
  )?
  tags=Tags?
  body=RelationBody?
;

RelationBody: '{'
  tags=Tags?
  props+=RelationProperty*
'}'
;

RelationProperty:
  RelationStringProperty |
  RelationNavigateToProperty |
  RelationStyleProperty |
  LinkProperty |
  MetadataProperty
;

RelationStringProperty:
  key=('title' | 'technology' | 'description') ':'? value=String ';'?;

RelationStyleProperty:
  key='style' '{'
    props+=RelationshipStyleProperty*
  '}'
;

MetadataProperty:
  'metadata' MetadataBody
;

MetadataBody: '{'
  props+=(MetadataAttribute)*
'}'
;

MetadataAttribute:
  key=IdTerminal ':'? value=String ';'?
;

// Views -------------------------------------

ModelViews:
  name='views' '{'
    views+=LikeC4ViewRule*
  '}';

type LikeC4View = ElementView | DynamicView;
LikeC4ViewRule returns LikeC4View:
  ElementView | DynamicView;

ElementView:
  'view' name=Id? (
    'extends' extends=ElementViewRef |
    'of' viewOf=ElementRef
  )?
  body=ElementViewBody?
;

DynamicView:
  'dynamic' 'view' name=Id body=DynamicViewBody?
;

ViewRef:
  view=[LikeC4View];

ElementViewRef:
  view=[ElementView];

DynamicViewRef:
  view=[DynamicView];

ElementViewBody: '{'
  tags=Tags?
  props+=ViewProperty*
  rules+=ViewRule*
'}'
;

DynamicViewBody: '{'
  tags=Tags?
  props+=ViewProperty*
  (
    steps+=(DynamicViewParallelSteps | DynamicViewStep) |
    rules+=DynamicViewRule
  )*
'}'
;


type StringProperty =
  ElementStringProperty |
  ViewStringProperty |
  RelationStringProperty |
  MetadataAttribute |
  SpecificationElementStringProperty |
  SpecificationRelationshipStringProperty |
  NotationProperty |
  NotesProperty
;

ViewProperty:
  ViewStringProperty | LinkProperty
;

ViewStringProperty:
  key=('title' | 'description') ':'? value=String ';'?;

ViewLayoutDirection returns string:
  'TopBottom' | 'LeftRight' | 'BottomTop' | 'RightLeft';

ViewRule:
  ViewRulePredicate |
  ViewRuleStyle |
  ViewRuleAutoLayout
;

DynamicViewRule:
  DynamicViewIncludePredicate |
  ViewRuleStyle |
  ViewRuleAutoLayout
;

DynamicViewParallelSteps:
  ('parallel'|'par') '{'
    (steps+=DynamicViewStep)*
  '}'
;

DynamicViewStep:
  source=ElementRef
  (isBackward?='<-' |  '->' | '-[' kind=[RelationshipKind] ']->' | kind=[RelationshipKind:DotId] )
  target=ElementRef
  title=String?
  custom=CustomRelationProperties?
;

ViewRulePredicate:
  {infer IncludePredicate} 'include' predicates=Predicates |
  {infer ExcludePredicate} 'exclude' predicates=Predicates
;
Predicates:
  value=Predicate ({infer Predicates.prev=current} ',' value=Predicate?)*
;

Predicate:
  RelationPredicate |
  ElementPredicate
;

ElementPredicate:
  ElementPredicates;

ElementPredicates infers ElementPredicate:
  ElementPredicateOrWhere ({infer ElementPredicateWith.subject=current} 'with' custom=CustomElementProperties?)?
;

ElementPredicateOrWhere:
  ElementExpression ({infer ElementPredicateWhere.subject=current} 'where' where=WhereElementExpression?)?
;

WhereElementExpression:
  WhereElementOr
;
WhereElementOr infers WhereElementExpression:
  WhereElementAnd ({infer WhereBinaryExpression.left=current} operator='or' right=WhereElementAnd)*
;
WhereElementAnd infers WhereElementExpression:
  WhereElementPrimary ({infer WhereBinaryExpression.left=current} operator='and' right=WhereElementPrimary)*
;

WhereElementPrimary infers WhereElementExpression:
  '(' WhereElementExpression ')' |
  WhereElementNegation |
  WhereElement
;

WhereElementNegation:
  'not' value=WhereElementExpression;

WhereElement:
  {infer WhereElementTag} 'tag' EqOperator value=[Tag:TagId]? |
  {infer WhereElementKind} 'kind' EqOperator value=[ElementKind]?
;

ElementExpression:
  ElementSelectorExpression |
  ElementDescedantsExpression
;

ElementSelectorExpression infers ElementExpression:
  {infer WildcardExpression} isWildcard?='*' |
  {infer ElementTagExpression} 'element.tag' IsEqual tag=[Tag:TagId]? |
  {infer ElementKindExpression} 'element.kind' IsEqual kind=[ElementKind]?
;

ElementDescedantsExpression infers ElementExpression:
  ElementRef (
    {infer ExpandElementExpression.expand=current} DotUnderscore |
    {infer ElementDescedantsExpression.parent=current} DotWildcard
  )?
;

RelationPredicate:
  RelationPredicates
;

RelationPredicates infers RelationPredicate:
  RelationPredicateOrWhere ({infer RelationPredicateWith.subject=current} 'with' custom=CustomRelationProperties?)?
;

RelationPredicateOrWhere:
  RelationExpression ({infer RelationPredicateWhere.subject=current} 'where' where=WhereRelationExpression?)?
;

WhereRelationExpression:
  WhereRelationOr
;

WhereRelationOr infers WhereRelationExpression:
  WhereRelationAnd ({infer WhereBinaryExpression.left=current} operator='or' right=WhereRelationAnd)*
;
WhereRelationAnd infers WhereRelationExpression:
  WhereRelationPrimary ({infer WhereBinaryExpression.left=current} operator='and' right=WhereRelationPrimary)*
;

WhereRelationPrimary infers WhereRelationExpression:
  '(' WhereRelationExpression ')' |
  WhereRelationNegation |
  WhereRelation
;

WhereRelationNegation:
  'not' value=WhereRelationExpression;

WhereRelation:
  {infer WhereRelationTag} 'tag' EqOperator value=[Tag:TagId]? |
  {infer WhereRelationKind} 'kind' EqOperator value=[RelationshipKind]?
;

type WhereTagEqual = WhereElementTag | WhereRelationTag;
type WhereKindEqual = WhereElementKind | WhereRelationKind;

type WhereExpression = WhereElementExpression | WhereRelationExpression;

RelationExpression:
  InOutRelationExpressions |
  DirectedRelationExpressions
;

InOutRelationExpressions infers RelationExpression:
  IncomingRelationExpression ({infer InOutRelationExpression.inout=current} '->')?
;

IncomingRelationExpression:
  '->' to=ElementExpression;

DirectedRelationExpressions infers RelationExpression:
  OutgoingRelationExpression ({infer DirectedRelationExpression.source=current} target=ElementExpression)?
;

OutgoingRelationExpression:
  from=ElementExpression
  (isBidirectional?='<->' | '->' | '-[' kind=[RelationshipKind] ']->' | kind=[RelationshipKind:DotId])
;

// Comma-separated list of ElementExpressions
ElementExpressionsIterator:
  value=ElementExpression ({infer ElementExpressionsIterator.prev=current} ',' (value=ElementExpression)?)*
;

DynamicViewIncludePredicate:
  'include' predicates=DynamicViewPredicateIterator
;

DynamicViewPredicateIterator:
  value=ElementPredicate ({infer DynamicViewPredicateIterator.prev=current} ',' (value=ElementPredicate)?)*
;

ViewRuleStyle:
  'style' target=ElementExpressionsIterator '{'
    props+=(
      StyleProperty |
      NotationProperty
    )*
  '}';

ViewRuleAutoLayout:
  'autoLayout' direction=ViewLayoutDirection;

NotationProperty:
  key='notation' ':'? value=String ';'?
;
NotesProperty:
  key='notes' ':'? value=String ';'?
;

CustomElementProperties: '{'
  props+=(
    NavigateToProperty |
    ElementStringProperty |
    NotationProperty |
    StyleProperty
  )*
'}'
;

CustomRelationProperties: '{'
  props+=(
    RelationNavigateToProperty |
    RelationStringProperty |
    NotationProperty |
    NotesProperty |
    RelationshipStyleProperty
  )*
'}'
;

NavigateToProperty:
  key='navigateTo' value=ViewRef;

RelationNavigateToProperty:
  key='navigateTo' value=DynamicViewRef;

// Common properties -------------------------------------

LinkProperty:
  key='link' ':'? value=Uri title=String? ';'?;
ColorProperty:
  key='color' ':'? (themeColor=ThemeColor | customColor=[CustomColor:CustomColorId]) ';'?;

OpacityProperty:
  key='opacity' ':'? value=Percent ';'?;

// Element properties -------------------------------------
IconProperty:
  key='icon' ':'? (libicon=[LibIcon:IconId] | value=Uri) ';'?;

ShapeProperty:
  key='shape' ':'? value=ElementShape ';'?;


BorderStyleValue returns string:
  LineOptions | 'none';

BorderProperty:
  key='border' ':'? value=BorderStyleValue ';'?;

StyleProperty:
  ColorProperty |
  ShapeProperty |
  BorderProperty |
  OpacityProperty |
  IconProperty;

ElementStyleProperty:
  key='style' '{'
    props+=StyleProperty*
  '}';


// -------------------------
// Relationship Style Properties
LineProperty:
  key='line' ':'? value=LineOptions ';'?;
ArrowProperty:
  key=('head' | 'tail') ':'? value=ArrowType ';'?;

RelationshipStyleProperty:
  ColorProperty | LineProperty | ArrowProperty;

LineOptions returns string:
  'solid' |
  'dashed' |
  'dotted'
;

ArrowType returns string:
  'none' |
  'normal' |
  'onormal' |
  'dot' |
  'odot' |
  'diamond' |
  'odiamond' |
  'crow' |
  'open' |
  'vee'
;

ThemeColor returns string:
  'primary' | 'secondary' | 'muted' | 'slate' | 'blue' | 'indigo' | 'sky' | 'red' | 'gray' | 'green' | 'amber';
ElementShape returns string:
  'rectangle' | 'person' | 'browser' | 'mobile' | 'cylinder' | 'storage' | 'queue';

CustomColorValue returns string:
  Hash (Id | Hex);

IconId returns string:
  LIB_ICON;

Uri returns string:
  URI_WITH_SCHEMA | URI_RELATIVE;

TagId returns string:
  Hash Id;

DotId returns string:
  Dot Id;

CustomColorId returns string:
  IdTerminal | ElementShape | ArrowType | LineOptions | 'element' | 'model';

Id returns string:
  IdTerminal | ElementShape | ThemeColor | ArrowType | LineOptions | 'element' | 'model';

fragment EqOperator:
  (
    operator=(Eq | NotEqual) |
    operator="is" not?='not'?
  )
;

fragment IsEqual:
  isEqual?=Eq | NotEqual;

// -----------------------------------
// Symbols
// terminal fragment HASH: '#';
// terminal fragment UNDERSCORE: '_';
// terminal fragment DASH: '-';
// terminal fragment LETTER: /[^\W\d_]/;
// terminal fragment DIGIT: /[0-9]/;
// terminal fragment NEWLINE: /[\r?\n]/;
// terminal fragment SPACE: /[^\S\r\n]/;

// -------------------------
// Comments
hidden terminal BLOCK_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal LINE_COMMENT: /\/\/[^\n\r]*/;
hidden terminal WS: /[\t ]+/;
hidden terminal NL: /[\r\n]+/;

// -----------------------------------
// Terminals
//terminal LineStartWithDash: /(?<=([\r?\n][^\S\r\n]*))-/;

// LibIcons
terminal LIB_ICON: /(aws|gcp|tech):[-\w]*/;

terminal URI_WITH_SCHEMA: /\w+:\/\/\S+/;
terminal URI_RELATIVE: /\.{0,2}\/[^\/]\S+/;

terminal DotUnderscore: /\b\._/;
terminal DotWildcard: /\b\.\*/;
terminal Hash: '#';

// No space allowed before dot
terminal StickyDot: /\b\./;
terminal Dot: '.';
terminal NotEqual: /\!\={1,2}/;
terminal Eq: /\={1,2}/;
terminal Percent: /\b\d+%/;

terminal String: /"[^"]*"|'[^']*'/;

// terminal  TagId: HASH LETTER (LETTER | DIGIT | UNDERSCORE | DASH)*;
// terminal IdTerminal: (LETTER | UNDERSCORE+ (LETTER | DIGIT)) (LETTER | DIGIT | UNDERSCORE | DASH)*;
terminal IdTerminal:  /[_]*[a-zA-Z][-\w]*/;
terminal Hex: /[a-zA-Z0-9]+/;
