type Combinable = number | string
type ConversionDescription = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  )
    result = +input1 + +input2
  else result = input1.toString() + input2.toString()

  return result
}

const combinedNumbers = combine(2, 3, 'as-number')
console.log(combinedNumbers)

const combinedNumbers2 = combine('2', '3', 'as-number')
console.log(combinedNumbers2)

const combinedStrings = combine('Tiago', 'Jimmy', 'as-text')
console.log(combinedStrings)
