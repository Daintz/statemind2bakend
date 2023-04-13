function upperCaseAndLowerCase (str) {
  const hasUpperCase = /[A-Z]/.test(str)
  const hasLowerCase = /[a-z]/.test(str)

  return !hasUpperCase || !hasLowerCase
}

module.exports = { upperCaseAndLowerCase }
