export type ComputedAccessibleNode = {
  atomic?: boolean;
  busy?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  modal?: boolean;
  multiline?: boolean;
  multiselectable?: boolean;
  readOnly?: boolean;
  required?: boolean;
  selected?: boolean;
  colCount?: number;
  colIndex?: number;
  colSpan?: number;
  level?: number;
  posInSet?: number;
  rowCount?: number;
  rowIndex?: number;
  rowSpan?: number;
  setSize?: number;
  valueMax?: number;
  valueMin?: number;
  valueNow?: number;
  autocomplete?: string;
  checked?: string;
  keyShortcuts?: string;
  name?: string;
  placeholder?: string;
  role?: string;
  roleDescription?: string;
  valueText?: string;
  parent?: ComputedAccessibleNode;
  firstChild?: ComputedAccessibleNode;
  lastChild?: ComputedAccessibleNode;
  previousSibling?: ComputedAccessibleNode;
  nextSibling?: ComputedAccessibleNode;
};