type FilterOp = "eq" | "in"

type FilterPropertyTarget = {
  type: "property"
  name: string
}

type FilterArrayTarget = {
  type: "array"
  value: string[]
}

type FilterLiteralTarget = {
  type: "literal"
  value: string
}

type FilterTarget = FilterPropertyTarget | FilterLiteralTarget | FilterArrayTarget

type Filter = {
  type: FilterOp
  left: FilterTarget
  right: FilterTarget
}

type AndFilter = {
  type: "and"
  left: Filter
  right: Filter
}

declare function parse(query: string): {
  error?: string
  $filter?: Filter | AndFilter
}
