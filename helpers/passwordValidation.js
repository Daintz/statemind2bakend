function lengthP (str) {
  return str.length < 6 || str.length > 18
}

function upperCaseAndLowerCase (str) {
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

module.exports = { lengthP, upperCaseAndLowerCase, spacesP, numbersP }
