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

function addElementToEndOfArray( array, element ) {
  var array = 'foo'
  var element = 1
  return [element, array]
}

function destructivelyAddElementToEndOfArray( array, element ) {
  array.push(element)
  return array
}

function accessElementInArray( array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift(array)
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(array)
  return array 
}