/** ************ PASSWORD USER **************/
function lengthP (str) {
  return str.length < 6 || str.length > 18
}

function upperCaseAndLowerCaseP (str) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])/.test(str)

  return !regex
}

function spacesP (str) {
  const regex = /^[^\s]*$/.test(str)

  return !regex
}

function numbersP (str) {
  const regex = /^[^\s]*$/.test(str)

  return !regex
}

/** ************ EMAIL USER **************/
function isEmailE (str) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  return regex
}

module.exports = {
  lengthP,
  upperCaseAndLowerCaseP,
  spacesP,
  numbersP,
  isEmailE
}
