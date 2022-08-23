export default class Validator {
  public static email (input?: string | null) {
    if (!input) return false
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input))
  }

  public static cpf (input?: string | null): boolean {
    if (!input) return false

    input = input.replace(/\D/g, '')

    const regExp = new RegExp(`^(\\d{${11}})$`)
    const checkNumbers = input.match(regExp)
    if (!checkNumbers) return false

    const index0 = input[0]
    const checkEqualsNumber = input.split('').every(char => char === index0)
    if (checkEqualsNumber) return false

    let sum1 = 0
    let sum2 = 0
    let j = input.length

    for (let i = 0; i < 10; i++, j--) {
      if (j > 2) { sum1 += Number(input.charAt(i)) * (j - 1) }
      sum2 += Number(input.charAt(i)) * j
    }

    const checker1 = 11 - (sum1 % 11)
    const chacker2 = 11 - (sum2 % 11)

    const isOk1 = ((checker1 === 10 || checker1 === 11) && (Number(input.charAt(9)) === 0)) ||
      (Number(input.charAt(9)) === checker1)

    const isOk2 = ((chacker2 === 10 || chacker2 === 11) && (Number(input.charAt(10)) === 0)) ||
      (Number(input.charAt(10)) === chacker2)

    return isOk1 && isOk2
  }
}
