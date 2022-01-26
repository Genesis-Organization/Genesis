export const countStrength = (newpass: string): number => {
  const pass = newpass
  let strength = 0
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  const numberChars = /[1234567890]/

  // Length - max 40
  if (pass.length > 16) strength += 40
  else if (pass.length > 12) strength += 20
  else if (pass.length > 6) strength += 5

  // Contains - max 60
  if (pass != pass.toLowerCase()) strength += 15
  if (pass != pass.toUpperCase()) strength += 15
  if (numberChars.test(pass)) strength += 15
  if (specialChars.test(pass)) strength += 15

  return strength
}
