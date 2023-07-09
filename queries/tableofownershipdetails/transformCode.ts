
type Value = string | number | null
type QueryResult = {values: Value[][], colums: string[]}[]
type TransformResult = Record<string, Value>[]

function transform(queryResult: QueryResult): TransformResult{
  return queryResult[0].values.map((row) => {
    const mappedValues = Object.fromEntries(queryResult[0].columns.map((k, i) => [k, row[i]]));
    return {
      name: "Year",
      value: mappedValues.year,
      children: [
        {
          name: "Total",
          value: mappedValues.total,
          children: [
            {
              name: "Residents",
              value: mappedValues.residents,
              children: [
                { name: "Central Bank", value: mappedValues.central_bank },
                { name: "OMFIs", value: mappedValues.omfis },
                { name: "Other financial institutions", value: mappedValues.other_financial_institutions },
                { name: "Other Residents", value: mappedValues.other_residents },
              ],
            },
            { name: "Non-Residents", value: mappedValues.non_residents },
          ],
        },
      ],
    };
  });
}