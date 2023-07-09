
type Value = string | number | null
type QueryResult = {values: Value[][], colums: string[]}[]
type TransformResult = Record<string, Value>[]

function transform(queryResult: QueryResult): TransformResult{
  const valueArrays = queryResult.map(({values}) => values)
  const [cat1, cat2, cat3, cat4] = queryResult.map(res => res.values.map(row => row[0]))


  const maxLength = Math.max(...valueArrays.map(arr => arr.length))


  const data = Array(maxLength).fill(null).map((_, i) => ({
    category1: cat1[i],
    category2: cat2[i],
    category3: cat3[i],
    category4: cat4[i]
  }))
  return data
}
