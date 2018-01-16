var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray( array, element ) {
  var array = 'foo'
  var element = 1
  return [array, element]
}

function destructivelyAddElementToBeginningOfArray( array, element ) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray( array, element) {
  var array = 'foo'
  var element = 1
  return [element, array]
}
]
